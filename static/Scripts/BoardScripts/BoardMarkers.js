function SvgToString() {
    this.svgString = "";
    this.moveTo =
        function (x, y) {
            this.svgString = this.svgString + "M" + x + "," + y;
            return this;
        };
    this.curveTo =
        function (x1, y1, x2, y2, x, y) {
            this.svgString = this.svgString + "C" + x1 + "," + y1 + "," +
                x2 + "," + y2 + "," + x + "," + y;
            return this;
        };
    this.lineTo =
        function (x, y) {
            this.svgString = this.svgString + "L" + x + "," + y;
            return this;
        };

    return this;
}

function BoardMarkers(boardWrapper) {
    this.markers = [];

    var letter = [];
    letter["a"] = 1;
    letter["b"] = 2;
    letter["c"] = 3;
    letter["d"] = 4;
    letter["e"] = 5;
    letter["f"] = 6;
    letter["g"] = 7;
    letter["h"] = 8;

    var colors = [];
    colors['A'] = '#f00';
    colors['D'] = '#0f0';
    colors['I'] = '#ff0';
    colors['C'] = '#00f';

    var opacities = [];
    opacities['N'] = 0.6;
    opacities['L'] = 0.6;
    opacities['E'] = 0.4;
    opacities['H'] = 0.3;
    opacities['H'] = 0.1;

    var squareSize = boardWrapper.squareSize;

    var lastMarkers;

    var canvas = null;

    this.getCanvas = function () {
        if (canvas == null) {

            var brdMarker = boardWrapper.markersView;
            canvas = Raphael(brdMarker, boardWrapper.visibleCols * squareSize, boardWrapper.visibleRows * squareSize);
        }
        return canvas;
    };

    this.calculatePos =
        function (x, y) {
            if (boardWrapper.gui.flipped) {
                x = 9 - x;
                y = 9 - y;
            }

            if (boardWrapper.isBoardrect) {
                x -= letter[boardWrapper.startX] - 1;
                y -= 8 - boardWrapper.finishY;
            }

            return { x: (x - 0.5) * (squareSize), y: (y - 0.5) * (squareSize) };
        };

    this.drawPoint =
        function (pointX, pointY, color, opacity) {
            var x = letter[pointX];
            var y = 9 - pointY;
            var CirclePos = this.calculatePos(x, y);
            var isSmall = boardWrapper.className.indexOf("small") > -1;
            var isAnalysis = boardWrapper.className.indexOf("analysis") > -1;

            var circRad;
            if (isAnalysis) circRad = 5;
            else if (isSmall) circRad = 5;
            else circRad = 10;

            var markerPoint = this.getCanvas().circle(CirclePos.x, CirclePos.y, circRad);
            markerPoint.attr({ fill: color, stroke: "#000", opacity: opacity });
            this.markers.push(markerPoint);
        };

    this.drawCircle =
        function (pointX, pointY, color, opacity) {
            var x = letter[pointX];
            var y = 9 - pointY;
            var CirclePos = this.calculatePos(x, y);
            var isSmall = boardWrapper.className.indexOf("small") > -1;
            var isAnalysis = boardWrapper.className.indexOf("analysis") > -1;
            var circRad = squareSize / 2;

            var opacWidth;
            if (isAnalysis) opacWidth = 2;
            else if (isSmall) opacWidth = 3;
            else opacWidth = 4;

            var markerPoint = this.getCanvas().circle(CirclePos.x, CirclePos.y, circRad - opacWidth / 2);
            markerPoint.attr({
                stroke: color,
                opacity: 1,
                "stroke-width": opacWidth,
                "stroke-opacity": opacity
            });

            this.markers.push(markerPoint);
        };

    this.drawSolidRectangle =
        function (pointX, pointY, color, opacity) {
            var x = letter[pointX];
            var y = 9 - pointY;
            if (boardWrapper.gui.flipped) {
                x = 9 - x;
                y = 9 - y;
            }
            if (boardWrapper.isBoardrect) {
                x -= letter[boardWrapper.startX] - 1;
                y -= 8 - boardWrapper.finishY;
            }
            var RecPos = { x: (x) * (squareSize), y: (y) * (squareSize) };
            var isSmall = boardWrapper.className.indexOf("small") > -1;
            var isAnalysis = boardWrapper.className.indexOf("analysis") > -1;

            var rectRad;
            if (isAnalysis) rectRad = 2;
            else if (isSmall) rectRad = 3;
            else rectRad = 4;

            var opacWidth;
            if (isAnalysis) opacWidth = 2;
            else if (isSmall) opacWidth = 3;
            else opacWidth = 4;

            var markerRect = this.getCanvas().rect(RecPos.x, RecPos.y, squareSize, squareSize - opacWidth / 2, rectRad);
            markerRect.attr({
                opacity: opacity,
                color: color
            });

            this.markers.push(markerRect);
        };

    this.drawRectangle =
        function (pointX, pointY, color, opacity) {
            var x = letter[pointX];
            var y = 9 - pointY;
            if (boardWrapper.gui.flipped) {
                x = 9 - x;
                y = 9 - y;
            }
            if (boardWrapper.isBoardrect) {
                x -= letter[boardWrapper.startX] - 1;
                y -= 8 - boardWrapper.finishY;
            }
            var RecPos = { x: (x - 1) * (squareSize), y: (y - 1) * (squareSize) };
            var isSmall = boardWrapper.className.indexOf("small") > -1;
            var isAnalysis = boardWrapper.className.indexOf("analysis") > -1;

            var rectRad;
            if (isAnalysis) rectRad = 2;
            else if (isSmall) rectRad = 3;
            else rectRad = 4;

            var opacWidth;
            if (isAnalysis) opacWidth = 2;
            else if (isSmall) opacWidth = 3;
            else opacWidth = 4;

            var markerRect = this.getCanvas().rect(RecPos.x, RecPos.y, squareSize - opacWidth / 2, squareSize - opacWidth / 2, rectRad);
            markerRect.attr({
                stroke: color,
                opacity: 1,
                "stroke-width": opacWidth,
                "stroke-opacity": opacity
            });

            this.markers.push(markerRect);
        };

    this.drawText =
        function (fromX, fromY, toX, toY, opacity, text) {
            var fX = letter[fromX];
            var fY = 9 - fromY;
            if (boardWrapper.gui.flipped) {
                fX = 9 - fX;
                fY = 9 - fY;
            }

            if (boardWrapper.isBoardrect) {
                fX -= letter[boardWrapper.startX] - 1;
                fY -= 8 - boardWrapper.finishY;
            }
            var isSmall = boardWrapper.className.indexOf("small") > -1;
            var isAnalysis = boardWrapper.className.indexOf("analysis") > -1;
            
            var fontSize;
            if (isAnalysis) fontSize = 12;
            else if (isSmall) fontSize = 15;
            else fontSize = 30;

            fX = (fX - 1.0) * (squareSize); // я изменил 0.5 на 1.0, чтобы сдвинуть влево (в центр поля)
            fY = (fY - 0.5) * (squareSize);

            var markerText = this.getCanvas().text(fX + parseInt(fontSize) - 3, fY,
                text).attr({ "font-size": fontSize, "fill": "#00f" }); //я изменил #fff (белый) на #00f (синий)
            this.markers.push(markerText);
        };

    this.drawArrow =
        function (fromX, fromY, toX, toY, rounded, color, opacity) {
            var fX = letter[fromX];
            var fY = 9 - fromY;
            var tX = letter[toX];
            var tY = 9 - toY;
            if (boardWrapper.gui.flipped) {
                fX = 9 - fX;
                fY = 9 - fY;
                tX = 9 - tX;
                tY = 9 - tY;
            }

            if (boardWrapper.isBoardrect) {
                fX -= letter[boardWrapper.startX] - 1;
                fY -= 8 - boardWrapper.finishY;
                tX -= letter[boardWrapper.startX] - 1;
                tY -= 8 - boardWrapper.finishY;

            }

            var isSmall = boardWrapper.className.indexOf("small") > -1;
            var isAnalysis = boardWrapper.className.indexOf("analysis") > -1;

            //размеры стрелки
            var arrowX;
            if (isAnalysis) arrowX = 2;
            else if (isSmall) arrowX = 3;
            else arrowX = 5;

            var arrowY;
            if (isAnalysis) arrowY = 5;
            else if (isSmall) arrowY = 8;
            else arrowY = 15;

            var arrowZ;
            if (isAnalysis) arrowZ = 5;
            else if (isSmall) arrowZ = 10;
            else arrowZ = 20;

            fX = (fX - 0.5) * (squareSize);
            fY = (fY - 0.5) * (squareSize);
            tX = (tX - 0.5) * (squareSize);
            tY = (tY - 0.5) * (squareSize);

            var lX = Math.abs(tX - fX);
            var lY = Math.abs(tY - fY);
            var tL = Math.sqrt(lX * lX + lY * lY);
            var mod = -1 * lX / (tX - fX);
            var rotationAngle;
            if (lX == 0) {
                rotationAngle = 0;
            } else {
                rotationAngle = -Math.atan((tX - fX) / (tY - fY));
            }

            if (lY == 0) {
                rotationAngle = -rotationAngle;
            } else if (tY > fY) {
                rotationAngle = Math.PI + rotationAngle;
            }

            rotationAngle = rotationAngle / Math.PI * 180;
            var markerArrow;

            try {
                var ArrowSVG = SvgToString();

                if (rounded) {
                    var sq = Math.sqrt(squareSize * squareSize / 2);
                    ArrowSVG.moveTo(fX, fY).curveTo(fX - 2 + 0.5 * mod * sq, fY - sq, fX - arrowX + mod * sq, fY - 1.5 * sq, fX - arrowX + mod * sq, fY - 3 * sq + arrowY).lineTo(fX - arrowY + mod * sq, fY - 3 * sq + arrowZ).lineTo(fX + mod * sq, fY - 3 * sq).lineTo(fX + arrowY + mod * sq, fY - 3 * sq + arrowZ).lineTo(fX + arrowX + mod * sq, fY - 3 * sq + arrowY).curveTo(fX + arrowX + mod * sq, fY - 1.5 * sq, fX + 2 + 0.5 * mod * sq, fY - sq, fX, fY);
                    markerArrow = this.getCanvas().path(ArrowSVG.svgString);
                    markerArrow.attr({ fill: color, stroke: "#000", opacity: opacity });
                    var knightAngle = Math.atan(1 / 3) / Math.PI * 180;
                    markerArrow.rotate(rotationAngle - mod * knightAngle, fX, fY);
                } else {
                    ArrowSVG.moveTo(fX, fY).lineTo(fX - arrowX, fY - tL + arrowY).lineTo(fX - arrowY, fY - tL + arrowZ).lineTo(fX, fY - tL).lineTo(fX + arrowY, fY - tL + arrowZ).lineTo(fX + arrowX, fY - tL + arrowY).lineTo(fX, fY);
                    markerArrow = this.getCanvas().path(ArrowSVG.svgString);
                    markerArrow.attr({ fill: color, stroke: "#000", opacity: opacity });
                    markerArrow.rotate(rotationAngle, fX, fY);
                }

                this.markers.push(markerArrow);
            } catch (e) {
            }
        };

    this.drawMarkerArrow =
        function (marker) {
            var opacity = opacities[marker.charAt(0)];
            var color = colors[marker.charAt(1)];
            var fromX = marker.charAt(2);
            var fromY = marker.charAt(3);
            var toX = marker.charAt(4);
            var toY = marker.charAt(5);
            var rounded = false;
            this.drawArrow(fromX, fromY, toX, toY, rounded, color, opacity);
        };

    this.drawMarkerSquare =
        function (marker) {
            var opacity = opacities[marker.charAt(0)];
            var color = colors[marker.charAt(1)];
            x = marker.charAt(2);
            y = marker.charAt(3);
            if ((marker.length == 6) && (marker.charAt(5) == '1'))
                this.drawRectangle(x, y, color, opacity);
            else
                this.drawCircle(x, y, color, opacity);
        };

    this.drawMarkerRectangle =
        function (marker) {
            var opacity = opacities[marker.charAt(0)];
            var color = colors[marker.charAt(1)];
            x = marker.charAt(2);
            y = marker.charAt(3);
            this.drawRectangle(x, y, color, opacity);
        };

    this.drawMarkerText =
        function (marker) {
            var opacity = opacities[marker.charAt(0)];
            var fromX = marker.charAt(1);
            var fromY = marker.charAt(2);
            var toX = marker.charAt(3);
            var toY = marker.charAt(4);
            var pos = marker.indexOf("'") + 1;
            this.drawText(fromX, fromY, toX, toY, opacity, marker.substr(pos, marker.length - 2));
        };

    // добавление от меня:
    // Raphael рисует прямую линию из угла квадрата - в угол другого.
    this.drawMarkerLine = 
      function(marker){
        var opacity = opacities[marker.charAt(0)];
        var color = colors[marker.charAt(1)];
        var fromX = marker.charAt(2);
        var fromY = marker.charAt(3);
        var toX = marker.charAt(4);
        var toY = marker.charAt(5);

        var fX = (letter[fromX])?letter[fromX]:0;
        var fY = 9 - fromY;
        var tX = letter[toX];
        var tY = 9 - toY;
        if (boardWrapper.gui.flipped) {
            fX = 8 - fX;
            fY = 8 - fY;
            tX = 8 - tX;
            tY = 8 - tY;
        }
        var markerLine = this.getCanvas().path("M" + fX*squareSize + "," + fY*squareSize + 
                                               "L" + tX*squareSize + "," + tY*squareSize);
        markerLine.attr({stroke: color,opacity: 1,"stroke-width": 3,"stroke-opacity": opacity});
        this.markers.push(markerLine);
      };

    this.drawMarker =
        function (marker) {
            switch (marker.charAt(0)) {
                case 'A':
                    this.drawMarkerArrow(marker.substr(1));
                    break;
                case 'S':
                    this.drawMarkerSquare(marker.substr(1));
                    break;
                case 'R':
                    this.drawMarkerRectangle(marker.substr(1));
                    break;
                case 'T':
                    this.drawMarkerText(marker.substr(1));
                    break;
                case 'L': // добавление от меня
                    this.drawMarkerLine(marker.substr(1));
                    break;
                default:
                    break;
            }
        };

    this.clearMarkers =
        function () {
            for (var marker in this.markers)
                this.markers[marker].remove();
            this.markers = [];
        };

    this.notaDrawArrow =
        function (fromX, fromY, toX, toY, knight) {
            this.clearMarkers();
            var color = colors['I'];
            var opacity = opacities['L'];
            this.drawArrow(fromX, fromY, toX, toY, knight, color, opacity);
            this.drawPoint(fromX, fromY, color, opacity);
        };

    this.drawMarkers =
        function (markersString) {
            this.clearMarkers();
            lastMarkers = markersString;
            var markers = markersString ? markersString.split(' ') : [];

            for (var marker in markers) {
                this.drawMarker(markers[marker]);
            }
        };

    this.redrawMarkers =
        function () {
            this.drawMarkers(lastMarkers);
        };
}
