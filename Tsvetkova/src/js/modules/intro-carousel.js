import Flickity from 'flickity';

const introCarousel = {
    data: {
        el: {
            selector: '.intro-carousel',
            cellClassName: 'carousel-cell',
        },
        options: {
            accessibility: false,
            setGallerySize: false,
            wrapAround: true,
            pageDots: true,
            draggable: true,
            percentPosition: true,
            prevNextButtons: false,
            pauseAutoPlayOnHover: false,
            selectedAttraction: 0.01,
            autoPlay: 8000,
        },
    },
    init() {
        const carouselBox = document.querySelector(this.data.el.selector),
            carouselCell = carouselBox.getElementsByClassName(this.data.el.cellClassName);

        if (carouselCell.length > 1) {
            this.flkty();
        }
    },
    flkty() {
        const flkty = new Flickity(this.data.el.selector, this.data.options);
        flkty.on('change', () => {
            flkty.playPlayer();
        });
    },
};

module.exports = introCarousel;
