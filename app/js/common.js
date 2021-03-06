$(document).ready(function () {

//MENU


    var blackWrapper = $(".blackWrapper"),
        active = "active";

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


    var buttonFilterCategories = $(".rubric__title_button__categories"),
        fieldFilterCategories = $(".bl_filters");

    var buttonAllFilters = $(".rubric__title_button__filters"),
        fieldAllFilters = $(".bl_filters__productsFilters");


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


/// buttons must work only  $(window).width() <=991px


    function liveScopeOfButtons() {

        if ($(window).width() <= 991) {

            sliderEffectForButtons(buttonRubrics, fieldRubrics, 600);
            sliderEffectForButtons(buttonCategories, fieldCategories, 600);
            sliderEffectForButtons(buttonInformation, fieldInformation, 600);
            sliderEffectForButtons(buttonContacts, fieldContacts, 600);
            sliderEffectForButtons(buttonAdress, fieldAdress, 600);

            sliderEffectForButtons(buttonAllFilters, fieldAllFilters, 600);

        } else {
            return false;
        }

    }

    liveScopeOfButtons();

    sliderEffectForButtons(buttonFilterCategories, fieldFilterCategories, 600);


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

    function hoverArrows(sliderBox, fullArrows, changedClass) {

        sliderBox.hover(function () {
                fullArrows.addClass(changedClass);

            },
            function () {
                fullArrows.removeClass(changedClass);
            });
    }


    var blockPopular = $(".bl_popular"),
        allPopularArrows = $(".slider_popular.owl-carousel .owl-prev, .slider_popular.owl-carousel .owl-next"),


        blockNewProducts = $(".bl_newProducts"),
        allNewProductsArrows = $(".slider_newProducts.owl-carousel .owl-prev, .slider_newProducts.owl-carousel .owl-next"),


        blockWithThisProductBuy = $(".bl_withThisProductBuy"),
        allWithThisProductBuyArrows = $(".slider_withThisProductBuy.owl-carousel .owl-prev, .slider_withThisProductBuy.owl-carousel .owl-next"),

        blockYouViewed = $(".bl_youViewed"),
        allYouViewedArrows = $(".slider_youViewed.owl-carousel .owl-prev, .slider_youViewed.owl-carousel .owl-next"),


        hover_arrowsClass = "arrow-prev__hover";

    hoverArrows(blockPopular, allPopularArrows, hover_arrowsClass);
    hoverArrows(blockNewProducts, allNewProductsArrows, hover_arrowsClass);
    hoverArrows(blockWithThisProductBuy, allWithThisProductBuyArrows, hover_arrowsClass);
    hoverArrows(blockYouViewed, allYouViewedArrows, hover_arrowsClass);


//// Img for main product slider

    $('.product_image__slider').on("click", ".product_image__sliderImg", function () {
        var currentSrc = $(this).attr('src');

        var hrefForFancybox = currentSrc.split(".").join("-big.");


        $('.product_image__img').attr('src', currentSrc);

        // add Big photo for fancybox  ///////////////////////////////
        $(".fancybox-animated").attr("href", hrefForFancybox);


    });
//// Function added_catalog



    (function addedCatalog() {

       var
           itemCatalog = $('.bl_catalogProducts__item'),
           fieldAddedCatalog = $(".added_catalog"),
           addedSection = $(".added_catalog__section") ;


        itemCatalog.hover(
            function(){
                addedSection.removeClass(active);
               var currentIndex = $(this).index();
                fieldAddedCatalog.removeClass("hidden");
                addedSection.eq(currentIndex).addClass(active);

            },
            function(){

                var visitedField = $(".bl_catalogProducts__full, .added_catalog__section.active");
// Тут ещё не всё так глатко
                visitedField.mouseleave(function(){
                    setTimeout(function () {
                        fieldAddedCatalog.addClass("hidden");
                    }, 1500);
                });


            });


    }());


    // SLIDER for categories show

    function sliderShowForAllCategories() {
//////Categories Filter

        var sliderName = $(".code_sliderName");

        sliderName.on("click", function () {
            $(".bl_filters__caterogyName_active").removeClass("bl_filters__caterogyName_active");
            sliderName.removeClass("bl_filters__caterogyName_active");
            $(this).addClass("bl_filters__caterogyName_active");

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_triangle__active");

        });

        var filterItem = $(".bl_filters__item");

        filterItem.on("click", function () {
            filterItem.removeClass("decor_circle");
            $(this).addClass("decor_circle");

            $(".bl_filters__subName_active").removeClass("bl_filters__subName_active");
            $(this).children().addClass("bl_filters__subName_active");
        });

//////// Characteristics filter

        var filterName = $(".code_filterName");

        filterName.on("click", function () {

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_leftTriangle__active");
        });
    }


    $(".bl_filter__label").on("click", function (event) {

        $(this).find(".filter_text").toggleClass("filter_text__active");

        if ($(this).find(".bl_filter__checkbox").prop("checked") === true) {
            $(this).find(".bl_filter__checkbox").prop("checked", false);
        } else {
            $(this).find(".bl_filter__checkbox").prop("checked", true);
        }


        event.preventDefault();

    });


    sliderShowForAllCategories();


//  Fancybox - увеличение главной фотки товара по клику ////////////////////


    $('.fancybox-animated').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        },
        arrows: true
    });

