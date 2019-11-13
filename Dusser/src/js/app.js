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
    if ($('.range-slider').length > 0) {
        functions.no_ui_slider();
    }
    if ($('.gallery').length > 0) {
        functions.gallery('.gallery');
    }
    if ($('.spinner').length > 0) {
        functions.spinner();
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

    // $('.link-auth-open').click(() => {
    //     functions.auth.open()
    // })

    $(document).on('click', '[data-open-modal]', function() {
        let modalData = $(this).attr('data-open-modal');
        $('[data-modal=' + modalData + ']').addClass('active');
        functions.ovh.add();
        $('.modal').addClass('opened');
    });

    $('.modal').on('click', '.close', () => {
        functions.ovh.remove();
        $('.modal').removeClass('opened');
        $('[data-modal]').removeClass('active');
    });

    $(document).on('click', '.header-search--opener', function() {
        $search.addClass('active');
        $search.find('input').focus();
    });

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(() => {});
});