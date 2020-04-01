const parallax = function() {

    function parallax(slider) {
        var yPos = -($(window).scrollTop() / $(slider).data('speed'));

        var coords = 'center calc(45% + '+ yPos + 'px)';

        $(slider).css({ backgroundPosition: coords });
    }

    $('[data-parallax]').each(function () {
        let _this = $(this);

        $(window).scroll(function () {
            parallax(_this);
        });

    })
};

module.exports = parallax;