////// GRID / LIST view - switch

    var buttonGridView = $(".code_grid"),
        buttonListView = $(".code_list"),

        classGrid = "view_grid__STYLE",
        classList = "view_list__STYLE",

        bl_fullProducts__item = $(".bl_fullProducts__item"),

        code_listView1 = $(".code_listView1"),
        code_listView2 = $(".code_listView2"),
        code_listView3 = $(".code_listView3"),
        code_listView4 = $(".code_listView4"),


        allProducts = $(".bl_products");

    buttonGridView.on("click", function () {
        allProducts.removeClass(classList);
        allProducts.addClass(classGrid);

        bl_fullProducts__item.addClass("col-md-4 col-sm-6 col-xs-12");
        code_listView1.removeClass("col-xs-12");
        code_listView2.removeClass("col-xs-4");
        code_listView3.removeClass("col-xs-8");
        code_listView4.removeClass("bl_fullProducts__listStyle");
    });

    buttonListView.on("click", function () {
        allProducts.removeClass(classGrid);
        allProducts.addClass(classList);

        bl_fullProducts__item.removeClass("col-md-4 col-sm-6 col-xs-12");
        code_listView1.addClass("col-xs-12");
        code_listView2.addClass("col-xs-4");
        code_listView3.addClass("col-xs-8");
        code_listView4.addClass("bl_fullProducts__listStyle");


    });


//// Short description

    var sizeDescription = $(".product_sizeDescription"),
        labelSize = $('.product_size__label'),
        fullSizeRadioButtons = $(".product_size__input"),
        blockWoodBeHidden = $(".bl_minInformationAboutProduct");

    fullSizeRadioButtons.on("click", function () {

        blockWoodBeHidden.addClass("hidden");

        var index = 0;
        var count = 0;

        labelSize.each(function () {
            count++;
            if ($(this).children('input').prop('checked') == true) {
                index = count;
            }
        });

        sizeDescription.removeClass("product_sizeDescription__showed");
        sizeDescription.eq(index - 1).addClass("product_sizeDescription__showed");

    });



    $("a[href^=\"#\"]").on("click", function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            destination = $(id).offset().top;

        console.log(id + " = id");
        $('body,html').animate({scrollTop: destination}, 500);

        if ( $(this).hasClass("ancor_menu") ){
            $(".bl_filters").slideDown(1000);
        }
        if($(this).hasClass("ancor_filter")){
            $(".bl_filters__productsFilters").slideDown(1000);
        }


    });

