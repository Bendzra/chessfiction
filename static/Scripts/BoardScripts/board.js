function chessMove() {
    this.piece;
    this.fromX;
    this.fromY;
    this.toX;
    this.toY;
    this.promoteTo;
    this.captured = false;
    this.shortAddLetter = false;
    this.shortAddDigit = false;

    // 0 - no castling, -1 - long, 1 - short
    this.castling = 0;

    this.pieceNames = [];
    this.pieceNames['r'] = '<span class="CAChess">&#xA6;</span>';
    this.pieceNames['n'] = '<span class="CAChess">&#xA4;</span>';
    this.pieceNames['b'] = '<span class="CAChess">&#xA5;</span>';
    this.pieceNames['q'] = '<span class="CAChess">&#xA3;</span>';
    this.pieceNames['k'] = '<span class="CAChess">&#xA2;</span>';
    this.pieceNames['p'] = '<span class="CAChess">&#xA7;</span>';

    this.LongString = function() {
        return this.fromX + this.fromY + this.toX + this.toY;
    };

    this.AsString = function() {
        var pieceName = this.piece;

        var fromMove = '';
        var toMove = '';
        var delimiter = '';
        var figureName = '';
        var addPiece = '';

        if (this.castling != 0) {
            if (this.castling == 1) {
                fromMove += 'O-O';
            } else {
                fromMove += 'O-O-O';
            }
        } else {
            if (pieceName == 'pawn') {
                if (this.captured) {
                    fromMove = this.fromX;
                    toMove = this.toX;

                    delimiter = 'x';
                    toMove += this.toY;
                } else {
                    toMove = this.toX + this.toY;
                }

                if (this.promoteTo) {
                    addPiece = '=' + this.pieceNames[(this.promoteTo == "knight") ? 'n' : this.promoteTo.charAt(0).toLowerCase()];
                }
            } else {
                if (this.captured) {
                    delimiter = 'x';
                }

                figureName = this.pieceNames[(pieceName == "knight") ? 'n' : pieceName.charAt(0).toLowerCase()]

                if (this.shortAddLetter) {
                    fromMove = this.fromX;
                }

                if (this.shortAddDigit) {
                    fromMove += this.fromY;
                }

                toMove = this.toX + this.toY;
            }
        }

        return figureName + fromMove + delimiter + toMove + addPiece;
    };
}

function chessBoard() {
    this.letter = [];
    this.letter["a"] = 1;
    this.letter["b"] = 2;
    this.letter["c"] = 3;
    this.letter["d"] = 4;
    this.letter["e"] = 5;
    this.letter["f"] = 6;
    this.letter["g"] = 7;
    this.letter["h"] = 8;

	// Board square notation
	this.numbers = [0, 8, 7, 6, 5, 4, 3, 2, 1];
	this.letters = ["0", "a", "b", "c", "d", "e", "f", "g", "h"];

	// Variables used to load/save FEN
	// The piece to move now
	this.currentMove;
	// State of castling
	this.castling;
	// If there's enpassant pawn
	this.enPassant;
	// Number of halfmoves
	this.halfMoves = 0;
	// Full number of moves
	this.fullMoves = 0;

	// Holds references to pieces 
	// piece object contains name, color and reference to board square its in
	this.pieces = [];

	// Board squares
	// These that hold a piece contain reference to piece object (so board squares and piece are circle referenced)
	this.squares = [];
	this.squares["a"] = [];
	this.squares["b"] = [];
	this.squares["c"] = [];
	this.squares["d"] = [];
	this.squares["e"] = [];
	this.squares["f"] = [];
	this.squares["g"] = [];
	this.squares["h"] = [];
	for(var keyVar in this.squares) {
		for(var j = 1; j <= 8; j++) {
			this.squares[keyVar][j] = new boardSquare(keyVar, j);
		}
    }

    this.chessRules = new chessRules(this);
}

