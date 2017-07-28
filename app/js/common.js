$(document).ready(function () {


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
       fieldWithOtherLanguage =$(".bl_language__variables"),
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
            600: {
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
            // 600: {
            //     items: 4
            // }
        }
    });



    // slider_newProducts

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
            // 600: {
            //     items: 4
            // }
        }
    });



// Ancor to top

    $(".bl_ancor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });


});

// Showed ancor only when scrolling > scrineSize

// $(window).scroll(function() {
//
//     var topNow = blockNavigation.offset().top;
//     var leftNow = blockNavigation.offset().left;
//
//     if ( ($(this).scrollTop() > startFixed) && (screenWidth >= 1200) ) {
//
//
//
//
//         addFluid.removeClass("hidden");
//
//
//         addSomeClass(blockNavigation, "my_fixed");
//         addSomeClass(blockRepresent , "my_fixed__represent");
//         addSomeClass(blockTelephones, "my_fixed__telephones");
//         addSomeClass(blockCallback, "my_fixed__callback");
//
//         takeRightTop(addFluid, topNow, -5);
//
//
//         takeRightTop(blockRepresent, topNow, 5, leftNow, 310);
//         takeRightTop(blockTelephones, topNow, -4, leftNow, 540);
//         takeRightTop(blockCallback, topNow, -2, leftNow, 920 );
//
//
//
//     } else if($(this).scrollTop() <= startFixed ) {
//
//
//         addFluid.addClass("hidden");
//
//
//
//
//         removeSomeClass(blockNavigation, "my_fixed");
//         removeSomeClass(blockRepresent, "my_fixed__represent");
//         removeSomeClass(blockTelephones, "my_fixed__telephones");
//         removeSomeClass(blockCallback, "my_fixed__callback");
//
//
//
//         topZiro($(".bl_represent"));
//         topZiro($(".bl_telephones"));
//         topZiro($(".bl_callback"));
//
//
//     }
//
// });