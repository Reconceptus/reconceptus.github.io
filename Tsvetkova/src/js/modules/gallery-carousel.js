import Flickity from 'flickity';

const galleryCarousel = {
    data: {
        el: {
            selector: 'gallery-carousel',
            cellClassName: 'carousel-cell',
            buttonClassName: 'flickity-prev-next-button',
        },
        options: {
            accessibility: false,
            setGallerySize: false,
            wrapAround: true,
            draggable: true,
            percentPosition: true,
            prevNextButtons: true,
            pauseAutoPlayOnHover: false,
            pageDots: false,
        },
    },
    init() {
        const carouselBox = document.getElementsByClassName(this.data.el.selector);

        for (let i = 0; i < carouselBox.length; i++) {
            const carouselCell = carouselBox[i].getElementsByClassName(this.data.el.cellClassName),
                carouselClass = 'gc-' + i;
            carouselBox[i].classList.add(carouselClass);
            // const buttonNext = carouselBox[i].getElementsByClassName(this.data.el.buttonClassName)[0];
            if (carouselCell.length > 1) {
                this.flkty(carouselClass);
            }
        }
    },
    flkty(selector) {
        selector = '.' + selector;
        const flkty = new Flickity(selector, this.data.options);
        flkty.on('change', index => {});
    },
};

module.exports = galleryCarousel;
