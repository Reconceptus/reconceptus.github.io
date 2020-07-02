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
                $header.removeClass('search-enabled');
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
    if ($('.sb-scroll').length > 0) {
        if ($('html').hasClass('desktop')) {
            $('.sb-scroll').each(function() {
                $(this).mCustomScrollbar({ theme: 'minimal' });
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
    if ($('#filter-selector').length > 0) {
        functions.filter_selector();
    }


    $('.show-auth-menu').click(function(e) {
        if($(window).width() < 1024){
            e.preventDefault;
            $('.header-profile--auth').toggleClass('is-active')
        }
    });
    $('.header-language--selected').click(function(e) {
        $('.header-currency').removeClass('is-active')
        if($(window).width() < 1024){
            e.preventDefault;
            $('.header-language').toggleClass('is-active')
        }
    });
    $('.header-currency--selected').click(function(e) {
        $('.header-language').removeClass('is-active')
        if($(window).width() < 1024){
            e.preventDefault;
            $('.header-currency').toggleClass('is-active')
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
        $header.addClass('search-enabled');
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


// OPEN ALERT
// functions.alert.open('hello world', 'error', 'info');

// OPEN POPUP
/*
functions.popup('hello world', 'description',
    [
        {
            title: 'agree',
            class: 'btn btn-red btn--md',
            fn: function () {
                alert('hello')
            }
        },
        {
            title: 'close',
            class: 'btn btn-red btn--md',
            fn: function () {
                functions.fn.closeModal();
            }
        }
    ]
);
*/

// OPEN MODAL
/*
functions.fn.modal('catalog-item',
    {type: 'file', file: 'modal-catalog-item.html'},
    {},
    function () {
        functions.gallery("[data-modal='catalog-item']");
        functions.spinner.apply($('[data-modal="catalog-item"] .spinner'));
    }
);

OR

functions.fn.modal('catalog-item',
    {type: 'code', code: '<div class="modal-container content content--md"></div>'},
    {},
    function () {
        alert('hello')
    }
);
*/
