// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';
import './vendor/addToCart';

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
    table_expander: require('./modules/table-expander'),
    no_ui_slider: require('./modules/no-ui-slider'),
    gallery: require('./modules/gallery'),
    spinner: require('./modules/spinner'),
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

    window.initListingCarousel = function() {
        if ($('.listing-carousel').length > 0) {
            $('.listing-carousel').each(function() {
                const _this = $(this),
                    itemsCount = _this.find('.listing-item').length;

                _this.owlCarousel({
                    dots: false,
                    responsive: {
                        0: {
                            items: 1,
                            loop: itemsCount > 1 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        800: {
                            items: 4,
                            loop: itemsCount > 4 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        1024: {
                            items: 6,
                            loop: itemsCount > 6 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                    },
                });
            });
        }
    };

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
