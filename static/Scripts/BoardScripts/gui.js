var curLineNumber;

function goToStartPosition(element) {
    var brdWrapper = $(element).parents(".chessBoard")[0];
	curLineNumber = ($(brdWrapper).data('type') == 'ChessTask' || $(brdWrapper).data('type') == 'regular') ? "line" : "line0";
    $(getNextLine(brdWrapper)).click();
}

function goToFinishPosition(element) {
    var brdWrapper = $(element).parents(".chessBoard")[0];
	curLineNumber = ($(brdWrapper).data('type') == 'ChessTask' || $(brdWrapper).data('type') == 'regular') ? "line" : "line0";
    var elem = brdWrapper;
    var lastElem;
    while (elem) {
        lastElem = elem;
        elem = getNextLine(elem);
    }
    $(lastElem).click();
}

function goToNextPosition(element) {
    var brdWrapper = $(element).parents(".chessBoard")[0];
    if (curBrdWrapper && (curBrdWrapper.id == brdWrapper.id)) {
        curLineNumber = findLineNum(curMoveElement);
        $(getNextLine(curMoveElement)).click();
    }
    else {
        if (brdWrapper.curMoveElement) {
            curLineNumber = findLineNum(brdWrapper.curMoveElement);
            $(getNextLine(brdWrapper.curMoveElement)).click();
        }
        else {
            curLineNumber = "line0";
            var nextElem = getNextLine(getNextLine(brdWrapper));
            if (nextElem)
                $(nextElem).click();
            else
                $(getNextLine(brdWrapper)).click();
        }
    }
}

function goToPrevPosition(element) {
    var brdWrapper = $(element).parents(".chessBoard")[0];
    if (curBrdWrapper && (curBrdWrapper.id == brdWrapper.id)) {
        curLineNumber = findLineNum(curMoveElement);
        $(getPrevLine(curMoveElement)).click();
    }
    else {
        if (brdWrapper.curMoveElement) {
            curLineNumber = findLineNum(brdWrapper.curMoveElement);
            $(getPrevLine(brdWrapper.curMoveElement)).click();
        }
        else {
            curLineNumber = "line0";
            $(getNextLine(brdWrapper)).click();
        }
    }
}

function findLineNum(elem) {
    var classes = elem.className.split(/\s/);
    for (var i = 0, len = classes.length; i < len; i++)
        if (/^line/.test(classes[i])) return classes[i];
    return null;
}

function classStartsWithLine(elem) {
    var classes = elem.className.split(/\s/);
    for (var i = 0, len = classes.length; i < len; i++) {
        if (classes[i] == "line0") {
            curLineNumber = "line0";
            return true;
        }
        if (classes[i] == curLineNumber) return true;
    }

    return false;
}

function findFirstLine(elems) {
    for (var i = 0; i < elems.length; i++) {
        if (classStartsWithLine(elems[i]))
            return elems[i];
    }
    return null;
}

function findLastLine(elems) {
    for (var i = elems.length - 1; i >= 0; i--) {
        if (classStartsWithLine(elems[i]))
            return elems[i];
    }
    return null;
}

function getNextLineDown(elem) {
    var next = $(elem).nextAll();
    if (next.length != 0) {
        for (var i = 0; i < next.length; i++) {
            if (classStartsWithLine(next[i]))
                return next[i];
            var child = $(next[i]).children();
            if (child.length > 0) {
                var firstLine = findFirstLine(child);
                if (firstLine)
                    return firstLine;
                var found = getNextLineDown(child[0]);
                if (found)
                    return found;
            }
        }
    }
    return null;
}

function getPrevLineDown(elem) {
    var prev = $(elem).prevAll();
    if (prev.length != 0) {
        for (var i = 0; i < prev.length; i++) {
            if (classStartsWithLine(prev[i]))
                return prev[i];
            var child = $(prev[i]).children();
            if (child.length > 0) {
                var lastLine = findLastLine(child);
                if (lastLine)
                    return lastLine;
                var found = getPrevLineDown(child[i]);
                if (found)
                    return found;
            }
        }
    }
    return null;

}

