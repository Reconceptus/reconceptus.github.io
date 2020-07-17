const home_bg = function() {
    const homeCircle = $('.home_bg-video_shape--circle'),
        changeBox = $('.home_bg-change');

    let winScroll, winHeight, changeOffset;

    function changeCheck() {
        winScroll = $(window).scrollTop();
        winHeight = $(window).height();
        changeOffset = changeBox.offset().top;

        if (winScroll + winHeight > changeOffset) {
            homeCircle.addClass('small');
        } else {
            homeCircle.removeClass('small');
        }
    }

    changeCheck();
    $(window).scroll(function() {
        changeCheck();
    });
    $(window).resize(function() {
        changeCheck();
    });
};

module.exports = home_bg;