//// Product Options

  var productOptionsLength = $(".table_prodOptions tr").length;
  // Если товаров > 4 создаем кнопку на которую можно нажать

      if(productOptionsLength > 4){
          var text = "Смотреть все варианты";
          $(".bl_productOptions").append('<button class="btn_prodOptions__showAll" type="button">'+ text +'</button>');
      }

   $("body").on("click", ".btn_prodOptions__showAll",  function () {
       $(".table_prodOptions tr:nth-child(n+5)").show().css("display", "table-row");
       $(this).remove();
   });


// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});


/// POPUP BIFORE ADD TO SHOPBAG

    function popupWindowBiforeAddToShopBag() {

        var TESTBUTTON = $(".TEST_BUTTON");

        var popupWindow = $(".popup_likeShopbag"),
            buttonClose = $(".popup_likeShopbag__close"),
            buttonContinueBuying = $(".popup_likeShopbag__continueBuying");


        TESTBUTTON.on("click", function () {

            popupWindow.removeClass("hidden");
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
        });

        function closePopupWindow(btn) {
            btn.on("click", function () {
                popupWindow.addClass("hidden");
                blackWrapper.addClass("hidden");
                blackWrapper.animate({opacity: 0}, 400);
            })
        }

        closePopupWindow(buttonClose);
        closePopupWindow(buttonContinueBuying);
        closePopupWindow(blackWrapper);


    }

    popupWindowBiforeAddToShopBag();


/// Success Buying
//  Если пользователю удалось отправить номер своего мобильного продавцу должна отрабатывать эта функция


    function successfulPurchasePassed(blSuccsess, buttonClose) {

        setTimeout(showBlock, 200);

        buttonClose.on("click", hideBlock);
        blackWrapper.on("click", hideBlock);


        function showBlock() {

            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);

            blSuccsess.removeClass("hidden");
            blSuccsess.removeClass("bounceOutUp");
            blSuccsess.addClass("animated bounceInDown");
        }

        function hideBlock() {
            blSuccsess.removeClass("bounceInDown");
            blSuccsess.addClass("bounceOutUp");
            blackWrapper.animate({opacity: 0}, 400);


            setTimeout(function () {
                blackWrapper.addClass("hidden");
                blSuccsess.addClass("hidden");
            }, 1000);
        }
    }


    $(".btn_buy__send").on("click", function () {
        successfulPurchasePassed($(".bl_successBuying"), $(".bl_successBuying__close"))
    }
);

    $(".btn_miniCallBack").on("click", function () {
        successfulPurchasePassed($(".bl_miniCallBack"), $(".miniCallBack__close"))
    }
    );


////// Product quantity

    var quantityProduct = $(".block_quantity__input"),
        plusProduct = $(".block_quantity__plus"),
        minusProduct = $(".block_quantity__minus");

    // plusProduct.on("click", function () {
    //     quantityProduct.val(Number(quantityProduct.val()) + 1);
    // });
    //
    // minusProduct.on("click", function () {
    //
    //     if (quantityProduct.val() > 1) {
    //         quantityProduct.val(Number(quantityProduct.val()) - 1);
    //         quantityProduct.val(Number(quantityProduct.val()) - 1);
    //     }
    //     else {
    //         quantityProduct.val(1);
    //     }
    // });


    plusProduct.on("click", function () {
        var field = $(this).prev(".block_quantity__input");
        field.val(Number(field.val()) + 1);
    });

    minusProduct.on("click", function () {

        var field = $(this).next(".block_quantity__input");


        if (field.val() > 1) {
            field.val(Number(field.val()) - 1);
        }
        else {
            field.val(1);
        }
    });

    leaveOnlyNumber(quantityProduct);


    function leaveOnlyNumber(inputField) {
        inputField.on('keyup', function () {
            var val = $(this).val();
            var new_str = val.replace(/[^0-9]/gim, '');
            $(this).val(new_str);
        });

        inputField.on('blur', function () {
            var val = $(this).val();
            var new_str = val.replace(/[^0-9]/gim, '');

            if (val === "") {
                new_str = 1;
            }
            $(this).val(new_str);
        });
    }

    //////////////





