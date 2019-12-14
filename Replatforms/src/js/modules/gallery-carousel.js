const gallery_carousel = function() {
    const carousels = $('.gallery-carousel');

    carousels.each(function() {
        const carousel = $(this),
            itemsCount = carousel.find('.item').length;

        carousel.owlCarousel({
            dots: false,
            navText: ['', ''],
            navClass: ['arrow arrow-prev', 'arrow arrow-next'],
            items: 1,
            loop: itemsCount > 1 ? true : false,
            nav: itemsCount > 1 ? true : false,
        });

        let rotate = 0;

        carousel.on('click', '.arrow-next', function() {
            let _this = $(this);
            rotate += 45;
            _this.css('transform', 'rotate(' + rotate + 'deg)');
        });
    });
};

module.exports = gallery_carousel;