// Prototype function used to load FEN into board
chessBoard.prototype.loadFEN =
    function(FEN) {
        for (var keyVar in this.squares) {
            for (var j = 1; j <= 8; j++) {
                this.squares[keyVar][j].piece = null;
            }
        }
        delete this.pieces;
        this.pieces = [];

        var FENArray = FEN.split(" ");
        var boardArray = FENArray[0].split("/");
        for (var lines = 1; lines <= 8; lines++) {
            var line = boardArray[lines - 1].split("");
            var colsY = 1;
            for (var cols = 1; cols <= line.length; cols++) {
                var letter = line[cols - 1];
                var color;
                if ( /[rbqkpn]/ .test(letter)) {
                    color = "black";
                } else if ( /[RBQKPN]/ .test(letter)) {
                    color = "white";
                } else {
                    colsY = parseInt(colsY) + parseInt(letter);
                    continue;
                }
                switch (letter.toLowerCase()) {
                case "r":
                    name = "rook";
                    break;
                case "b":
                    name = "bishop";
                    break;
                case "q":
                    name = "queen";
                    break;
                case "k":
                    name = "king";
                    break;
                case "p":
                    name = "pawn";
                    break;
                case "n":
                    name = "knight";
                    break;
                default:
                    break;
                }
                var x = this.letters[colsY];
                var y = this.numbers[lines];
                this.addPiece(name, color, x, y);
                colsY++;
            }
        }
        if (FENArray[1] == "b")
            this.currentMove = "black";
        else
            this.currentMove = "white";
        this.castling = FENArray[2];
        this.enPassant = FENArray[3];
        this.halfMoves = (FENArray[4]) ? FENArray[4] : 0;
        this.fullMoves = (FENArray[5]) ? FENArray[5] : 1;
    };
// Create piece objects and place a reference to them for square they're in
chessBoard.prototype.addPiece =
    function(name, color, x, y) {
        var newPiece = new boardPiece(name, color);
        newPiece.square = this.squares[x][y];
        this.pieces.push(newPiece);
        this.squares[x][y].piece = newPiece;
    };

	chessBoard.prototype.formMove = function(piece, fromX, fromY, toX, toY, promoteTo) {
	    var move = new chessMove();
	    move.piece = piece;
	    move.fromX = fromX;
	    move.fromY = fromY;
	    move.toX = toX;
	    move.toY = toY;
	    move.promoteTo = promoteTo;

	    if (piece == "king" && (Math.abs(this.letter[fromX] - this.letter[toX]) > 1)) {
	        if (this.letter[fromX] > this.letter[toX]) {
	            move.castling = -1;
	        } else {
	            move.castling = 1;
	        }
	    }

	    if (piece != "pawn") {
	        for (var i = 0; i < this.pieces.length; i++) {
	            var otherPiece = this.pieces[i];

	            if (!otherPiece.square) continue;

	            var otherX = otherPiece.square.x;
	            var otherY = otherPiece.square.y;
	            if ((this.currentMove == otherPiece.color) && (piece == otherPiece.name)
    	            && !(otherX == fromX && otherY == fromY)) {

	                var possibleMoves = eval("this.chessRules." + piece + "(\"" + otherX + "\", " + otherY + ", \"" + this.currentMove + "\")");
	                var otherCanMove = false;
	                for (var j = 0; j < possibleMoves.length; j++) {
	                    if (possibleMoves[j] == (toX + toY.toString())) {
	                        otherCanMove = true;
	                        break;
	                    }
	                }

	                if ((otherX == fromX) && otherCanMove) {
	                    move.shortAddDigit = true;
	                }

	                if (otherCanMove && move.shortAddDigit == false) {
	                    move.shortAddLetter = true;
	                }
	            }
	        }
	    }

	    move.captured = (this.squares[toX][toY].piece != null);

	    if (piece == "pawn") {
	        // White pawns move "up", black move "down"
	        var mod;
	        if (this.currentMove == "white")
	            mod = 1;
	        else
	            mod = -1;

	        if (toX + toY == this.enPassant) {

	            if (this.squares[toX][toY - mod].piece != null)
	                move.captured = true;
	        }
	    }

	    return move;
	};

