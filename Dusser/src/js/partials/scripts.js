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
    if ($('.range-slider').length > 0) {
        functions.no_ui_slider();
    }
    if ($('.gallery').length > 0) {
        functions.gallery();
    }
    if ($('.spinner').length > 0) {
        functions.spinner();
    }
    if ($('.fn-expand-table-box').length > 0) {
        functions.table_expander();
    }
    if ($('.validate-form').length > 0) {
        functions.validation();
    }
    if ($('.sidebar-sticky').length > 0) {
        functions.sticky_sidebar.init();
    }

    // $('.link-auth-open').click(() => {
    //     functions.auth.open()
    // })

    $(document).on('click', '[data-open-modal]', function() {
        let modalData = $(this).attr('data-open-modal');
        $('html').addClass('ovh');
        $('.modal').addClass('opened');
    });

    $('.modal').on('click', '.close', () => {
        $('html').removeClass('ovh');
        $('.modal').removeClass('opened');
        $('[data-modal]').removeClass('active');
    });

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(() => {});
});
