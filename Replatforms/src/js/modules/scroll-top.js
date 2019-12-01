const scroll_top = function() {
    const scroll_top_btn = document.querySelector('.footer_scroll-btn');
    scroll_top_btn.onclick = function() {
        $('body,html').animate({ scrollTop: 0 }, 300);
    };
};

module.exports = scroll_top;
