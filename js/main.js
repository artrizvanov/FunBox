$( document ).ready(function(){

  const card = $('.card-content');
  const basket = $('.img-basket');
  const buy = $('.buy');

  // START КЛИК СОБЫТИЕ
  card.on( "click", function() {
    $(this).parent().removeClass('mouseleave');
    $(this).parent().toggleClass( "action" );

    if (!$(this).parent().hasClass('action')){
      $(this).children('.show-h3').css({'display':'none'});
      $(this).children('.hide-h3').css({'display':'block'});
    };

    if ($(this).parent().hasClass('disabled')){
      $(this).parent().removeClass('action');
    };
    
  });

  buy.on( "click", function() {
    $(this).parent().parent().removeClass('mouseleave');
    $(this).parent().parent().toggleClass( "action" );
  });

  basket.on('click', function(){
    $(this).parent().removeClass('mouseleave');
    $(this).parent().removeClass('action');
    $(this).parent().toggleClass('disabled');

    if ($(this).parent().hasClass('disabled')) {
      $(this).next().children('.show-h3').css({'display':'none'});
      $(this).next().children('.hide-h3').css({'display':'block'});
  }

  });
  // END КЛИК СОБЫТИЕ

  // START КЛИК СОБЫТИЕ
  basket.hover(function(){
    if ($(this).parent().hasClass('mouseleave')) {
      $(this).next().children('.show-h3').css({'display':'none'});
      $(this).next().children('.hide-h3').css({'display':'block'});
  }
  });
  // END КЛИК СОБЫТИЕ

  // START MOUSELEAVE СОБЫТИЕ
  card.mouseleave(function(){
    if ($(this).parent().hasClass('action')){
      $(this).parent().addClass('mouseleave');
    };

    if ($(this).parent().hasClass('disabled')){
      $(this).parent().removeClass('mouseleave');
    };

    if ($(this).parent().hasClass('action')){
      $(this).children('.show-h3').css({'display':'block'});
      $(this).children('.hide-h3').css({'display':'none'});
    };

  });
  // END MOUSELEAVE СОБЫТИЕ
});