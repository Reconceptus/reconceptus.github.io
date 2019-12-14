// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';

// variables
let $html = $('html'),
    scrollTop = $(window).scrollTop(),
    winWidth,
    winHeight;

// functions
window.functions = {
    burger: require('./modules/burger'),
    header_shadow: require('./modules/header-shadow'),
    modal: require('./modules/modal'),
    search: require('./modules/search'),
    filter: require('./modules/filter'),
    ovh: require('./modules/ovh'),
    scroll_top: require('./modules/scroll-top'),
    dropdown: require('./modules/dropdown'),
    markers: require('./modules/markers'),
    expander: require('./modules/expander'),
    listing_views: require('./modules/listing-views'),
    sticky_sidebar: require('./modules/sticky-sidebar'),
    contenteditable: require('./modules/contenteditable'),
    hasheditable: require('./modules/hasheditable'),
    gallery_carousel: require('./modules/gallery-carousel'),
    listing_carousel: require('./modules/listing-carousel'),
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

    function documentClick() {
        $(document).click(e => {
            // let targ = $(e.target);
            //
            // if(targ.parents('.language').length == 0){
            //     lang.removeClass('active')
            // }
        });
    }

    /* --------------------------------- document load --------------------------------- */

    documentClick();
    getWindowSizes();

    functions.modal.init();
    functions.dropdown();
    functions.scroll_top();
    functions.expander();

    if ($('.header').length > 0) {
        functions.header_shadow();
        functions.burger.init();
        functions.search.init();
    }
    if ($('#map').length > 0) {
        functions.markers();
    }
    if ($('.pl-nav-scroll').length > 0) {
        if ($('html').hasClass('desktop')) {
            $('.pl-nav-scroll').mCustomScrollbar({ theme: 'light' });
        }
    }
    if ($('.pl-sidebar-scroll').length > 0) {
        if ($('html').hasClass('desktop')) {
            $('.pl-sidebar-scroll').mCustomScrollbar({ theme: 'dark-3' });
        }
    }
    if ($('.listing_sidebar').length > 0) {
        functions.filter.init();
    }
    if ($('.listing_item-selectable').length > 0) {
        functions.listing_views();
    }
    if ($('.sidebar-sticky').length > 0) {
        functions.sticky_sidebar.init();
    }
    if ($('.contenteditable-box').length > 0) {
        functions.contenteditable.init();
    }
    if ($('.hasheditable-box').length > 0) {
        functions.hasheditable.init();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(e => {
        functions.header_shadow();
    });
});
