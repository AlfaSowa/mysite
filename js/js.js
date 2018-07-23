var toggleMenu = function() {
    $('.burger-menu').toggleClass('active');
};

$('.burger, .menu-inner').on('click', function () {
    toggleMenu();
});


$(document).ready(function(){
    $('.carousel').slick({
        centerMode: true,
        slidesToShow: 1,
        centerPadding: 0,
        dots: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')

    });
});


$(function () {
    $('.show_popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('.close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').hide();
        return false;
    });
    $(document).on('click', '#overlay', function () {
        $(this).hide();
        $('.popup').fadeOut(100);
    });
});




$(document).ready(function(){
    $("#menu, #burger").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


