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

    let siteFont = 14; // basic html font-size

    documentClick();
    getWindowSizes();
    functions.burger();
    functions.accessibility(siteFont);

    if ($('[data-fancybox="gallery"]').length > 0) {
        plugins.fancybox();
    }
    if ($('.offer-gallery').length > 0) {
        plugins.swiper();
    }
    if ($('.contact-map').length > 0) {
        functions.contacts();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(() => {});
});
