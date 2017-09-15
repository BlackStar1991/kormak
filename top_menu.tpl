<?php /* if(!empty($top_menu_items)) { ?>
<ul class="bl_fullCategories__field ">
    <?php foreach($top_menu_items as $menu_item) { ?>
    <li class="bl_fullCategories__item"><a href="<?php echo $menu_item['href']; ?>" class="bl_fullCategories__link"><?php echo $menu_item['name']; ?></a></li>
    <?php } ?>
</ul>
<?php } */ ?>


<div id="top_menu">

    <ul class="main-menu top_custom_menu custom_menu middle_menu_right">
        <?php if (!empty($top_menu_items)) {
            foreach ($top_menu_items as $item_menu) { ?>
                <li class="custom_menu_item main-menu__item <?php echo $item_menu['class']; ?>">
                    <a class="main-menu__link" href="<?php echo $item_menu['href']; ?>">
                            <?php echo $item_menu['name']; ?>
                        </a>

                    <?php if (!empty($item_menu['child'])) { ?>

                        <span class="custom_open_btn"><i class="fa fa-caret-down" aria-hidden="true"></i></span>


                        <ul class="custom_menu">

                            <?php $category_item = 0; ?>

                            <div class="col-li-3">

                                <?php foreach ($item_menu['child'] as $child_item) { ?>

                                <?php
                                $current_item = str_replace("col-category-", "", $child_item['class']);

                                $mas_col = array("1", "2", "3", "4", "5");
                                if (!(in_array($current_item, $mas_col))) {
                                    $current_item = 0;
                                }
                                ?>

                                <?php if ($current_item !== $category_item && $category_item !== 0 && $current_item !== 0) {
                                $category_item = $current_item; ?>
                            </div>
                            <div class="col-li-3">
                                <?php } else {
                                    $category_item = $current_item; ?>

                                <?php } ?>

                                <li class="custom_menu_item"><a
                                            href="<?php echo $child_item['href']; ?>"><?php echo $child_item['name']; ?></a>
                                    <?php if (!empty($child_item['child'])) { ?>

                                        <span class="custom_open_btn"><i class="fa fa-caret-down"
                                                                         aria-hidden="true"></i></span>

                                        <ul class="custom_menu">
                                            <?php foreach ($child_item['child'] as $last_child) { ?>
                                                <li>
                                                    <a href="<?php echo $last_child['href']; ?>"><?php echo $last_child['name']; ?></a>
                                                </li>
                                            <?php } ?>
                                        </ul>

                                    <?php } ?>
                                </li>

                                <?php } ?>

                            </div>

                        </ul>


                    <?php } ?>
                </li>
            <?php }
        } ?>

    </ul>

</div>


