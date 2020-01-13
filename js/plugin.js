$(function(){
    // gototop
    $(window).scroll(function(){
        $(this).scrollTop() > 600 ? $('.goUp').fadeIn(1000) : $('.goUp').fadeOut(1000);
    }); 
    $('.goUp').click(function(){
        $('html, body').animate({
            scrollTop: "0"
        },600)
    });

    
    
    // wow js  
    new WOW().init();
});