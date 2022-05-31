$(window).on('load', function () {

    $('.loader').fadeOut(1000);

    new WOW().init();

    $('body').addClass('o-auto');

});


$(document).ready(function () {
    "use strict";



    $(".nav_bar a").each(
        function () {
            if (window.location.href.includes($(this).attr('href'))) {
                $(this).parent('li').addClass("active");
                /*
                $(this).parent().parent('.sub-menu').slideDown("");
                */

            }
        }
    );




    $('.owl-index').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 0,
        nav: false,
        dots: true,
        navText: ["<span><</span>", "<span>></span>"],


        responsive: {
            0: {
                items: 1
            }
        }
    })

    $(".close-open-nav").on("click", function (e) {

        e.stopPropagation();

        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {

            $(".nav_bar").addClass("active");

        } else {
            $(".nav_bar").removeClass("active");

        }

    });


    $("body").on("click", function () {

        $(".close-open-nav.active").click();

    });

    $(".filter_pro .btn-fil").on("click", function () {

        $(this).addClass("active").parent().siblings().children().removeClass("active");

    });

    
    $(".qty-up").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).next(".qty-val").val());
        if (theNumber >= 0) {
            $(this).next(".qty-val").val(theNumber + 1);
        }

    });

    $(".qty-down").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).prev(".qty-val").val());
        if (theNumber > 0) {
            $(this).prev(".qty-val").val(theNumber - 1);
        }
    });
    
    


    $('#owl-hash-URL2').owlCarousel({
        items: 1,
        loop: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        URLhashListener: true,
        autoplayHoverPause: true,
    });


    $(".owl-hash-nav a").click(function () {
        $(".owl-hash-nav  a").parent("li").removeClass("active");
        $(this).parent("li").addClass("active");
    });


    $(".favoret-orno").on("click", function () {

        $(this).toggleClass("red-color")
    });

    $('.owl-product').owlCarousel({
        loop: true,
        navText: ["<i class='fa  fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(".btn_add-car").on("click", function () {

        $(".addto_Car, .lay-out").addClass("active");

    });

    $(".lay-out").on("click", function () {

        $(this).removeClass("active");
        $(".addto_Car").removeClass("active");

    });

    $(".btn-order-detals .btn-main:first-child").on("click", function () {

        $(this).hide().siblings().show();
    });


});


$(document).ready(function () {

    "use strict";
    var $star_rating = $('.star-rating .fa-star');

    var SetRatingStar = function () {
        return $star_rating.each(function () {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('far').addClass('fas');
            } else {
                return $(this).removeClass('fas').addClass('far');
            }
        });
    };

    $star_rating.on('click', function () {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();

});