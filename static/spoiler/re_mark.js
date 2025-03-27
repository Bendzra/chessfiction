$(document).ready(function() {
  // Скрываем все спойлеры
  $('.spoiler-body').hide();
  
  // по клику отключаем класс folded, включаем unfolded, затем для следующего
  // элемента после блока .spoiler-head (т.е. .spoiler-body) показываем текст спойлера
  $('.spoiler-head').click(function() {
    $(this).toggleClass("folded").toggleClass("unfolded").next().toggle();
	initFloaters();
  });
});

$(document).ready(function() {
  // анимируем кнопки (donate и nav_bottom_right)
  var p = Math.random();
  if(p < 0.25) {
    var nv_br = $('.corner_nav.bottom_right')[0];
    $(nv_br)
      .animate({bottom: "+=10px"}, 700)
      .animate({bottom: "-=10px"}, 700)
  } else if (p > 0.75) {
    $('#donate')
      .animate({fontSize: "+=20px"}, 1000)
      .animate({fontSize: "-=20px"}, 400);
  }
});

function initNavBars() {
  var m = ($( window ).width() - $('body').width() ) / 2 ;
  var nv_tl = $('.corner_nav.top_left')[0];
  var nv_tr = $('.corner_nav.top_right')[0];
  var nv_br = $('.corner_nav.bottom_right')[0];
  $(nv_tr).css('right', (m + 10) + "px");  // #donate
  $(nv_tl).css('left', (m - 50) + "px");    // chess boards toggle
  $(nv_br).css('right', (m - 15 ) + "px");  // pagination
}

function initFloaters() {
  
  // устанавливаем высоту score'ов больше floater'ов
  $('.floater').each(function(i) {
    $(this).siblings('.score').css("min-height", $(this).height() );
  });

  // выравниваем floater'ы со score'ами
  $('.floater').each(function(i) {
    var scoreTop = $(this).siblings('.score').offset().top;
    $(this).css('top', scoreTop + 'px');
  });
  
  $(window).trigger("scroll");
}

function initShow() {
  initNavBars();
  initFloaters();
}

$(document).ready(function() {

  menuYloc = $('.floater').offset();
  
  function moveFloater() {
    var winScrollTop = $(this).scrollTop();
  
    $('.floater').each(function(i) {
      var scoreHeight = $(this).siblings('.score').height();
      var floaterTop = menuYloc.top + winScrollTop;
      var scoreTop = $(this).siblings('.score').offset().top;
    
      if(floaterTop > scoreTop && floaterTop + $(this).height() < scoreTop + scoreHeight)
      {
        $(this).animate({top: floaterTop + "px"}, {duration: 500, queue: false});
      }
    });
  }

  $(window).load(initShow);
  $(window).resize(initShow);
  $(window).scroll(moveFloater);
});

// toggle_board (small) onclick
$(document).ready(function() {
  $('#toggle_board').click(function() {
    if( $('.score').css( 'margin-left') == "260px" ) {
    $('.section .small').not(".score .small").animate( {opacity: 0, 'margin-right': '-280px'}, 500 );
      $('.score').animate( {'margin-left': "0px"}, 500 );
    } else {
      $('.score').animate( {'margin-left':"260px"}, 500 );
    $('.section .small').not(".score .small").animate( {opacity: 1, 'margin-right': '10px'}, 500 );
    }
    window.setTimeout(initFloaters, 600);
  });
});

// show stationary board ondblclick
$(document).ready(function() {
  var modal = $('.modal_overlay')[0];
  var span = $(".btn_close")[0];
  
  var fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  var stationaryBrdWrapper = $(modal).find('.chessBoard')[0];
  if(stationaryBrdWrapper != undefined) {
    stationaryBrdWrapper.gui.notation = $(modal).find('.task_notation')[0];
  }
  
  $('.chessBoard.small, .chessBoard.analysis').dblclick(function(ev) {
	  
    if(ev.target.className == "button_right" || 
       ev.target.className == "button_end" || 
       ev.target.className == "button_left" || 
       ev.target.className == "button_start") return;

    $(modal).fadeIn('fast');
    fen = ev.currentTarget.board.currentFEN();
    stationaryBrdWrapper.board.loadFEN(fen);
    stationaryBrdWrapper.gui.drawBoardPosition();
    stationaryBrdWrapper.gui.addNotaMove('[...]', fen);
    $('.task_notation .line').addClass('active').on('click', function () {
      loadMove($(this).attr('data-fen'), this, $(this).attr('data-move'));
    });
	$('html, body').css({'touch-action': 'none', 'overflow-y': 'hidden'}); 
  });
  
  $(span).click( function() {
    cleanStationaryBoard();
  });
  
  $(window).click( function(event) {
    if (event.target == modal) {
      cleanStationaryBoard();
    }
  });
  
  function cleanStationaryBoard() {
    fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    $(modal).fadeOut('fast');
    stationaryBrdWrapper.board.loadFEN(fen);
    stationaryBrdWrapper.gui.drawBoardPosition();
    stationaryBrdWrapper.gui.notation.innerHTML = "";
	$('html, body').css({'touch-action': 'auto', 'overflow-y': 'auto'}); 
  }
});

// Восстанавливает маркеры (использует библиотеки BoardScripts)
function rdrms(element)
{
  element = $(element).parents('.section')[0];
  if (!element)
      element = document;
  var brdWrapper = $(element).find('.chessBoard')[0];
  brdWrapper.boardMarkers.redrawMarkers();
}

