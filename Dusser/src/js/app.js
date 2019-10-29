// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';

// variables
const $html = document.documentElement;
let scrollTop = $(window).scrollTop(),
    winWidth,
    winHeight;

// functions
const functions = {
    burger: require('./modules/burger'),
    auth: require('./modules/auth'),
    scroll_top: require('./modules/scroll-top'),
    expander: require('./modules/expander'),
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
            // var targ = $(e.target);
            // if(targ.parents('#searchForm').length == 0){
            //     if(targ.parents('#search_btn').length == 0){
            //         search.removeClass('active');
            //         nav.removeClass('hidden');
            //     }
            // }
            //
            // if(targ.parents('.language').length == 0){
            //     lang.removeClass('show')
            // }
        });
    }

    /* --------------------------------- document load --------------------------------- */

    documentClick();
    getWindowSizes();
    functions.burger();
    functions.auth.default();
    functions.scroll_top();
    functions.expander();

    if ($('.pl-nav-scroll').length > 0) {
        $('.pl-nav-scroll').mCustomScrollbar({ theme: 'light' });
    }
    if ($('.pl-scroll').length > 0) {
        $('.pl-scroll').each(function() {
            $(this).mCustomScrollbar();
        });
    }

    // $('.link-auth-open').click(() => {
    //     functions.auth.open()
    // })

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(() => {});
});