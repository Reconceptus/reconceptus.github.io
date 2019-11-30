let scroll_top;
const ovh = {
    add: function() {
        scroll_top = $(window).scrollTop();
        setTimeout(function() {
            $('html').addClass('ovh');
        }, 300);
    },
    remove: function() {
        $('html').removeClass('ovh');
        $(window).scrollTop(scroll_top);
    },
};

module.exports = ovh;
