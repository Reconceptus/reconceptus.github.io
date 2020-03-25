const ovh = {
    add: function() {
        let scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        setTimeout(function() {
            $('html').addClass('ovh');
            $('body')
                .css('margin-top', -1 * scroll_top + 'px')
                .attr('data-scroll', scroll_top);
        }, 50);
    },
    remove: function() {
        let scroll_top = $('body').attr('data-scroll');

        $('html').removeClass('ovh');
        $('body').attr({ style: '', 'data-scroll': '' });
        $(window).scrollTop(scroll_top);
    },
};

module.exports = ovh;
