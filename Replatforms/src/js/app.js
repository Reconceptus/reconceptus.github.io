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
    text_box: require('./modules/text-box'),
    dropdown: require('./modules/dropdown'),
    markers: require('./modules/markers'),
    expander: require('./modules/expander'),
    listing_views: require('./modules/listing-views'),
    sticky_sidebar: require('./modules/sticky-sidebar'),
    sticky_cta: require('./modules/sticky-cta'),
    sticky_message: require('./modules/sticky-message'),
    contenteditable: require('./modules/contenteditable'),
    hasheditable: require('./modules/hasheditable'),
    gallery_carousel: require('./modules/gallery-carousel'),
    listing_carousel: require('./modules/listing-carousel'),
    articles_carousel: require('./modules/articles-carousel'),
    home_bg: require('./modules/home-bg'),
    validation: require('./modules/validation'),
    shifting_text: require('./modules/shifting-text'),
    input_number: require('./modules/input-number'),
    init: require('./modules/init'),
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

        $(document).on('click', '#toggle-translate', function() {
            $(this).toggleClass('active');
        });
        $(document).on('click', '.scroll-to-partnership_page', function() {
            let pageOffset = $('.partnership_page').offset().top;
            $('body,html').animate({ scrollTop: pageOffset + 'px' }, 'fast');
        });
        $(document).on('click', '.scroll-to-home_main', function() {
            let pageOffset = $('.home_page-main').offset().top;
            $('body,html').animate({ scrollTop: pageOffset + 120 + 'px' }, 'fast');
        });
    }

    /* --------------------------------- document load --------------------------------- */

    documentClick();
    getWindowSizes();

    functions.modal.init();
    functions.dropdown();
    functions.expander();

    functions.modal.checkForAlerts();

    if ($('.header').length > 0) {
        functions.header_shadow();
        functions.burger.init();
        functions.search.init();
    }
    if ($('#map').length > 0) {
        functions.markers();
    }
    if ($('.footer_scroll-btn').length > 0) {
        functions.scroll_top();
    }
    if ($('.pl-nav-scroll').length > 0) {
        functions.init.plNavScroll();
    }
    if ($('.pl-sidebar-scroll').length > 0) {
        functions.init.plSidebarScroll();
    }
    if ($('.listing_sidebar').length > 0) {
        functions.filter.init();
    }
    if ($('.listing_item-selectable').length > 0) {
        functions.listing_views();
    }
    if ($('.sidebar-sticky').length > 0) {
        const headerAllow = $('.sidebar-sticky').attr('data-header-ignore');
        functions.sticky_sidebar.init(headerAllow);
    }
    if ($('.chat_box').length > 0) {
        $('.chat_box-user').click(function() {
            $('#show_users').prop('checked', false);
            $('html, body').scrollTop('99999');
        });
        setTimeout(function() {
            $('html, body').scrollTop('99999');
        }, 300);
    }
    if ($('.cta-sticky-wrap').length > 0) {
        functions.sticky_cta.init();
    }
    if ($('.message-sticky-wrap').length > 0) {
        functions.sticky_message.init();
    }
    if ($('.contenteditable-box').length > 0) {
        functions.contenteditable.init();
    }
    if ($('.hasheditable-box').length > 0) {
        functions.hasheditable.init();
    }
    if ($('.text-box').length > 0) {
        functions.text_box.initText();
    }
    if ($('.faq-item--answer').length > 0) {
        functions.text_box.initFAQ();
    }
    if ($('.home_bg').length > 0) {
        functions.home_bg();
    }
    if ($('.shifting-box').length > 0) {
        functions.shifting_text();
    }
    if ($('input[type=number]').length > 0) {
        functions.input_number();
    }
    if ($('.profile_table-main').length > 0) {
        functions.init.tableWrap();
    }
    if ($('.key_benefits-input--field').length > 0) {
        $('.key_benefits-input--field').keyup(function(e) {
            let parent = $(this).closest('.has-text');
            if (e.which == 13) {
                if (parent.length > 0) {
                    parent.find('.key_benefits-input--enter').click();
                }
            }
        });
    }
    if ($('.draggable').length > 0) {
        $.getScript(
            'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js',
            function() {
                $('.draggable').on('click', '.kv-file-zoom', function(e) {
                    e.preventDefault;
                    let image = $(this)
                        .closest('.kv-preview-thumb')
                        .find('.kv-preview-data')
                        .attr('src');
                    $.fancybox.open({
                        src: image,
                    });
                });
            },
        );
    }

    $('.form-password--show').click(function() {
        let _parent = $(this).parent();
        _parent.toggleClass('show-password');
        if (_parent.hasClass('show-password')) {
            _parent.find('input').attr('type', 'text');
        } else {
            _parent.find('input').attr('type', 'password');
        }
    });

    if ($('link[href*=bootstrap]').length > 0) $('link[href*=bootstrap]')[0].disabled = true;
    if ($('link[href*=fileinput]').length > 0) $('link[href*=fileinput]')[0].disabled = true;

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(() => {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(e => {
        functions.header_shadow();
    });

    $('.preloader').fadeOut(400);
});