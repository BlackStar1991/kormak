$(document).ready(function () {

//MENU
    var headerPage = $('.header');

    $('.open-menu-min').on("click", function () {
        $(this).toggleClass('close-menu-min');
        $(".bl_nav__mobile").toggleClass('closeMenu');

    });

//     headerPage.on('click', '.open-menu-main', function () {
//         headerPage.removeClass('open-sub-menu');
//         headerPage.toggleClass('open-main-menu');
//     });
//
// //search
//     headerPage.on('click', '.mobile-ico__search', function () {
//         headerPage.removeClass('open-sub-menu');
//         headerPage.toggleClass('open-search');
//         headerPage.removeClass('open-main-menu');
//     });
//
//     headerPage.on('click', '.close-search', function () {
//         headerPage.toggleClass('open-search');
//     });
//
// //footer
//     $('.footer-page').on('click', '.h3-title', function () {
//         $(this).closest('.foot-info-list__title').toggleClass('active');
//     });


//////////////////////////////////////////

//   sliderEffect
    function sliderEffectForButtons(button, element, duration) {

        button.click(function () {
            element.slideToggle(duration);
        });
    }

//  hideShowEffect
    function hideShowEffect(button, element) {

        button.click(function () {
            element.toggleClass("hidden");
        });
    }


    var buttonLanguage = $(".bl_language__active"),
        fieldWithOtherLanguage = $(".bl_language__variables"),
        buttonChooseRigthLanguage = $(".bl_language__variables_item");

    hideShowEffect(buttonLanguage, fieldWithOtherLanguage);
    hideShowEffect(buttonChooseRigthLanguage, fieldWithOtherLanguage);

    function changeText(button, whatToChange) {

    }


 //// Main-slider

    $(".bl_mainSlider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 5,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });

// slider_popular

    $(".slider_popular").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 0,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },

            550: {
                items: 2
            },
            320: {
                items: 1
            }

        }
    });


////// slider_newProducts

    $(".slider_newProducts").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 0,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            550: {
                items: 2
            },
            320: {
                items: 1
            }

        }
    });

////hover sliders srrows navigations

    function hoverArrows(sliderBox, arrowPrev, arrowNext, changedClass) {

        sliderBox.hover(function () {
                arrowPrev.addClass(changedClass);
                arrowNext.addClass(changedClass);
            },
            function () {
                arrowPrev.removeClass(changedClass);
                arrowNext.removeClass(changedClass);
            });
    }

var blockPopular = $(".bl_popular"),
    arrowPrev_popular = $(".slider_popular.owl-carousel .owl-prev"),
    arrowNext_popular = $(".slider_popular.owl-carousel .owl-next"),

    blockNewProducts = $(".bl_newProducts"),
    arrowPrev_newProducts = $(".slider_newProducts.owl-carousel .owl-prev"),
    arrowNext_newProducts = $(".slider_newProducts.owl-carousel .owl-next"),

    hover_arrowsClass = "arrow-prev__hover";

    hoverArrows(blockPopular, arrowPrev_popular, arrowNext_popular, hover_arrowsClass);
    hoverArrows(blockNewProducts, arrowPrev_newProducts, arrowNext_newProducts, hover_arrowsClass);


// Ancor to top

    $(".bl_ancor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });


});

// Showed ancor only when scrolling > scrineSize

$(window).scroll(function() {

    // var topNow = blockNavigation.offset().top;
    // var leftNow = blockNavigation.offset().left;
    //
    // if ( ($(this).scrollTop() > startFixed) && (screenWidth >= 1200) ) {
    //
    //
    //
    // } else if($(this).scrollTop() <= startFixed ) {
    //
    //
    // }

});





// RESIZE WINDOW

var body = $("body");

var iconMenu = $(".open-menu-min"),
    iconMenu_close = "close-menu-min";

var fullNavigation = $(".bl_fullNavigation"),
    mobileNavigation = "bl_fullNavigation_mobile",

    blockNavigation = $(".bl_nav"),
    menuMobile = "bl_nav__mobile",
    closeMenu = "closeMenu";



$(window).resize(function(){
    if( body.width() >= 1200 ){

        fullNavigation.removeClass(mobileNavigation);

        blockNavigation.removeClass(menuMobile);
        blockNavigation.removeClass(closeMenu);
    }else {
        fullNavigation.addClass(mobileNavigation);


        blockNavigation.addClass(menuMobile);
        blockNavigation.addClass(closeMenu);

        iconMenu.removeClass(iconMenu_close);
    }




});
$(window).resize();