// Road Map

    function roadMap() {
        var blockMap = $(".bl_map"),
            buttonCloseMap = $(".bl_map__close");

        $(".button_map").on("click", function () {
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
            blockMap.removeClass("hidden");

            if ($(".bl_map__iframe").length == 0) {
                $('<iframe class="bl_map__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2340071664594!2d30.62924531598441!3d50.455366979476075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c554bbd79077%3A0x433aacf838798f5b!2z0JrQntCg0JzQkNCa!5e0!3m2!1sru!2sru!4v1496344340189" frameborder="0" style="border:0"></iframe>').insertAfter(".bl_map__title");
            }
        });

        buttonCloseMap.on("click", function () {
            blackWrapper.animate({opacity: 0}, 200);
            blackWrapper.addClass("hidden");
            blockMap.addClass("hidden");
        });

        blackWrapper.on("click", function () {
            blockMap.addClass("hidden");
        });

    }

    roadMap();


    function showMoreInformation() {
        var buttonShowMoreInformation = $(".button_showMore"),
            buttonHeight = buttonShowMoreInformation.outerHeight(true),
            classShowFullBlock = "full_block";


        var heightNewsBlock = $(".bl_shopNews").height();
        if (heightNewsBlock === undefined) {
            heightNewsBlock = 400; // если блока с новостями нет
        }
        var fullBlock = buttonShowMoreInformation.parent(),
            heightFullBlock = fullBlock.innerHeight(),
            blockWithCEO = buttonShowMoreInformation.prev(),
            ceoBlockHeight = blockWithCEO.outerHeight(true),
            chooseAllElementsBiforeCEOBlock = blockWithCEO.prevAll(),
            heightChooseAllElementsBiforeCEOBlock = chooseAllElementsBiforeCEOBlock.outerHeight(true),
            heightOfPaddingsInnerBlock = fullBlock.css("paddingBottom");


        var corrected = window.getComputedStyle(blockWithCEO[0]).paddingBottom;



        if (( ceoBlockHeight <= heightNewsBlock)) {
            buttonShowMoreInformation.remove();
        } else {
            fullBlock.css("max-height", (heightNewsBlock));
            blockWithCEO.css("max-height", (heightNewsBlock - buttonHeight - heightChooseAllElementsBiforeCEOBlock - corrected));
        }
        console.log(" ceoBlockHeight2 = " + ceoBlockHeight);
        console.log(" blockWithCEO2 = " + blockWithCEO.height());
        console.log(" heightFullBlock2 = " + heightFullBlock);


        buttonShowMoreInformation.on("click", function () {
            buttonShowMoreInformation.children().eq(0).toggleClass("hidden");
            buttonShowMoreInformation.children().eq(1).toggleClass("hidden");
            fullBlock.toggleClass(classShowFullBlock);
            blockWithCEO.toggleClass(classShowFullBlock);

        });


    }

    showMoreInformation();


});

// Showed ancor only when scrolling > scrineSize

$(window).scroll(function () {

    var ancorFish = $(".bl_ancor"),
        ancorsForMobile = $(".bl_ancors"),
        btnMobileMenu = $(".btn_showAncors"),
        visible768px = "visible-xs",
        hidden = "hidden",
        windowHeight = $(window).height() / 2;

    if ($(this).scrollTop() > windowHeight) {

        ancorFish.removeClass(hidden);

    } else {
        ancorFish.addClass(hidden);
    }

    if ($(window).width() < 768){
        if ($(this).scrollTop() < windowHeight) {
            btnMobileMenu.removeClass(visible768px);
            ancorsForMobile.removeClass("active");
        }else{
            btnMobileMenu.addClass(visible768px);
            btnMobileMenu.removeClass(hidden);
        }

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

        // $(".bl_filters").css({"display": "block"});
        // $(".bl_filters__productsFilters").css({"display": "block"});


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



