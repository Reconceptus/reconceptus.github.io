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
    functions.burger.init();
    functions.search.init();
    functions.dropdown();
    functions.scroll_top();
    functions.expander();

    if ($('[data-owl="blog"]').length > 0) {
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

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(e => {});
});
