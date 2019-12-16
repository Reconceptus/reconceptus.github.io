const articles_carousel = function() {
    const carousel = $('.analytic_carousel'),
        itemsCount = carousel.find('.item').length;

    carousel.owlCarousel({
        dots: false,
        navText: ['', ''],
        margin: 64,
        navClass: ['arrow arrow-prev', 'arrow arrow-next'],
        responsive: {
            0: {
                items: 1,
                loop: itemsCount > 1 ? true : false,
                nav: itemsCount > 1 ? true : false,
            },
            600: {
                items: 2,
                loop: itemsCount > 2 ? true : false,
                nav: itemsCount > 1 ? true : false,
            },
            1025: {
                items: 3,
                loop: itemsCount > 3 ? true : false,
                nav: itemsCount > 1 ? true : false,
            },
            1281: {
                items: 4,
                loop: itemsCount > 4 ? true : false,
                nav: itemsCount > 1 ? true : false,
            },
        },
    });
};

module.exports = articles_carousel;
