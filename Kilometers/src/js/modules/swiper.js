const swiper = function() {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 8,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            767: {
                spaceBetween: 0,
            },
        },
    });
    const galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
};

module.exports = swiper;