function getPrevLine(elem) {
    var result = getPrevLineDown(elem);
    var parent = $(elem).parent();
    while (!result && (parent.length > 0) && (!parent.hasClass('section'))) {
        result = getPrevLineDown(parent);
        if (!result)
            parent = parent.parent();
    }
    return result;
}

function getNextLine(elem) {
    var result = getNextLineDown(elem);
    var parent = $(elem).parent();
    while (!result && (parent.length > 0) && (!parent.hasClass('section'))) {
        result = getNextLineDown(parent);
        if (!result)
            parent = parent.parent();
    }
    return result;
}

var curMoveElement;
var curBrdWrapper;
$(document).keydown(function (ev) {
    if (ev.ctrlKey) {
        var elem;
        if (ev.keyCode == 39) {
            elem = $("#next_page");
        }
        if (ev.keyCode == 37) {
            elem = $("#prev_page");
        }
        if (!elem)
            return true;
        if (elem.length > 0)
            window.location = $(elem[0]).attr("href");
        return false;
    }
    else {
        if (!curMoveElement)
            return true;
        var elems;
        curLineNumber = findLineNum(curMoveElement);
        if (ev.keyCode == 39) {
            elems = $(getNextLine(curMoveElement));
        }
        if (ev.keyCode == 37) {
            elems = $(getPrevLine(curMoveElement));
        }
        if (!elems)
            return true;
        if (elems.length > 0)
            $(elems[0]).click();
        return false;
    }
});

function loadMove(fen, element, move) {
    if (curMoveElement) {
        $(curMoveElement).removeClass('current_move');
    }
    curMoveElement = element;
    curMoveElement.className += ' current_move';
    $(curMoveElement).addClass('current_move');
    element = $(element).parents('.section')[0];
    if (!element)
        element = document;
    var brdWrapper = $(element).find('.chessBoard')[0];
    curBrdWrapper = brdWrapper;
    brdWrapper.curMoveElement = curMoveElement;
    brdWrapper.board.loadFEN(fen);
    brdWrapper.gui.drawBoardPosition();
    if (move) {
        var fromX = move.charAt(0);
        var fromY = move.charAt(1);
        var toX = move.charAt(2);
        var toY = move.charAt(3);
        var piece = brdWrapper.board.squares[toX][toY].piece;
        var knight = piece ? (piece.name == "knight" ? true : false) : false;
        brdWrapper.boardMarkers.notaDrawArrow(fromX, fromY, toX, toY, knight);
    }
}

function promoteTo(pieceName, element) {
    var brdWrapper = $(element).parent().parent().parent()[0];
    var promBox = brdWrapper.promotionView;
    $(promBox).fadeOut('slow');
    var mv = $(promBox).data('move');
    var c = pieceName.charAt(0).toLowerCase();
    if (pieceName == "knight")
        c = 'n';
    mv = mv + c;

    brdWrapper.mouseHandler.playController.MoveMade(mv, function (result) {
        if (result) {
            brdWrapper.gui.makeMove('pawn', mv.charAt(1), mv.charAt(2), mv.charAt(3),
                mv.charAt(4), pieceName);
        }
        else {
            brdWrapper.gui.drawBoardPosition();
        }
        brdWrapper.gui.BoardDisabled = false;
    });
}

