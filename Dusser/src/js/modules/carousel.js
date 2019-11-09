const carousel = {
    initListingCarousel: function() {
        if ($('.listing-carousel').length > 0) {
            $('.listing-carousel').each(function() {
                const _this = $(this),
                    itemsCount = _this.find('.listing-item').length;

                _this.owlCarousel({
                    dots: false,
                    navText: ['', ''],
                    navClass: ['arrow arrow-prev owl-prev', 'arrow arrow-next owl-next'],
                    responsive: {
                        0: {
                            items: 1,
                            loop: itemsCount > 1 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        601: {
                            items: 3,
                            loop: itemsCount > 3 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        800: {
                            items: 4,
                            loop: itemsCount > 4 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        1025: {
                            items: 5,
                            loop: itemsCount > 5 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        1281: {
                            items: 6,
                            loop: itemsCount > 6 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                    },
                });
            });
        }
    },
};

module.exports = carousel;
