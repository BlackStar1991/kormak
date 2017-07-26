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






});
