function isin(element, set) {
	for (var j = 0; j < set.length; j++) {
		if (element == set[j]) {
			return true;
		}
	}
	return false;
}

function chessRules(aBoard) {
	var board = aBoard;
	var checking = false;
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

    this.pawn =
        function(fromX, fromY, color) {
            var toX;
            var toY;
            var toYlong;
            var fromXnum;
            var result = [];
            var mod;
            fromXnum = letter[fromX];
            // White pawns move "up", black move "down"
            if (color == "white")
                mod = 1;
            else
                mod = -1;
            toX = fromX;
            toY = parseInt(fromY + mod);
            var oldFEN = board.currentFEN();

            if (board.squares[toX][toY].piece == null) {
                if (!checking) {
                    board.makeMove(fromX, fromY, toX, toY, false);
                    if (!this.check(color)) {
                        result.push(toX + toY);
                    }
                    board.loadFEN(oldFEN);
                } else result.push(toX + toY);
            }

            toYlong = parseInt(toY + mod);

            if (((fromY == 2 && color == "white") || (fromY == 7 && color == "black")) && board.squares[toX][toY].piece == null && board.squares[toX][toYlong].piece == null) {
                if (!checking) {
                    board.makeMove(fromX, fromY, toX, toYlong, false);
                    if (!this.check(color)) {
                        result.push(toX + toYlong);
                    }
                    board.loadFEN(oldFEN);
                } else result.push(toX + toYlong);
            }

            if (fromXnum > 1) {
                toX = letters[fromXnum - 1 - 1];
                var capturePiece = board.squares[toX][toY].piece;
                if (capturePiece != null && capturePiece.color != color) {
                    if (!checking) {
                        board.makeMove(fromX, fromY, toX, toY, true);
                        if (!this.check(color)) {
                            result.push(toX + toY);
                        }
                        board.loadFEN(oldFEN);
                    } else result.push(toX + toY);
                }
                if (toX + toY == board.enPassant) {
                    if (!checking) {
                        board.makeMove(fromX, fromY, toX, toY, true);
                        //document.write (toX + (toY + mod));
                        board.squares[toX][toY - mod].piece.square = null;
                        board.squares[toX][toY - mod].piece = null;
                        if (!this.check(color)) {
                            result.push(toX + toY);
                        }
                        board.loadFEN(oldFEN);
                    } else result.push(toX + toY);
                }
            }

            if (fromXnum < 8) {
                toX = letters[fromXnum + 1 - 1];
                capturePiece = board.squares[toX][toY].piece;
                if (capturePiece != null && capturePiece.color != color && capturePiece != "king") {
                    if (!checking) {
                        board.makeMove(fromX, fromY, toX, toY, true);
                        if (!this.check(color)) {
                            result.push(toX + toY);
                        }
                        board.loadFEN(oldFEN);
                    } else result.push(toX + toY);
                }
                if (toX + toY == board.enPassant) {
                    if (!checking) {
                        board.makeMove(fromX, fromY, toX, toY, true);
                        board.squares[toX][toY - mod].piece.square = null;
                        board.squares[toX][toY - mod].piece = null;
                        if (!this.check(color)) {
                            result.push(toX + toY);
                        }
                        board.loadFEN(oldFEN);
                    } else result.push(toX + toY);
                }
            }

            return result;
        };

    this.knight =
        function(fromX, fromY, color) {
            var oldFEN = board.currentFEN();
            var fromXnum;
            var toX;
            var toY;
            var toXnum;
            var result = [];
            fromXnum = letter[fromX];
            for (var i = -2; i <= 2; i++) {
                for (var j = -2; j <= 2; j++) {
                    if (Math.abs(i) != Math.abs(j) && i != 0 && j != 0) {
                        toXnum = parseInt(fromXnum + i);
                        toX = letters[toXnum - 1];
                        toY = parseInt(fromY + j);
                        if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <= 8) {
                            var pieceTo = board.squares[toX][toY].piece;
                            if (pieceTo == null || pieceTo.color != color) {
                                var capture = pieceTo != null;

                                if (!checking) {
                                    board.makeMove(fromX, fromY, toX, toY, capture);
                                    if (!this.check(color)) {
                                        result.push(toX + toY);
                                    }
                                    board.loadFEN(oldFEN);
                                } else result.push(toX + toY);
                            }
                        }
                    }
                }
            }
            return result;
        };

        this.bishop =
	function (fromX, fromY, color, range) {
	    var oldFEN = board.currentFEN();
	    var toXnum;
	    var toX;
	    var toY;
	    var fromXnum;
	    if (range == undefined)
	        range = 7;
	    var result = [];
	    fromXnum = letter[fromX];
	    for (var i = 1; i <= range; i++) {
	        var j = i;
	        toXnum = parseInt(fromXnum + i);
	        toX = letters[toXnum - 1];
	        toY = parseInt(fromY + j);
	        if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <= 8) {
	            var pieceTo = board.squares[toX][toY].piece;

	            if (pieceTo == null || pieceTo.color != color) {
	                var capture = pieceTo != null;

	                if (!checking) {
	                    board.makeMove(fromX, fromY, toX, toY, capture);
	                    if (!this.check(color)) {
	                        result.push(toX + toY);
	                    }
	                    board.loadFEN(oldFEN);
	                } else result.push(toX + toY);
	            }

	            if (pieceTo != null) {
	                break;
	            }
	        }
	    }
	    for (var i = 1; i <= range; i++) {
	        var j = -i;
	        toXnum = parseInt(fromXnum + i);
	        toX = letters[toXnum - 1];
	        toY = parseInt(fromY + j);
	        if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <= 8) {
	            var pieceTo = board.squares[toX][toY].piece;
	            if (pieceTo == null || pieceTo.color != color) {
	                capture = pieceTo != null;
	                if (!checking) {
	                    board.makeMove(fromX, fromY, toX, toY, capture);
	                    if (!this.check(color)) {
	                        result.push(toX + toY);
	                    }
	                    board.loadFEN(oldFEN);
	                } else result.push(toX + toY);
	            }
	            if (pieceTo != null)
	                break;
	        }
	    }
	    for (var i = -1; i >= -range; i--) {
	        var j = i;
	        toXnum = parseInt(fromXnum + i);
	        toX = letters[toXnum - 1];
	        toY = parseInt(fromY + j);
	        if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <= 8) {
	            var pieceTo = board.squares[toX][toY].piece;
	            if (pieceTo == null || pieceTo.color != color) {
	                capture = pieceTo != null;

	                if (!checking) {
	                    board.makeMove(fromX, fromY, toX, toY, capture);
	                    if (!this.check(color)) {
	                        result.push(toX + toY);
	                    }
	                    board.loadFEN(oldFEN);
	                } else result.push(toX + toY);
	            }
	            if (pieceTo != null)
	                break;
	        }
	    }
	    for (var i = -1; i >= -range; i--) {
	        var j = -i;
	        toXnum = parseInt(fromXnum + i);
	        toX = letters[toXnum - 1];
	        toY = parseInt(fromY + j);
	        if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <= 8) {
	            var pieceTo = board.squares[toX][toY].piece;
	            if (pieceTo == null || pieceTo.color != color) {
	                capture = pieceTo != null;
	                if (!checking) {
	                    board.makeMove(fromX, fromY, toX, toY, capture);
	                    if (!this.check(color)) {
	                        result.push(toX + toY);
	                    }
	                    board.loadFEN(oldFEN);
	                } else result.push(toX + toY);
	            }
	            if (pieceTo != null)
	                break;
	        }
	    }
	    return result;
	}

	this.rook =
	function (fromX, fromY, color, range) {
		var oldFEN = board.currentFEN();
		var toXnum;
		var toX;
		var toY;
		var fromXnum;
		if (range == undefined)
			range = 7;
		var result = [];
		fromXnum = letter[fromX];
		for (var i = 1; i <= range; i++) {
			toXnum = parseInt(fromXnum + i);
			toX = letters[toXnum - 1];
			toY = fromY;
			if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <=8) {
				var pieceTo = board.squares[toX][toY].piece;
				if (pieceTo == null || pieceTo.color != color) {
				    var capture = pieceTo != null;
					if (!checking) {
						board.makeMove(fromX, fromY, toX, toY, capture);
						if (!this.check(color)) {
							result.push(toX + toY);
						}
						board.loadFEN(oldFEN);
					} else result.push(toX + toY);
				}
				if (pieceTo != null)
					break;
			}
		}
		for (var i = 1; i <= range; i++) {
			toXnum = fromXnum;
			toX = letters[toXnum - 1];
			toY = parseInt(fromY + i);
			if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <=8) {
				var pieceTo = board.squares[toX][toY].piece;
				if (pieceTo == null || pieceTo.color != color) {
				    capture = pieceTo != null;
					if (!checking) {
						board.makeMove(fromX, fromY, toX, toY, capture);
						if (!this.check(color)) {
							result.push(toX + toY);
						}
						board.loadFEN(oldFEN);
					} else result.push(toX + toY);
				}
				if (pieceTo != null)
					break;
			}
		}
		for (var i = -1; i >= -range; i--) {
			toXnum = parseInt(fromXnum + i);
			toX = letters[toXnum - 1];
			toY = fromY;
			if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <=8) {
				var pieceTo = board.squares[toX][toY].piece;
				if (pieceTo == null || pieceTo.color != color) {
				    capture = pieceTo != null;
					if (!checking) {
						board.makeMove(fromX, fromY, toX, toY, capture);
						if (!this.check(color)) {
							result.push(toX + toY);
						}
						board.loadFEN(oldFEN);
					} else result.push(toX + toY);
				}
				if (pieceTo != null)
					break;
			}
		}
		for (var i = -1; i >= -range; i--) {
			toXnum = fromXnum;
			toX = letters[toXnum - 1];
			toY = parseInt(fromY + i);
			if (toXnum > 0 && toXnum <= 8 && toY > 0 && toY <=8) {
				var pieceTo = board.squares[toX][toY].piece;
				if (pieceTo == null || pieceTo.color != color) {
				    capture = pieceTo != null;
					if (!checking) {
						board.makeMove(fromX, fromY, toX, toY, capture);
						if (!this.check(color)) {
							result.push(toX + toY);
						}
						board.loadFEN(oldFEN);
					} else result.push(toX + toY);
				}
				if (pieceTo != null)
					break;
			}
		}
		return result;
	}
	
	this.queen =
	function (fromX, fromY, color) {        
		return this.bishop(fromX, fromY, color).concat(this.rook(fromX, fromY, color));
	}

	this.king =
	function (fromX, fromY, color) {
		var oldFEN = board.currentFEN();
		var toXnum;
		var toX;
		var toXpass;
		var toXpass2;
		var toY;
		var fromXnum;
		var result = [];
		fromXnum = letter[fromX];
		toY = fromY;
		var capture = true; // whatsoever if castling
		if (board.castling != "-" && fromXnum == 5 && !checking && !this.check(color)) {
			if ((color == "white" && board.castling.match(/K/)) || (color == "black" && board.castling.match(/k/))) {
				toXnum = fromXnum ;
				toXpass = letters[toXnum + 1 - 1];
				toX = letters[toXnum + 2 - 1];
				if (board.squares[toXpass][toY].piece == null && board.squares[toX][toY].piece == null) {
					board.makeMove(fromX, fromY, toXpass, toY, capture);
					passOk = (!this.check(color)) ? true : false;
					board.loadFEN(oldFEN);
					if (passOk) {
						board.makeMove(fromX, fromY, toX, toY, capture);
						if (!this.check(color)) {
							result.push(toX + toY);
						} 
						board.loadFEN(oldFEN);
					}
				}
			}
			if ((color == "white" && board.castling.match(/Q/)) || (color == "black" && board.castling.match(/q/))) {
				toXnum = fromXnum ;
				toXpass = letters[toXnum - 1 - 1];
				toXpass2 = letters[toXnum - 3 - 1];
				toX = letters[toXnum - 2 - 1];
				if (board.squares[toXpass][toY].piece == null && board.squares[toX][toY].piece == null && board.squares[toXpass2][toY].piece == null) {
					board.makeMove(fromX, fromY, toXpass, toY, capture);
					passOk = (!this.check(color)) ? true : false;
					board.loadFEN(oldFEN);
					if (passOk) {
						board.makeMove(fromX, fromY, toX, toY, capture);
						if (!this.check(color)) {
							result.push(toX + toY);
						}
						board.loadFEN(oldFEN);
					}
				}
			}
		}
		
		return result.concat(this.bishop(fromX, fromY, color, 1).concat(this.rook(fromX, fromY, color, 1)));
}


	// Sees if board is in check state for the current player
    this.check =
        function(color) {
            if (checking)
                return false;

            checking = true;
            try {
                kingX = board.pieces[board.getPiece("king", color)].square.x;
                kingY = board.pieces[board.getPiece("king", color)].square.y;
            } catch(e) {
                return true;
            }

            for (var i = 0; i < board.pieces.length; i++) {
                var pieceCheck = board.pieces[i];
                if (pieceCheck.color != color && pieceCheck.square != null) {
                    fromX = pieceCheck.square.x;
                    fromY = pieceCheck.square.y;
                    conSq = eval("this." + pieceCheck.name + "(\"" + fromX + "\", " + fromY + ", \"" + pieceCheck.color + "\")");
                    if (isin(kingX + kingY, conSq)) {
                        checking = false;
                        return true;
                    }
                }
            }
            checking = false;
            return false;
        };
}
