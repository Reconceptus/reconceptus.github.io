// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';
import './vendor/addToCart';

// variables
const $html = document.documentElement,
    $search = $('#search');
let scrollTop = $(window).scrollTop(),
    winWidth,
    winHeight;

// functions
window.functions = {
    ovh: require('./modules/ovh'),
    burger: require('./modules/burger'),
    auth: require('./modules/auth'),
    scroll_top: require('./modules/scroll-top'),
    expander: require('./modules/expander'),
    table_expander: require('./modules/table-expander'),
    no_ui_slider: require('./modules/no-ui-slider'),
    gallery: require('./modules/gallery'),
    spinner: require('./modules/spinner'),
    validation: require('./modules/validation'),
    sticky_sidebar: require('./modules/sticky-sidebar'),
    carousel: require('./modules/carousel'),
    filled_input: require('./modules/filled-input'),
    textbox: require('./modules/textbox'),
    popup: require('./modules/popup'),
    orders_table: require('./modules/orders-table'),
    alert: require('./modules/alert'),
    parallax: require('./modules/parallax'),
    search: require('./modules/search'),
    fn: require('./modules/fn'),
};

// scripts
$(document).ready(() => {
    /* ------------------------------- get window values ------------------------------- */

    function getWindowSizes() {
        winWidth = $(window).width();
        winHeight = $(window).height();
    }

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= document click events
    */

    function documentSearchClick() {
        $(document).click(e => {
            var targ = $(e.target);
            if (targ.parents('.header-search').length == 0) {
                $search.removeClass('active');
            }
        });
    }

    /* --------------------------------- document load --------------------------------- */

    documentSearchClick();
    getWindowSizes();
    functions.burger.init();
    functions.auth.init();
    functions.scroll_top();
    functions.expander();
    functions.filled_input();

    if ($('.pl-nav-scroll').length > 0) {
        if ($('html').hasClass('desktop')) {
            $('.pl-nav-scroll').mCustomScrollbar({ theme: 'light' });
        }
    }
    if ($('.pl-scroll').length > 0) {
        if ($('html').hasClass('desktop')) {
            $('.pl-scroll').each(function() {
                $(this).mCustomScrollbar();
            });
        }
    }
    if ($('[data-parallax]').length > 0) {
        functions.parallax();
    }
    if ($('.range-slider').length > 0) {
        functions.no_ui_slider();
    }
    if ($('.gallery').length > 0) {
        functions.gallery('.gallery');
    }
    if ($('.spinner').length > 0) {
        functions.spinner.init();
    }
    if ($('.fn-expand-table-box').length > 0) {
        functions.table_expander();
    }
    if ($('.validate-form').length > 0) {
        functions.validation.setDefaults();
    }
    if ($('.sidebar-sticky').length > 0) {
        functions.sticky_sidebar.init();
    }
    if ($('.text-box').length > 0) {
        functions.textbox();
    }
    if ($('.orders_table').length > 0) {
        functions.orders_table.init();
    }
    if ($('#search').length > 0) {
        functions.search();
    }

    $('.show-auth-menu').click(function(e) {
        if($(window).width() < 1024){
            e.preventDefault;
            $('.header-profile--auth').toggleClass('is-active')
        }
    });

    $(document).on('click', '[data-open-modal]', function() {
        let modalData = $(this).attr('data-open-modal');
        $('[data-modal=' + modalData + ']').addClass('active');
        functions.ovh.add();
        $('.modal').addClass('opened');
    });

    $('.modal').on('click', '.close', () => {
        functions.fn.closeModal();
    });

    $(document).on('click', '.header-search--opener', function() {
        $search.addClass('active');
        $search.find('input').focus();
    });

    $('.types-nav [data-href]').click(function (e) {
        e.preventDefault;
        let data = $(this).attr('data-href'),
            offset = $('#'+data).offset().top;
        if($(window).width()>1024){
            $('body,html').animate({scrollTop: offset}, 300)
        } else {
            $('body,html').animate({scrollTop: offset - 75}, 300)
        }
    });

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(() => {});
});