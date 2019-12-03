let scroll_top;

function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

const ovh = {
    add: function() {
        scroll_top = $(window).scrollTop();
        setTimeout(function() {
            // $('html').addClass('ovh');
            disableScroll();
        }, 300);
    },
    remove: function() {
        // $('html').removeClass('ovh');
        enableScroll();
        $(window).scrollTop(scroll_top);
    },
};

module.exports = ovh;