<style>
    #top_menu {
        display: none;
    }

    .middle_menu_right {
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .middle_menu_right > li {
        float: left;
        transition: all 0.2s ease-out;
        text-align: center;

    }

    .middle_menu_left > li > a,
    .middle_menu_right > li > a {
        display: block;
        padding: 0 25px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        color: white;
        text-align: center;
        width: 100%;

        transition: all 250ms cubic-bezier(0.705, 0.105, 0.990, 0.745);
        transition-timing-function: cubic-bezier(0.705, 0.105, 0.990, 0.745);
    }

    .dropdown-menu a {
        color: #666;
        font-weight: 400;
    }

    .dropdown-menu > li > a {
        padding: 5px 20px;
        font-size: 16px;
    }

    .dropdown-menu > li > a:hover,
    .dropdown-menu > li > a:focus {
        background: #f2f2f2;
    }

    .middle_menu_right > li > a {
        display: block;
        padding: 12px 40px;
        font-size: 18px;
        color: white;
        text-align: center;
        width: 100%;
        margin: 0;
    }

    .middle_menu_right > li > a:hover {
        text-decoration: none;
    }

    .middle_menu_right {
        margin: 0;
    }

    @media (max-width: 992px) {
        .middle_menu_left li a {
            font-size: 14px;
            line-height: 25px;
            padding: 0 10px;
        }
    }

    .top_custom_menu .custom_menu {
        display: none;
        background: #eee;
    }

    .top_custom_menu .custom_menu .custom_menu {
        display: none;
        background: white;
    }

    .custom_menu_item {
        position: relative;
        text-align: center;

        width: calc(100% / 8 - 10px); /* Зависит от количества блоков*/
        height: 100%;
    }

    .custom_menu .custom_menu .custom_menu_item > a {
        display: block;

    }

    .custom_menu .custom_menu a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .custom_open_btn {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        color: white;
        padding: 25px;
        cursor: pointer;
    }

    .custom_menu_item .custom_menu .custom_open_btn {
        top: 0;
        background: #de0914;
    }

    .custom_open_btn i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }



    @media (max-width: 1200px) {
      .custom_menu_item .custom_menu .custom_menu_item {
          line-height: 50px;

          width: 100%;
          border-bottom: 1px solid white;
        }
        .custom_menu_item .custom_menu .custom_menu_item a{
            width: 100%;
           text-indent: 15px;
        }

    }


    @media (min-width: 992px) {
        #top_menu {
            display: block !important;
        }

        .middle_menu_right > li > a {
            padding: 15px 4px;
            font-size: 14px;
        }

        .middle_menu_right .custom_menu > a {
            border-bottom: none;
        }

        .custom_menu_item {
            text-align: left;
        }

        .custom_menu .custom_menu_item > a {
            padding-left: 0;
        }

        .custom_menu .custom_menu a:hover {
            color: #00acee;
            background: whitesmoke;
        }

        .top_custom_menu > .custom_menu_item > .custom_menu {
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 10;
            text-align: left;
        }

        .custom_menu_item > .custom_menu {
            width: 35vw;
        }

    }

    @media (min-width: 992px) {
        .middle_menu_right > li > a {
            display: inline-block;
            width: auto;
            padding: 15px 45px 15px 10px;
            font-size: 14px;
        }

        .custom_open_btn {
            height: 100%;
            width: 50px;
        }
    }

    @media (min-width: 1200px) {
        .middle_menu_right > li > a {
            padding: 15px 25px;
        }

        .telephones_block > p a {
            font-size: 13px;
        }
    }

    @media (max-width: 991px) {

        .custom_menu .custom_menu .custom_menu_item > a {
            padding: 13px 50px 13px 15px;
        }

        .middle_menu_left li a {
            font-size: 16px;
            text-align: center;
            padding: 5px 0;
        }

        .middle_menu_right li {
            display: block;
            width: 100%;
        }

        .middle_menu_right > li {
            border-bottom: 1px dotted #c4e0a9;
        }

        #main_menu li a {
            padding: 20px;
            font-size: 25px;
            min-height: initial;
        }

    }


    @media (min-width: 1200px) {
        #top_menu .main-menu {
            text-align: justify;
        }

        #top_menu .main-menu:after {
            content: "";
            width: 100%;
        }

        .main-menu__link {
            display: block;
            height: 100%;
           line-height:50px;
            width: 100%;
            color: white;
            font-size: 18px;
            font-weight: 400;
        }

        .custom_menu .custom_menu_item > a {
            padding: 0;
        }

        .middle_menu_right > li {
            float: none;
        }

        .middle_menu_right > li > a {
            font-size: 18px;
            font-weight: 400;
        }



        .middle_menu_right > .custom_menu_item {
            position: static;
            display: inline-block;
        }

        .custom_menu .custom_menu a {
            padding: 5px;
        }

        .custom_menu .custom_menu a:hover {
            color: #0160ac;
            text-decoration: underline;
            background: transparent;
        }

        .custom_menu .custom_menu .custom_menu_item > a {
            font-family: "TahomaBold", sans-serif;
            color: #333;
            text-transform: uppercase;
            font-size: 15px;
        }

        .custom_menu .custom_menu .custom_menu_item > a:hover {
            color: #0160ac;
        }

        .middle_menu_right .custom_menu_item .custom_menu .custom_menu_item .custom_open_btn {
            display: none;
        }

        .middle_menu_right > .custom_menu_item .custom_open_btn,
        .middle_menu_right > .custom_menu_item .custom_open_btn i {
            position: static;
        }

        .middle_menu_right > .custom_menu_item .custom_open_btn {
            display: none;
        }

        .middle_menu_right > .custom_menu_item .custom_open_btn i {
            transform: translateY(-30%);
        }

        .top_custom_menu .custom_menu {
            background: white;
        }

        .middle_menu_right > .custom_menu_item > .custom_menu {
            width: 100%;
            border: 2px solid #91b7d6;
            box-sizing: border-box;
            padding: 5px;
        }

        .middle_menu_right > .custom_menu_item > .custom_menu > .col-li-3 {
            width: 33%;
            float: left;
            padding-right: 15px;
            position: relative;
        }

        .middle_menu_right > .custom_menu_item.count-item-4 > .custom_menu > .col-li-3 {
            width: 25%;
        }

        .middle_menu_right > .custom_menu_item.count-item-2 > .custom_menu > .col-li-3 {
            width: 50%;
        }

        .middle_menu_right > .custom_menu_item.count-item-1 > .custom_menu > .col-li-3 {
            width: 100%;
        }

        .middle_menu_right .custom_menu_item .custom_menu .custom_menu_item {
            display: inline-block;
            vertical-align: top;
            width: 100%;
        }

        .middle_menu_right .custom_menu_item .custom_menu .custom_menu_item .custom_menu {
            display: block;
            width: auto;
        }

        .middle_menu_right .custom_menu_item .custom_menu .custom_menu_item li {
            display: inline-block;
            width: 100%;
            font-size: 16px;
            padding-left: 20px;
        }

        .custom_menu_item .custom_menu .custom_menu_item  a{
            padding: 15px;
        }


        .middle_menu_right .custom_menu_item .custom_menu .custom_menu_item li a {
            color: #333;
        }

        .middle_menu_right .custom_menu_item .custom_menu .custom_menu_item li a:hover {
            color: #0160ac;
        }

    }


    /*.custom_menu_item:hover .custom_menu{*/
        /*display: block;*/
    /*}*/

