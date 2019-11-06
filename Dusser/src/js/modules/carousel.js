const carousel = {
    initListingCarousel: function() {
        if ($('.listing-carousel').length > 0) {
            $('.listing-carousel').each(function() {
                const _this = $(this),
                    itemsCount = _this.find('.listing-item').length;

                _this.owlCarousel({
                    dots: false,
                    responsive: {
                        0: {
                            items: 1,
                            loop: itemsCount > 1 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        800: {
                            items: 4,
                            loop: itemsCount > 4 ? true : false,
                            nav: itemsCount > 1 ? true : false,
                        },
                        1024: {
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
