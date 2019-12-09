let header_shadow = function() {
    let currentScrollTop = $(window).scrollTop();
    currentScrollTop > 0 ? $('#header').addClass('scrolled') : $('#header').removeClass('scrolled');
};

module.exports = header_shadow;