</style>



<script>
    // Константа - ширина экрана
    var w_w = $(window).width();

    // Константа - ширина экрана меньше которой не будет работать mouseenter, mouseleave
    var w_w_a = 1200;

    // Запись в константу нового размера экрана после его изменения
    $(window).resize(function () {
        w_w = $(window).width();
    });

    // После входа курсора в область пункта меню открывает его подменю (адаптировано под размер экрана)
    $('.top_custom_menu > .custom_menu_item').mouseenter(function () {
        if (w_w > w_w_a) {
            $(this).find('> .custom_menu').addClass('open').queue("fx", []).stop(false, true).fadeIn(300);
        }

    });

    // После выхода курсора с области меню закрывает его (адаптировано под размер экрана)
    $('.top_custom_menu > .custom_menu_item').mouseleave(function () {
        if (w_w > w_w_a) {
            $(this).find('> .custom_menu').removeClass('open').queue("fx", []).stop(false, true).fadeOut(100);
        }
    });

    // При нажатии на кнопку открывает и закрывает подменю данного уровня
    $('.custom_open_btn').click(function () {
        if ($(this).next().hasClass('open')) {
            $(this).next().removeClass('open').slideUp(100);
        }
        else {
            $(this).closest('.custom_menu').find('> .custom_menu_item > .custom_menu').removeClass('open').slideUp(100);
            $(this).next().addClass('open').slideDown(100);
        }
    });

    // При нажатии на документ вне меню, закрывает открытые подменю в этом меню
    $('body').on('click', function () {
        $('#<?php echo $module['class']; ?> .custom_menu.open').removeClass('open').slideUp(0);
    });

    // При клике на область меню не распространять клик далее к родительским елементам (блокировка клика)
    $('#<?php echo $module['class']; ?>').on('click', function (event) {
        event.stopPropagation();
    });

    // При адаптивном размере экрана кнопка для открытия и закрытия основное меню
    $('#<?php echo $module['class']; ?> .open-menu-main').on('click', function (event) {
        event.stopPropagation();
        $('#top_menu').slideToggle(100);
    });
</script>
