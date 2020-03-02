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
    }

    /* --------------------------------- document load --------------------------------- */

    documentClick();
    getWindowSizes();

    functions.modal.init();
    functions.dropdown();
    functions.expander();

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
        functions.text_box();
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
});
