const ovh = {
    add() {
        const scroll_top = window.pageYOffset || document.documentElement.scrollTop;

        setTimeout(() => {
            $('html').addClass('ovh');

            functions.sticky_sidebar.translate('add');

            $('body')
                .css('margin-top', `${-1 * scroll_top}px`)
                .attr('data-scroll', scroll_top);
        }, 50);
    },
    remove() {
        const scroll_top = $('body').attr('data-scroll');
        functions.sticky_sidebar.translate('remove');

        $('html').removeClass('ovh');
        $('body').attr({ style: '', 'data-scroll': '' });
        $(window).scrollTop(scroll_top);
    },
};

module.exports = ovh;
