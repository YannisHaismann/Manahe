$(document).ready(function() {

    // CURSOR ANIMATION GESTION
    $('a').on('mouseover', function() {
        if($('#cursor').hasClass('cursor-shrink-reverse')){
            $('#cursor').removeClass('cursor-shrink-reverse');
        }
        if(!($('#cursor').hasClass('cursor-shrink'))){
            $('#cursor').addClass('cursor-shrink');
        }
    });

    $('a').on('mouseleave', function() {
        if($('#cursor').hasClass('cursor-shrink')){
            $('#cursor').removeClass('cursor-shrink');
        }
        if(!($('#cursor').hasClass('cursor-shrink-reverse'))){
            $('#cursor').addClass('cursor-shrink-reverse');
            setTimeout(function (){$('#cursor').removeClass('cursor-shrink-reverse');}, 150);
        }
    });
    $('html').on('click', function () {
        if(!($('#cursor').hasClass('cursor-pulse'))){
            $('#cursor').addClass('cursor-pulse');
            setTimeout(function(){$('#cursor').removeClass('cursor-pulse');}, 350);
        }
    });
    if(window.location.pathname == "/Manah%C3%A9/services.html" || window.location.pathname == "/Manah%C3%A9/a-propos.html"){
        $('.header_top-nav__logo').attr("src", "public/img/logo.png");
    }

    //MOBILE NAV HAMBURGER BTN
    $('#mobile-nav-btn').on("click", function(e){
        $('#header_mobile-top-nav').addClass("header_mobile-top-nav__show");
    });
    $('#header_mobile-top-nav__cross').on("click", function(e){
        $('#header_mobile-top-nav').removeClass("header_mobile-top-nav__show");
    });
});