// MoveHandler
	chessBoard.prototype.moveHandler =
    	function(piece, fromX, fromY, toX, toY, promoteTo) {
    	    // Make piece move	   	    

    	    if (piece == "king" && (Math.abs(this.letter[fromX] - this.letter[toX]) > 1)) {
    	        if (this.letter[fromX] > this.letter[toX])
    	            this.castle("O-O-O");
    	        else
    	            this.castle("O-O");

    	        return;
    	    }

    	    this.makeMove(fromX, fromY, toX, toY);
    	    if (piece == "pawn") {
    	        // White pawns move "up", black move "down"
    	        var mod;
    	        if (this.currentMove == "white")
    	            mod = 1;
    	        else
    	            mod = -1;
    	        // if enPassant capture, manually remove piece, as makeMove is simple and doesn't handle this
    	        if (toX + toY == this.enPassant) {
    	            this.squares[toX][toY - mod].piece.square = null;
    	            this.squares[toX][toY - mod].piece = null;
    	        }
    	        // Set enPassant if needed	        
    	        if (Math.abs(toY - fromY) == 2)
    	            this.enPassant = toX + (parseInt(toY) - mod);
    	        else
    	            this.enPassant = "-";
    	        // Set the promotion piece if so
    	        if (promoteTo) {
    	            this.squares[toX][toY].piece.name = promoteTo;
    	        }
    	    } else {
    	        this.enPassant = "-";
    	        // Handle castling if rook moves
    	        if (piece == "rook" && this.castling != "-") {
    	            if (fromX == "a" && fromY == 8) {
    	                this.castling = this.castling.replace( /q/ , "");
    	            } else if (fromX == "h" && fromY == 8) {
    	                this.castling = this.castling.replace( /k/ , "");
    	            } else if (fromX == "a" && fromY == 1) {
    	                this.castling = this.castling.replace( /Q/ , "");
    	            } else if (fromX == "h" && fromY == 1) {
    	                this.castling = this.castling.replace( /K/ , "");
    	            }
    	        }
    	        if (piece == "king" && this.castling != "-") {
    	            if (this.currentMove == "white") {
    	                this.castling = this.castling.replace( /K/ , "");
    	                this.castling = this.castling.replace( /Q/ , "");
    	            } else {
    	                this.castling = this.castling.replace( /k/ , "");
    	                this.castling = this.castling.replace( /q/ , "");
    	            }
    	        }
    	        // If castling is empty after above
    	        if (this.castling == "") {
    	            this.castling = "-";
    	        }
    	    }

    	    if (piece == "pawn" || promoteTo) {
    	        this.halfMoves = 0;
    	    } else {
    	        this.halfMoves++;
    	    }
    	    if (this.currentMove == "black")
    	        this.fullMoves++;
    	    this.switchMove();
    	};
	
	chessBoard.prototype.castleMove =
    	function(piece, fromX, toX) {
    	    var castling;
    	    if (piece == "king" && (Math.abs(this.letter[fromX] - this.letter[toX]) > 1)) {
    	        if (this.letter[fromX] > this.letter[toX])
    	            castling = "O-O-O";
    	        else
    	            castling = "O-O";
    	    } else
    	        return { castling: false };
    	    var line;
    	    if (this.currentMove == "white")
    	        line = 1;
    	    else
    	        line = 8;

    	    if ( /^O-O\+?$/ .test(castling)) {
    	        return { fromX: "h", fromY: line, toX: "f", toY: line, piece: "rook", castling: true };
    	    } else {
    	        return { fromX: "a", fromY: line, toX: "d", toY: line, piece: "rook", castling: true };
    	    }
    	};
	
