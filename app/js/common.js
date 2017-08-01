$(document).ready(function () {

//MENU
    var headerPage = $('.header');

    $('.open-menu-min').on("click", function () {
        $(this).toggleClass('close-menu-min');
        $(".bl_nav__mobile").toggleClass('closeMenu');

    });


    var buttonRubrics = $(".open-menu-main"),
        fieldRubrics = $(".bl_fullCategories__field");


    var buttonCategories = $(".bl_catalogProducts__title"),
        fieldCategories = $(".bl_catalogProducts__full");


    var buttonInformation = $(".code_information__title"),
        fieldInformation = $(".code_information__full");


    var buttonContacts = $(".code_contacts__title"),
        fieldContacts = $(".code_contacts__full");


    var buttonAdress = $(".code_adress__title"),
        fieldAdress = $(".code_adress__full");


//////////////////////////////////////////


//   sliderEffect
    function sliderEffectForButtons(button, element, duration) {

        // return function () {
            button.click(function () {
                element.slideToggle(duration);
            });
        // }(button, element, duration);

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
                items: 3,
                center: true
            },

            550: {
                items: 2
            },
            320: {
                items: 1,
                center: true
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
                items: 3,
                center: true
            },
            550: {
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

//    probuct_image__slider - SLIDER for Product

    $(".product_image__slider").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: false,
        dots: false,

        mouseDrag: false,
        touchDrag: false,

        autoplay: false,
        stopOnHover: true,
        margin: 15,
        center: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 3
            },
            550: {
                items: 2,
                center: false
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

/////// slider_withThisProductBuy - С этим товаром покупают:

    $(".slider_withThisProductBuy").owlCarousel({
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
                items: 3,
                center: true
            },
            550: {
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

//// slider_youViewed  - Вы смотрели:

    $(".slider_youViewed").owlCarousel({
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
                items: 3,
                center: true
            },
            550: {
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

//// hover sliders arrows navigations

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

        blockWithThisProductBuy = $(".bl_withThisProductBuy"),
        arrowPrev_WithThisProductBuy = $(".slider_withThisProductBuy.owl-carousel .owl-prev"),
        arrowNext_WithThisProductBuy = $(".slider_withThisProductBuy.owl-carousel .owl-next"),

        blockYouViewed = $(".bl_youViewed"),
        arrowPrev_youViewed = $(".slider_youViewed.owl-carousel .owl-prev"),
        arrowNext_youViewed = $(".slider_youViewed.owl-carousel .owl-next"),


        hover_arrowsClass = "arrow-prev__hover";

    hoverArrows(blockPopular, arrowPrev_popular, arrowNext_popular, hover_arrowsClass);
    hoverArrows(blockNewProducts, arrowPrev_newProducts, arrowNext_newProducts, hover_arrowsClass);
    hoverArrows(blockWithThisProductBuy ,arrowPrev_WithThisProductBuy, arrowNext_WithThisProductBuy, hover_arrowsClass);
    hoverArrows(blockYouViewed, arrowPrev_youViewed, arrowNext_youViewed, hover_arrowsClass);


//// Img for main product slider

    $('.product_image__slider').on('click', ".product_image__sliderImg",  function() {
        var currentSrc = $(this).attr('src');

        $('.product_image__img').attr('src', currentSrc);

        console.log("OK");

    });



// Ancor to top

    $(".bl_ancor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");

    telephonseInput.on("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

////// Product quantity

var quantityProduct = $(".block_quantity__input"),
    plusProduct = $(".block_quantity__plus"),
    minusProduct = $(".block_quantity__minus");

    plusProduct.on("click", function () {
        quantityProduct.val( Number(quantityProduct.val()) + 1);
    });

    minusProduct.on("click", function () {

        if (quantityProduct.val()>1){
            quantityProduct.val( Number(quantityProduct.val()) - 1);
        }
        else {
            quantityProduct.val( 1 );
        }
    });


/// buttons must work only  $(window).width() <=991px


    function liveScopeOfButtons() {

        if ($(window).width() <= 991) {

            sliderEffectForButtons(buttonRubrics, fieldRubrics, 600);
            sliderEffectForButtons(buttonCategories, fieldCategories, 600);
            sliderEffectForButtons(buttonInformation, fieldInformation, 600);
            sliderEffectForButtons(buttonContacts, fieldContacts, 600);
            sliderEffectForButtons(buttonAdress, fieldAdress, 600);


        } else {
            return false;
        }

    }

    liveScopeOfButtons();




// Showed ancor only when scrolling > scrineSize

$(window).scroll(function () {

    var ancorFish = $(".bl_ancor"),
        windowHeight = $(window).height() / 2;

    if ($(this).scrollTop() > windowHeight) {

        ancorFish.removeClass("hidden");

    } else {
        ancorFish.addClass("hidden");

    }

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


$(window).resize(function () {

    var fieldRubrics = $(".bl_fullCategories__field"),
        fieldCategories = $(".bl_catalogProducts__full"),

        fieldInformation = $(".code_information__full"),
        fieldContacts = $(".code_contacts__full"),
        fieldAdress = $(".code_adress__full");


     var buttonsWorkRight = liveScopeOfButtons();      ///////////// Эта хрень не работает =(


    if (body.width() >= 1200) {


        fullNavigation.removeClass(mobileNavigation);
        blockNavigation.removeClass(menuMobile);
        blockNavigation.removeClass(closeMenu);
    } else {
        fullNavigation.addClass(mobileNavigation);


        blockNavigation.addClass(menuMobile);
        blockNavigation.addClass(closeMenu);

        iconMenu.removeClass(iconMenu_close);


    }


    if (body.width() >= 992) {
        fieldRubrics.css({"display": "block"});
        fieldCategories.css({"display": "block"});
        fieldInformation.css({"display": "block"});
        fieldContacts.css({"display": "block"});
        fieldAdress.css({"display": "block"});


        return false;


    } else {
        fieldRubrics.css({"display": "none"});
        fieldCategories.css({"display": "none"});
        fieldInformation.css({"display": "none"});
        fieldContacts.css({"display": "none"});
        fieldAdress.css({"display": "none"});



    }


});
$(window).resize();


});