function BoardController() {
    // Rotates the board
    this.flipBoard =
        function (boardId) {
            var brdWrapper = $(document).find('#' + boardId)[0];
            if (brdWrapper.gui.flipped)
                brdWrapper.gui.flipped = false;
            else
                brdWrapper.gui.flipped = true;
            $(brdWrapper.whiteIndicator).addClass('black');
            $(brdWrapper.whiteIndicator).removeClass('white');
            $(brdWrapper.blackIndicator).removeClass('black');
            $(brdWrapper.blackIndicator).addClass('white');

            var temp = brdWrapper.whiteIndicator;
            brdWrapper.whiteIndicator = brdWrapper.blackIndicator;
            brdWrapper.blackIndicator = temp;

            brdWrapper.gui.drawBoardPosition();
            brdWrapper.boardMarkers.redrawMarkers();
        };

    this.loadMove =
        function (boardId, moveId) {
            var brdWrapper = $(document).find('#' + boardId)[0];
            var game = brdWrapper.games[0];

            if (moveId == "end") {
                moveId = game.lastMove;
            }
            var fen = game.FENs[game.displayNotation[moveId]["fenlink"].variation][game.displayNotation[moveId]["fenlink"].number];
            brdWrapper.board.loadFEN(fen);
            game.currPosition = fen;
            var oldid = game.notationMove;
            game.notationMove = moveId;

            brdWrapper.gui.displayMove(game, brdWrapper.board, oldid);

            if (moveId != "start") {
                var fromX = game.displayNotation[moveId]["fromto"].fromX;
                var fromY = game.displayNotation[moveId]["fromto"].fromY;
                var toX = game.displayNotation[moveId]["fromto"].toX;
                var toY = game.displayNotation[moveId]["fromto"].toY;

                var knight = (game.displayNotation[moveId]["token"].charAt(0) == "N" ? true : false);

                brdWrapper.boardMarkers.notaDrawArrow(fromX, fromY, toX, toY, knight);
            } else
                brdWrapper.boardMarkers.clearMarkers();

        };
}


