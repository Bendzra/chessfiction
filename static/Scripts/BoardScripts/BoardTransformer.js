var boardController = new BoardController();

var lastBoardId = 1;


function TransformBoards(parentElement) {
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

    var tableViewElement = null;

    $(parentElement).find(".chessBoard").each(function (index, brdWrapper) {
        if (brdWrapper.boardTransformed) {
            return;
        }

        brdWrapper.boardTransformed = true;
        var Actions = [];

        brdWrapper.id = "ChessBoard" + lastBoardId++;

        if (brdWrapper.className.indexOf('small') > -1) {
            brdWrapper.squareSize = 27;
        }
        else if (brdWrapper.className.indexOf('analysis') > -1) {
            brdWrapper.squareSize = 22;
        }
        else {
            brdWrapper.squareSize = 50;
        }

        var lang = chessBoardLang;

        $(brdWrapper).find('.data-chessActions span').each(function (index, node) {
            Actions.push(node.innerHTML);
        }).html("");

        if (tableViewElement == null) {
            tableViewElement = document.createElement('div');
            tableViewElement.className = 'tableView';

            var boardElement = document.createElement("table");
            boardElement.className = "game_board";
            var boardTable_innerHTML = '';
            boardTable_innerHTML += '<tr class="row8"><td class="corner cola"></td><td class="lettertop topa cola">A</td><td class="lettertop topb colb">B</td><td class="lettertop topc colc">C</td><td class="lettertop topd cold">D</td><td class="lettertop tope cole">E</td><td class="lettertop topf colf">F</td><td class="lettertop topg colg">G</td><td class="lettertop toph colh">H</td><td class="corner colh"><div class="indicator black"></div></td></tr>';
            boardTable_innerHTML += '<tr class="row8"><td class="numberleft left8 cola">8</td><td class="white square11 cola"></td><td class="black square21 colb"></td><td class="white square31 colc"></td><td class="black square41 cold"></td><td class="white square51 cole"></td><td class="black square61 colf"></td><td class="white square71 colg"></td><td class="black square81 colh"></td><td class="numberright right8 colh">8</td></tr>';
            boardTable_innerHTML += '<tr class="row7"><td class="numberleft left7 cola">7</td><td class="black square12 cola"></td><td class="white square22 colb"></td><td class="black square32 colc"></td><td class="white square42 cold"></td><td class="black square52 cole"></td><td class="white square62 colf"></td><td class="black square72 colg"></td><td class="white square82 colh"></td><td class="numberright right7 colh">7</td></tr>';
            boardTable_innerHTML += '<tr class="row6"><td class="numberleft left6 cola">6</td><td class="white square13 cola"></td><td class="black square23 colb"></td><td class="white square33 colc"></td><td class="black square43 cold"></td><td class="white square53 cole"></td><td class="black square63 colf"></td><td class="white square73 colg"></td><td class="black square83 colh"></td><td class="numberright right6 colh">6</td></tr>';
            boardTable_innerHTML += '<tr class="row5"><td class="numberleft left5 cola">5</td><td class="black square14 cola"></td><td class="white square24 colb"></td><td class="black square34 colc"></td><td class="white square44 cold"></td><td class="black square54 cole"></td><td class="white square64 colf"></td><td class="black square74 colg"></td><td class="white square84 colh"></td><td class="numberright right5 colh">5</td></tr>';
            boardTable_innerHTML += '<tr class="row4"><td class="numberleft left4 cola">4</td><td class="white square15 cola"></td><td class="black square25 colb"></td><td class="white square35 colc"></td><td class="black square45 cold"></td><td class="white square55 cole"></td><td class="black square65 colf"></td><td class="white square75 colg"></td><td class="black square85 colh"></td><td class="numberright right4 colh">4</td></tr>';
            boardTable_innerHTML += '<tr class="row3"><td class="numberleft left3 cola">3</td><td class="black square16 cola"></td><td class="white square26 colb"></td><td class="black square36 colc"></td><td class="white square46 cold"></td><td class="black square56 cole"></td><td class="white square66 colf"></td><td class="black square76 colg"></td><td class="white square86 colh"></td><td class="numberright right3 colh">3</td></tr>';
            boardTable_innerHTML += '<tr class="row2"><td class="numberleft left2 cola">2</td><td class="white square17 cola"></td><td class="black square27 colb"></td><td class="white square37 colc"></td><td class="black square47 cold"></td><td class="white square57 cole"></td><td class="black square67 colf"></td><td class="white square77 colg"></td><td class="black square87 colh"></td><td class="numberright right2 colh">2</td></tr>';
            boardTable_innerHTML += '<tr class="row1"><td class="numberleft left1 cola">1</td><td class="black square18 cola"></td><td class="white square28 colb"></td><td class="black square38 colc"></td><td class="white square48 cold"></td><td class="black square58 cole"></td><td class="white square68 colf"></td><td class="black square78 colg"></td><td class="white square88 colh"></td><td class="numberright right1 colh">1</td></tr>';
            boardTable_innerHTML += '<tr class="row1"><td class="corner cola"><div class="flipicon" title="' + chessBoardLang.flipBoard + '"></div></td><td class="letterbottom bottoma cola">A</td><td class="letterbottom bottomb colb">B</td><td class="letterbottom bottomc colc">C</td><td class="letterbottom bottomd cold">D</td><td class="letterbottom bottome cole">E</td><td class="letterbottom bottomf colf">F</td><td class="letterbottom bottomg colg">G</td><td class="letterbottom bottomh colh">H</td>';
            boardTable_innerHTML += '<td class="corner colh"><div class="indicator white"></div></td></tr>';
            $(boardElement).html(boardTable_innerHTML);

            var markersElement = document.createElement('div');
            markersElement.className = 'markersView';

            var promotionElement = document.createElement('div');
            promotionElement.className = 'promotion';
            promotionElement.innerHTML =
                  "<div onmouseup=\"promoteTo('queen', this)\" class='queen piece bqueen'></div>"
                + "<div onmouseup=\"promoteTo('rook', this)\" class='rook piece brook'></div>"
                + "<div onmouseup=\"promoteTo('bishop', this)\" class='bishop piece bbishop'></div>"
                + "<div onmouseup=\"promoteTo('knight', this)\" class='knight piece bknight'></div>";

            var buttonsElement = document.createElement('div');
            buttonsElement.className = 'board_buttons';
            buttonsElement.innerHTML =
                  "<div onmousedown=\"goToStartPosition(this)\" class='button_start'></div>"
                + "<div onmousedown=\"goToPrevPosition(this)\" class='button_left'></div>"
                + "<div onmousedown=\"goToNextPosition(this)\" class='button_right'></div>"
                + "<div onmousedown=\"goToFinishPosition(this)\" class='button_end'></div>";


            tableViewElement.appendChild(boardElement);
            tableViewElement.appendChild(markersElement);
            tableViewElement.appendChild(promotionElement);
            tableViewElement.appendChild(buttonsElement);
        }

        var tableView = tableViewElement.cloneNode(true);
        brdWrapper.boardTable = tableView.children[0];
        brdWrapper.markersView = tableView.children[1];
        brdWrapper.promotionView = tableView.children[2];

        brdWrapper.blackIndicator = $(brdWrapper.boardTable).find('.indicator.black')[0];
        brdWrapper.whiteIndicator = $(brdWrapper.boardTable).find('.indicator.white')[0];

        $(".flipicon", brdWrapper.boardTable).mousedown(function () {
            boardController.flipBoard(brdWrapper.id);
        });

        var boardRect = $(brdWrapper).data('rect');
        brdWrapper.isBoardrect = (boardRect != null && boardRect != '');
        brdWrapper.visibleCols = 8;
        brdWrapper.visibleRows = 8;
        if (brdWrapper.isBoardrect) {
            var fromX = boardRect.charAt(0); // Левый столбец
            var toX = boardRect.charAt(3);   // Правый столбец
            var fromY = parseInt(boardRect.charAt(1)); // Нижняя строка
            var toY = parseInt(boardRect.charAt(4));   // Верхняя строка

            brdWrapper.startX = fromX;
            brdWrapper.startY = fromY;
            brdWrapper.finishX = toX;
            brdWrapper.finishY = toY;
            brdWrapper.visibleCols = letter[toX] - letter[fromX] + 1;
            brdWrapper.visibleRows = toY - fromY + 1;

            // Скрыть столбцы слева
            for (var i = letter['a']; i < letter[fromX]; i++) {
                $(brdWrapper.boardTable).find('td.col' + letters[i - 1]).hide();
            }

            // Скрыть строки сверху
            for (var i = toY + 1; i <= 8; i++) {
                $(brdWrapper.boardTable).find('tr.row' + i).hide();
            }

            // Скрыть строки снизу
            for (var i = 1; i < fromY; i++) {
                $(brdWrapper.boardTable).find('tr.row' + i).hide();
            }

            // Скрыть столбцы справа
            for (var i = letter[toX] + 1; i <= letter['h']; i++) {
                $(brdWrapper.boardTable).find('td.col' + letters[i - 1]).hide();
            }
        }

        if ($(brdWrapper).data('start-fen') == null) {
            $(brdWrapper).data('start-fen', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
        }

        if ($(brdWrapper).data('type') == null) {
            $(brdWrapper).data('type', 'play');
        }

        brdWrapper.board = new chessBoard();
        brdWrapper.rules = new chessRules(brdWrapper.board);
        brdWrapper.boardMarkers = new BoardMarkers(brdWrapper);
        brdWrapper.gui = new GUI(brdWrapper);

        brdWrapper.gui.BoardDisabled = ($(brdWrapper).data('enabled') != null) && ($(brdWrapper).attr('data-enabled') == 'false') && brdWrapperisBoardrect;

        brdWrapper.board.loadFEN($(brdWrapper).data('start-fen'));
        var needInvert = $(brdWrapper).data('board-inverted');
        if (needInvert != null) {
            brdWrapper.gui.flipped = needInvert == "True";
            if (brdWrapper.gui.flipped == true) {
                $(brdWrapper.whiteIndicator).addClass('black');
                $(brdWrapper.whiteIndicator).removeClass('white');
                $(brdWrapper.blackIndicator).removeClass('black');
                $(brdWrapper.blackIndicator).addClass('white');

                var temp = brdWrapper.whiteIndicator;
                brdWrapper.whiteIndicator = brdWrapper.blackIndicator;
                brdWrapper.blackIndicator = temp;
            }
        }
        brdWrapper.gui.drawBoardPosition();

        if ($(brdWrapper).data('type') == 'ChessTask') {
            brdWrapper.gui.notation = $(document).find('.task_notation')[0];
            brdWrapper.gui.addNotaMove('[...]', brdWrapper.board.currentFEN());
        }

        var startMarkers = $(brdWrapper).data('markers');

        if (Actions.length > 0)
            brdWrapper.gui.ShowActions(Actions);
        if (startMarkers != null && startMarkers != '')
            brdWrapper.boardMarkers.drawMarkers(startMarkers);
        brdWrapper.appendChild(tableView);

        if (!brdWrapper.isBoardrect) {
            var mouseHandler = new MouseHandler();
            mouseHandler.Initialize(brdWrapper);
            mouseHandler.playController = new PlayControllerFactory()
                .CreatePlayController($(brdWrapper).data('type'), brdWrapper);
        }
    });
}

$(document).ready(function () {
    TransformBoards(document);
});
