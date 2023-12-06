 









//------------------- manual ---------------------------

// You can also use "$(window).load(function() {"
$(function () {
    // Slideshow 3
    $("#slider3").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });

});





/*-------------------------------------------------------------------------*
     *                   04. Smooth scroll to anchor                           *
     *-------------------------------------------------------------------------*/
$('a.smooth_scroll').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 70
    }, 1000);
});




//-------------------- smooth scroll ----------------------

//(function ($) {
//    "use strict";
//    $(function () {
//        $('a[href*="#"]:not([href="#"])').click(function () {
//            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//                var target = $(this.hash);
//                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//                if (target.length) {
//                    $('html, body').animate({
//                        scrollTop: target.offset().top - 70
//                    }, 1000);
//                    return false;
//                }
//            }
//        });
//    });
//}(jQuery));


//var prev = '';
//(function ($) {
//    "use strict";
//    $(function () {
//        $('a[href*="#"]:not([href="#"])').click(function () {
//            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//                var target = $(this.hash);
//                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//                var href = $(this).attr('href');
//                if (target.length) {

//                    if (prev == '#home' || prev == '') {
//                        if (href != '#price' && href != '#over') {
//                            $('html, body').animate({
//                                scrollTop: target.offset().top - 150
//                            }, 1000);
//                        }
//                        else {
//                            $('html, body').animate({
//                                scrollTop: target.offset().top - 170
//                            }, 1000);
//                        }
//                    }
//                    else {
//                        if (href != '#price' && href != '#over') {
//                            $('html, body').animate({
//                                scrollTop: target.offset().top - 70
//                            }, 1000);
//                        }
//                        else {
//                            $('html, body').animate({
//                                scrollTop: target.offset().top - 100
//                            }, 1000);
//                        }
//                    }
//                    prev = href;
//                    return false;
//                }
//            }

//        });
//    });
//}(jQuery));






//------------------- light gallery -----------------------

$(document).ready(function () {
    $('.lightgallery, .loc, .view').lightGallery({
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        pager: true,
        share: false,
        download: false,
        selector: 'a'
    });
    $('#floor').lightGallery({
        thumbnail: false,
        pager: false,
        showThumbByDefault: false,
        selector: 'a'
    });
    $('.gallery').lightGallery({
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        pager: true,
        share: false,
        download: false,
        selector: 'a'
    });
});



//-------------------- crousal ------------------------------

$(document).ready(function () {
    $('#pro-gly').owlCarousel({
        //stagePadding: 120,
        items: 3,
        loop: true,
        nav: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 15,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            },
            600: {
                items: 1,
                stagePadding: 15,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            },
            1000: {
                items: 1,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }
        }
    });


    $('#floor').owlCarousel({
        //stagePadding: 120,
        items: 3,
        loop: true,
        nav: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 15,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            },
            600: {
                items: 1,
                stagePadding: 15,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            },
            1000: {
                items: 3,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }
        }
    });

    $('#specific').owlCarousel({
        stagePadding: 120,
        items: 3,
        loop: true,
        nav: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 15,
            },
            600: {
                items: 1,
                stagePadding: 15,
            },
            1000: {
                items: 3,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }
        }
    });

});

// enquiry shift in mobile

//if ($(window).width() <= 500) {
//    $('.enquiry').insertAfter($('.overvw')).removeClass("sticky.is-sticky").css("margin-top", "3em");
//    $('.sticky-wrapper').css("height", "auto !important");
//} else {
//    //$('.enquiry').remove().insertBefore($('.overvw'));
//}