function GUI(boardWrapper) {
    var board = boardWrapper.board;
    var boardTable = boardWrapper.boardTable;
    var boardMarkers = boardWrapper.boardMarkers;
    var lang = chessBoardLang;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var letter = [];
    letter["a"] = 1;
    letter["b"] = 2;
    letter["c"] = 3;
    letter["d"] = 4;
    letter["e"] = 5;
    letter["f"] = 6;
    letter["g"] = 7;
    letter["h"] = 8;

    this.IsFinished = false;
    this.BoardDisabled = false;

    // If board is flipped
    this.flipped = false;

    this.addNotaMove = function (text, fen, move) {
        if (!this.notation) return;

        var moveString = '<span data-fen="' + fen + '"';
        if (move) {
            moveString += ' data-move="' + move + '"';
        }
        moveString += ' class="line">' + text + '</span>';

        this.notation.innerHTML += moveString + ' ';
    };

    this.makeMove = function (piece, fromX, fromY, toX, toY, promoteTo) {
        var moveNumber = board.fullMoves;

        var move = board.formMove(piece, fromX, fromY, toX, toY, promoteTo);
        board.moveHandler(piece, fromX, fromY, toX, toY, promoteTo);
        this.drawBoardPosition(board);

        if (this.notation) {
            var fen = board.currentFEN();

            var moveText = '';

            if (moveNumber == 1 && !this.notation.notEmpty) {
                this.notation.notEmpty = true;
                moveText += moveNumber + '.';
                if (board.currentMove == 'white')
                    moveText += '..';
                moveText += ' ';
            } else if (board.currentMove == 'black') {
                moveText += moveNumber + '. ';
            }

            moveText += move.AsString();

            this.addNotaMove(moveText, fen, move.LongString());
        }
    };

    this.parseMove =
        function (token, varNum, aIsFinished) {
            var moveArray = token.match(/([RBQKPN])?([a-h])?([1-8])?([x])?([a-h])([1-8])([=]?)([qnrbQNRB]?)([+#]?)/);
            var fromX;
            var fromY;
            var toX;
            var toY;
            var piece;
            var promoteTo;

            fromX = moveArray[2];
            fromY = moveArray[3];

            piece = board.squares[fromX][fromY].piece.name;
            this.IsFinished = aIsFinished;

            toX = moveArray[5];
            toY = moveArray[6];

            if (moveArray[8]) {
                switch (moveArray[8].toLowerCase()) {
                    case "r":
                        promoteTo = "rook";
                        break;
                    case "b":
                        promoteTo = "bishop";
                        break;
                    case "q":
                        promoteTo = "queen";
                        break;
                    case "n":
                        promoteTo = "knight";
                        break;
                    default:
                        promoteTo = '';
                        break;
                }
            } else {
                promoteTo = '';
            }

            // Make piece move + animation	   

            var castle = board.castleMove(piece, fromX, toX);
            if (castle.castling) {
                this.AnimateMove(piece, fromX, fromY, toX, toY, promoteTo, 0, 600);
                this.AnimateMove(castle.piece, castle.fromX, castle.fromY, castle.toX, castle.toY, null, -1, 600);
            } else {
                this.AnimateMove(piece, fromX, fromY, toX, toY, promoteTo, 0, 600);
            }
        };

    // if varLvl = -1 => no move needed
    this.AnimateMove =
        function (piece, fromX, fromY, toX, toY, promoteTo, varLvl, AnimDuration) {
            var animateFromPiece = $(boardTable).find(".piece" + fromX + fromY)[0];
            var AnimateFromSquare = this.getGUISquare(fromX, fromY);
            var posSquare = $(AnimateFromSquare).position();
            var posAnimate = $(animateFromPiece).position();
            animateFromPiece.style.left = posAnimate.left + "px";
            animateFromPiece.style.top = posAnimate.top + "px";
            var offsetX = posAnimate.left - posSquare.left;
            var offsetY = posAnimate.top - posSquare.top;
            animateFromPiece.style.position = 'absolute';
            var AnimateToPiece = this.getGUISquare(toX, toY);
            var posToAnimate = $(AnimateToPiece).position();

            animateFromPiece.dataPiece = piece;
            animateFromPiece.dataFromX = fromX;
            animateFromPiece.dataFromY = fromY;
            animateFromPiece.dataToX = toX;
            animateFromPiece.dataToY = toY;
            animateFromPiece.dataPromoteTo = promoteTo;
            animateFromPiece.dataVarLvl = varLvl;
            $(animateFromPiece).animate({
                "left": posToAnimate.left + offsetX,
                "top": posToAnimate.top + offsetY
            }, AnimDuration, function () {
                if (parseInt(this.dataVarLvl) == -1)
                    return;
                boardWrapper.gui.makeMove(this.dataPiece, this.dataFromX, parseInt(this.dataFromY),
                        this.dataToX, parseInt(this.dataToY), this.dataPromoteTo);
            });
        };

    this.blinkPiece =
        function (square) {
            x = square.charAt(0);
            y = square.charAt(1);
            var animateFromPiece = $(boardTable).find(".piece" + x + y)[0];
            $(animateFromPiece).blink({
                speed: 200,
                blinks: 4
            });
        };

    this.ShowActions =
        function (Actions) {
            boardMarkers.clearMarkers();
            var element = $(document).find("#puzzleMessage")[0];
            if (Actions.length == 0) {
                if (element != null) {
                    if (this.BoardDisabled)
                        element.innerHTML = lang.yourTurn;
                }
                return;
            }
            var NeedDisable = true;
            if (this.BoardDisabled)
                NeedDisable = false;
            this.BoardDisabled = true;

            if ((Actions.length > 0) && (Actions[0].charAt(0) == 'p')) {
                if (board.currentFEN(true) == Actions[0].substr(1))
                    Actions.splice(0, 1);
            }

            if (Actions.length == 0) {
                if (NeedDisable) {
                    this.BoardDisabled = false;
                } else {
                    if (element != null)
                        element.innerHTML = lang.yourTurn;
                }
            } else {
                $(this).everyTime(800, 'MoveTimer', function (i) {
                    if (i == Actions.length + 1) {
                        if (NeedDisable) {
                            this.BoardDisabled = false;
                            if (element != null)
                                element.innerHTML = lang.yourTurn;
                        }

                        if (this.TaskFinished) {
                            $('.task_notation .line').addClass('active').on('click', function () {
                                loadMove($(this).attr('data-fen'), this, $(this).attr('data-move'));
                            });
                        }
                    } else if (Actions[i - 1] != undefined)
                        switch (Actions[i - 1].charAt(0)) {
                        case "p":
                            {
                                board.loadFEN(Actions[i - 1].substr(1));
                                boardWrapper.gui.drawBoardPosition();
                                break;
                            }
                        case "m":
                            {
                                if (element != null && !$(element).hasClass('solved')) {
                                    element.innerHTML = '<span class="ajaxload right">' + lang.animating + '</span>';
                                }
                                boardWrapper.gui.parseMove(Actions[i - 1].substr(1), 0);
                                break;
                            }
                        case "b":
                            {
                                boardWrapper.gui.blinkPiece(Actions[i - 1].substr(1));
                                break;
                            }
                        case "x":
                            {
                                boardWrapper.boardMarkers.drawMarkers(Actions[i - 1].substr(1));
                                break;
                            }
                        default:
                            {
                                break;
                            }
                    }
                }, Actions.length + 1);
            }
        };

    var firstDraw = true;

    this.drawBoardPosition =
        function () {
            if (!firstDraw) {
                $(boardTable).find('td').children('.piece').remove();
            } else {
                firstDraw = false;
            }

            for (var i = 0; i < board.pieces.length; i++) {
                var piece = board.pieces[i];
                var square = piece.square;
                if (square != undefined) {
                    var GUIsquare = this.getGUISquare(square.x, square.y);
                    var pieceImg = document.createElement("div");
                    pieceImg.className = "piece" + square.x + square.y + ' piece ' + piece.color.charAt(0) + piece.name;
                    GUIsquare.appendChild(pieceImg);
                }
            }

            if (boardMarkers != null)
                boardMarkers.clearMarkers();

            if (board.currentMove == 'white') {
                $(boardWrapper.blackIndicator).hide();
                $(boardWrapper.whiteIndicator).show();
            } else {
                $(boardWrapper.blackIndicator).show();
                $(boardWrapper.whiteIndicator).hide();
            }

            if (!firstDraw || this.flipped)
                this.drawCoordinates();
        };

    // Draws the coordinates according to this.flipped state
    this.drawCoordinates =
        function () {
            var lttr;
            var nmbr;
            for (var i = 0; i < letters.length; i++) {
                if (this.flipped) {
                    lttr = letters[7 - i];
                    nmbr = i + 1;
                } else {
                    lttr = letters[i];
                    nmbr = 8 - i;
                }

                var holder = boardTable.rows[0].cells[i + 1];
                holder.innerHTML = lttr.toUpperCase();
                holder = boardTable.rows[9].cells[i + 1];
                holder.innerHTML = lttr.toUpperCase();
                holder = boardTable.rows[i + 1].cells[0];
                holder.innerHTML = nmbr;
                holder = boardTable.rows[i + 1].cells[9];
                holder.innerHTML = nmbr;
            }
        };

    this.displayMove =
        function (game, board, oldid) {
            this.drawBoardPosition(game, board);
        };

    // Returns the GUI square reference given the board coordinates;
    this.getGUISquare =
        function (x, y) {
            if (!this.flipped) {
                x = letter[x];
                y = 9 - y;
            } else {
                x = 9 - letter[x];
            }

            var element = boardTable.rows[y].cells[x];

            return element;
        };

    // Returns the board coordinates given the id of GUI square
    this.getSquare =
        function (className) {
            var startIndex;
            if (className.match(/piece/)) {
                startIndex = className.indexOf('piece');
                return { x: className.charAt(startIndex + 5), y: className.charAt(startIndex + 6) };
            }
            startIndex = className.indexOf("square");
            if (!this.flipped) {
                x = letters[className.charAt(startIndex + 6) - 1];
                y = 9 - className.charAt(startIndex + 7);
            } else {
                x = letters[8 - className.charAt(startIndex + 6)];
                y = className.charAt(startIndex + 7);
            }
            return { x: x, y: y };
        };
}
