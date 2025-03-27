function MouseHandler() {
    this.dragObject = null;
    this.mouseOffset = null;
    this.dropTargets = [];
    this.playController = null;

    var possibleMoveSquares = [];
    var boardPosition = null;
    var brdWrapper = null;

    this.Initialize = function (boardWrapper) {
        brdWrapper = boardWrapper;
        brdWrapper.mouseHandler = this;

        addMouseDownHandler(boardWrapper);
        addMouseMoveHandler(boardWrapper);
        addMouseUpHandler(boardWrapper);

		brdWrapper.addEventListener("touchstart", touch2Mouse, true);
		brdWrapper.addEventListener("touchmove", touch2Mouse, true);
		brdWrapper.addEventListener("touchend", touch2Mouse, true);
    };

    this.controlledSquares =
        function (fromX, fromY) {
            var result = [];
            var piece = brdWrapper.board.squares[fromX][fromY].piece;
            if (piece != undefined && piece.color == brdWrapper.board.currentMove) {
                result = eval("brdWrapper.rules." + piece.name + "(\"" + fromX + "\", " + fromY + ", \"" + piece.color + "\")");
            }
            return result;
        };

    this.addDropTarget =
        function (dropTarget) {
            this.dropTargets.push(dropTarget);
        };

    var addMouseMoveHandler =
        function (domElement) {
            $(domElement).mousemove(brdWrapper, function (ev) {
                if (!brdWrapper.mouseHandler.dragObject)
                    return true;
                var handler = brdWrapper.mouseHandler,
                    mousePosition = mouseCoords(ev),
                    dragObjectStyle = handler.dragObject.style,
                    mouseOffset = handler.mouseOffset;

                dragObjectStyle.top = (mousePosition.y - boardPosition.top - mouseOffset.y) + "px";
                dragObjectStyle.left = (mousePosition.x - boardPosition.left - mouseOffset.x) + "px";
                return true;
            });
        };

    var addMouseDownHandler =
        function (domElement) {
			$(domElement).mousedown(brdWrapper, function (ev) {
                var gui = brdWrapper.gui;
                if (gui.BoardDisabled)
                    return false;
                if (brdWrapper.visibleCols != 8 || brdWrapper.visibleRows != 8) {
                    return false;
                }

                var handler = brdWrapper.mouseHandler;
                var mousePos = mouseCoords(ev);
                var brd = brdWrapper.boardTable;

                boardPosition = $(brd.rows[0].cells[0]).offset();

                var sq = brd.rows[1].cells[1];
                var pos = $(sq).offset();
                var xpos = Math.abs(truncate((mousePos.x - pos.left) / brdWrapper.squareSize)) + 1;
                var ypos = truncate((mousePos.y - pos.top) / brdWrapper.squareSize) + 1;

                if (xpos < 1 || xpos > 8 || ypos < 1 || ypos > 8) {
                    return false;
                }

                var movingPiece = brd.rows[ypos].cells[xpos].children[0];
                if (!movingPiece) {
                    return false;
                }

                var boardPos = gui.getSquare('square' + xpos + ypos);
                possibleMoveSquares = handler.controlledSquares(boardPos.x, boardPos.y);
                if (!possibleMoveSquares || possibleMoveSquares.length == 0) {
                    return false;
                }

                for (var i = 0; i < possibleMoveSquares.length; i++) {
                    var tempSq = gui.getGUISquare(possibleMoveSquares[i].charAt(0), possibleMoveSquares[i].charAt(1));
                    tempSq.className += " controlled";
                    handler.dropTargets.push(tempSq);
                }

                handler.mouseOffset = getMouseOffset(
                        brdWrapper.squareSize);
                movingPiece.style.position = 'absolute';
                movingPiece.style.top = (mousePos.y - boardPosition.top - handler.mouseOffset.y) + "px";
                movingPiece.style.left = (mousePos.x - boardPosition.left - handler.mouseOffset.x) + "px";
                handler.dragObject = movingPiece;
                return false;
            });
        };

    var addMouseUpHandler =
        function (domElement) {
            $(domElement).mouseup(brdWrapper, function (ev) {
                if (brdWrapper.mouseHandler.dragObject == null)
                    return true;
                var handler = brdWrapper.mouseHandler;
                var gui = brdWrapper.gui;
                var board = brdWrapper.board;

                var mousePos = mouseCoords(ev);
                var promoting = false;

                for (var i = 0; i < handler.dropTargets.length; i++) {
                    var curTarget = handler.dropTargets[i];
                    var targPos = getPosition(curTarget);
                    var targWidth = parseInt(curTarget.clientWidth);
                    var targHeight = parseInt(curTarget.clientHeight);

                    var boardTable = brdWrapper.boardTable;

                    if ((mousePos.x > targPos.x) && (mousePos.x < (targPos.x + targWidth)) && (mousePos.y > targPos.y) &&
                        (mousePos.y < (targPos.y + targHeight))) {
                        var coords = gui.getSquare(brdWrapper.mouseHandler.dragObject.className);
                        var piece = board.squares[coords.x][coords.y].piece;
                        var square = piece.square;
                        var oldSquare = gui.getGUISquare(square.x, square.y);
                        var curCoords = gui.getSquare(curTarget.className);
                        var currSquare = gui.getGUISquare(curCoords.x, curCoords.y);

                        if (piece.name == "pawn" && (curCoords.y == 1 || curCoords.y == 8)) {
                            var promBox = brdWrapper.promotionView; //
                            $(promBox).data('move', 'p' + square.x + square.y + curCoords.x + curCoords.y);
                            //выставляем нужный цвет
                            var pieceNames = ['queen', 'rook', 'bishop', 'knight'];
                            for (var i in pieceNames) {
                                var name = pieceNames[i];
                                $(promBox).find('.' + name)[0].className = name + ' piece ' + board.currentMove.charAt(0) + name;
                            }
                            gui.BoardDisabled = true;
                            promBox.style.position = 'absolute';
                            $(promBox).css('left', $(boardTable).width() / 2 - $(promBox).width() / 2 + 'px');
                            $(promBox).css('top', $(boardTable).height() / 2 - $(promBox).height() / 2 + 'px');

                            $(promBox).fadeIn();

                            promoting = true;
                            $(oldSquare).children().remove();
                            $(currSquare).append(handler.dragObject);
                            handler.dragObject.style.position = 'static';
                        } else {
                            var c = piece.name.charAt(0).toLowerCase();
                            if (piece.name == "knight")
                                c = 'n';

                            var movingPiece = handler.dragObject;
                            handler.dragObject = null;

                            handler.playController.MoveMade(square.x + square.y + curCoords.x + curCoords.y, function (result) {
                                movingPiece.style.position = 'static';
                                if (result) {
                                    gui.makeMove(piece.name, square.x, square.y, curCoords.x, curCoords.y, null);
                                }
                            });

                            break;
                        }
                    }
                }

                if (!promoting && handler.dragObject)
                    handler.dragObject.style.position = 'static';
                handler.dropTargets = [];
                for (var j = 0; j < possibleMoveSquares.length; j++) {
                    var tempSq = gui.getGUISquare(possibleMoveSquares[j].charAt(0), possibleMoveSquares[j].charAt(1));
                    $(tempSq).removeClass("controlled");
                }
                possibleMoveSquares = [];
                handler.dragObject = null;
                return true;
            });
        };

    function getPosition(e) {
        var p = $(e).offset();
        return { x: p.left, y: p.top };
    }

    function mouseCoords(ev) {
        if (ev.pageX || ev.pageY) {
            return { x: ev.pageX, y: ev.pageY };
        }
        var body = document.body;
        return {
            x: ev.clientX + body.scrollLeft - body.clientLeft,
            y: ev.clientY + body.scrollTop - body.clientTop
        };
    }

    function getMouseOffset(size) {
        return { x: Math.floor(size / 2), y: Math.floor(size / 2) };
    }

    function truncate(n) {
        return Math.round(n - 0.5);
    }
	
	///////////////////
	
	var lastTouchstartTime = null;
	var lastTouchstartX = null;
	var lastTouchstartY = null;

	function touch2Mouse(e)
	{
	  var theTouch = e.changedTouches[0];
	  var mouseEv;

	  switch(e.type)
	  {
		case "touchstart":
			mouseEv = "mousedown";
			if(lastTouchstartTime == null) {
				lastTouchstartTime = e.timeStamp;
				lastTouchstartX = theTouch.pageX;
				lastTouchstartY = theTouch.pageY;
			} else {
				if(e.timeStamp - lastTouchstartTime < 400) {
					if(Math.abs(lastTouchstartX - theTouch.pageX) < 20) {
						if(Math.abs(lastTouchstartY - theTouch.pageY) < 20) {
							mouseEv = "dblclick";
						}
					}
				}
				lastTouchstartTime = null;
				lastTouchstartX = null;
				lastTouchstartY = null;
			}
			break;
		case "touchend":   mouseEv="mouseup"; break;
		case "touchmove":  mouseEv="mousemove"; break;
		default: return;
	  }

	  var mouseEvent = document.createEvent("MouseEvent");
	  mouseEvent.initMouseEvent(
	    mouseEv, true, true, window,
		1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY,
		false, false, false, false, 0, null
	  );
	  theTouch.target.dispatchEvent(mouseEvent);
	  
	  if(brdWrapper && brdWrapper.className.indexOf("analysis") != -1 ) {
		  // analysis board stores dblclicks only
		  if(mouseEv == "dblclick") {
			e.preventDefault();
		  }
	  } else {
		e.preventDefault();
	  }
	}
}