// Handles the castling
	chessBoard.prototype.castle =
    	function(castling) {
    	    var line;
    	    if (this.currentMove == "white")
    	        line = 1;
    	    else
    	        line = 8;

    	    if ( /^O-O\+?$/ .test(castling)) {
    	        this.makeMove("e", line, "g", line);
    	        this.makeMove("h", line, "f", line);
    	    } else {
    	        this.makeMove("e", line, "c", line);
    	        this.makeMove("a", line, "d", line);
    	    }

    	    var castlestrip;

    	    if (this.currentMove == "white")
    	        castlestrip = /[KQ]/g ;
    	    else
    	        castlestrip = /[kq]/g ;

    	    this.enPassant = "-";
    	    this.halfMoves++;
    	    if (this.currentMove == "black")
    	        this.fullMoves++;
    	    this.castling = this.castling.replace(castlestrip, "");
    	    if (this.castling == "")
    	        this.castling = "-";
    	    this.switchMove();
    	};
// Search for pieces by name, color and either (or both) of coordinates
// Returns an array of matches - corresponding indexes of pieces array
chessBoard.prototype.getPiece =
    function(name, color, x, y) {
        var result = new Array();
        for (var i = 0; i < this.pieces.length; i++) {
            if (this.pieces[i].name == name && this.pieces[i].color == color && this.pieces[i].square != null && ((x && this.pieces[i].square.x == x) || !x) && ((y && this.pieces[i].square.y == y) || !y)) {
                result.push(i);
            }
        }
        return result;
    };
// Switches the current move
chessBoard.prototype.switchMove =
    function() {
        if (this.currentMove == "white")
            this.currentMove = "black";
        else
            this.currentMove = "white";
    };
// Simple move function with from&to variables
chessBoard.prototype.makeMove =
    function(fromX, fromY, toX, toY) {
        var previousPiece = this.squares[fromX][fromY].piece;
        previousPiece.square = this.squares[toX][toY];
        if (this.squares[toX][toY].piece != null) {
            this.squares[toX][toY].piece.square = null;
        }
        this.squares[toX][toY].piece = previousPiece;

        this.squares[fromX][fromY].piece = null;
    };
// Returns current FEN
	chessBoard.prototype.currentFEN =
    	function(reduced) {
    	    var FEN = "";
    	    for (var num = 8; num >= 1; num--) {
    	        var emptyCounter = 0;
    	        for (var keyVar in this.squares) {
    	            if (this.squares[keyVar][num].piece != null) {
    	                if (emptyCounter != 0) {
    	                    FEN += emptyCounter;
    	                    emptyCounter = 0;
    	                }
    	                var pieceName = this.squares[keyVar][num].piece.name;
    	                var pieceColor = this.squares[keyVar][num].piece.color;
    	                switch (pieceName) {
    	                case "rook":
    	                    name = "r";
    	                    break;
    	                case "bishop":
    	                    name = "b";
    	                    break;
    	                case "queen":
    	                    name = "q";
    	                    break;
    	                case "king":
    	                    name = "k";
    	                    break;
    	                case "pawn":
    	                    name = "p";
    	                    break;
    	                case "knight":
    	                    name = "n";
    	                    break;
    	                default:
    	                    break;
    	                }
    	                if (pieceColor == "white") {
    	                    name = name.toUpperCase();
    	                    FEN += name;
    	                } else
    	                    FEN += name;
    	            } else
    	                emptyCounter++;
    	        }
    	        if (emptyCounter != 0)
    	            FEN += emptyCounter;
    	        if (num != 1)
    	            FEN += "/";
    	    }
    	    FEN += " " + this.currentMove.substr(0, 1);
    	    FEN += " " + this.castling;
    	    FEN += " " + this.enPassant;
    	    if (!reduced) {
    	        FEN += " " + this.halfMoves;
    	        FEN += " " + this.fullMoves;
    	    }
    	    return FEN;
    	};

// Board Square

function boardSquare(x, y) {
	this.x = x;
	this.y = y;
	this.piece;
}

// Board Piece

function boardPiece(name, color) {
	// Each piece hold the reference to they square it's in
	this.square;
	this.name = name;
	this.color = color;
}