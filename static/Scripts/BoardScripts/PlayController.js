function PlayControllerFactory() {
    this.CreatePlayController = function (boardType, boardWrapper) {
        if (boardType == "ChessTask") {
            return new ChessTaskPlayController(boardWrapper);
        }
		
		if (boardType == "regular") {
            return new RegularPlayController(boardWrapper);
        }

        return new DefaultPlayController();
    };
}

function DefaultPlayController() {
    this.MoveMade = function (move, callback) {
        callback(true);
    };
}

//>>>>>>>>>>>>//
function RegularPlayController(brdWrapper) {
    var gui = brdWrapper.gui;
    var board = brdWrapper.board;
    var lang = chessBoardLang;
	
	brdWrapper.gui.notation = $(document).find('.task_notation')[0];

    this.MoveMade =
        function (aMove, callback) {
			
			var $line = $('.task_notation .line');
			var curMove = $('.current_move')[0];
			
			// TODO: вариант с несколькими линиями
			/*
			if( curMove != undefined && curMove != $line[$line.length-1] ) {
				if(curMove.innerText == '[...]') {
					brdWrapper.gui.notation.innerHTML += "<br />... ";
				} else {
					brdWrapper.gui.notation.innerHTML += "<br />... " + curMove.outerHTML + " ";
				}
			}
			*/
			
			// single line only. with current move cut out.
			var s = brdWrapper.gui.notation.innerHTML;
			if( curMove != undefined) {
				s = " ";
				for(var i=0; i < $line.length; i++)
				{
					s += $line[i].outerHTML + ' ';
					if($line[i].className.indexOf('current_move') != -1) break;
				}
			}
			brdWrapper.gui.notation.innerHTML = s;
			
			
			callback(true);
			
			$line = $('.task_notation .line');
			$line.addClass('active').on('click', function () {
				loadMove($(this).attr('data-fen'), this, $(this).attr('data-move'));
			})
			$line.last().addClass('current_move');
			$line.last().fadeOut('slow');
			$line.last().fadeIn('slow');
			$line.removeClass('current_move', 1000);

        };

}
//>>>>>>>>>>>>//

function ChessTaskPlayController(brdWrapper) {
    var gui = brdWrapper.gui;
    var serializedState = $(brdWrapper).data('serialized-state');
    var TaskFinished = false;
    var aUrl = $(brdWrapper).data('move-callback');
    var lang = chessBoardLang;

    this.MoveMade =
        function (aMove, callback) {
            var context = $(document).find("#puzzleMessage")[0];
            var showLoader = setTimeout(function () { context.innerHTML = '<div class=\"ajaxload\">' + lang.checkingMove + '</div>'; }, 300);
            $.ajax({
                type: "Post",
                url: aUrl,
                dataType: "json",
                data: {
                    MoveMade: aMove,
                    SerializedState: serializedState
                },
                context: context,
                complete: function () { clearTimeout(showLoader); },
                success: function (msg) {
                    var Result;
                    var Actions;

                    Result = msg["Result"];
                    Actions = msg["Actions"];

                    serializedState = msg['SerializedState'];

                    gui.BoardDisabled = msg["IsFinished"];
                    TaskFinished = msg["IsFinished"];
                    gui.TaskFinished = TaskFinished;
                    gui.ShowActions(Actions);

                    var textMessage;

                    if (!msg["IsFinished"]) {
                        if (Result) {
                            this.className = 'correct';
                            textMessage = lang.correctMove;
                        } else {
                            this.className = 'incorrect';
                            textMessage = lang.incorrectMove;
                        }
                    } else {
                        var infoElement = $(document).find('#puzzle_information')[0];

                        if (msg["IsSolved"]) {
                            textMessage = "<span class=\"accept_icon\">" + lang.problemSolved + " (" + msg["Score"] + ")</span>";
                            $(infoElement).addClass('solved');
                        } else {
                            textMessage = "<span class=\"cancel_icon\">" + lang.problemUnsolved + " (" + msg["Score"] + ")</span>"
                                    + '<br/><span style="font-size:12px; font-weight: normal;">' + lang.tooManyMistakes + '</span>';
                            $(infoElement).addClass('unsolved');
                        }
                        this.className = 'solved';

                        if ($('#rate').length != 0) {
                            $.fn.raty.readOnly(false, '#rate');
                        }

                        if ($('.next_practice'))
                            $('.next_practice').show();

                        var obtainedElo = parseInt(msg['ObtainedElo']);
                        var c = obtainedElo >= 0 ? '+' : '';
                        if (msg['IsUserCheater'])
                            $('#elo_change').html(lang.UserIsCheater);
                        else if (msg['IsRatingChanged'])
                            $('#elo_change').html(lang.eloChange + ' ' + msg["NewRating"] + ' ( ' +
                                    c + msg['ObtainedElo'] + ' )');
                        else if (msg['IsUserAuthenticated'])
                            $('#elo_change').html(lang.eloNotChanged);

                        $('#task_info').hide();
                        $('#user_elo').html('(' + msg["NewRating"] + ')');

                    }
                    this.innerHTML = textMessage;
                    callback(Result);

                    if (Actions.length == 0 && msg["IsFinished"]) {
                        $('.task_notation .line').addClass('active').on('click', function () {
                            loadMove($(this).attr('data-fen'), this, $(this).attr('data-move'));
                        });
                    }
                },
                error: function () {
                    this.innerHTML = lang.internalServerError;
                    callback(false);
                }
            });
        };
}
