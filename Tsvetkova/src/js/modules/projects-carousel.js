import Flickity from 'flickity';

const introCarousel = {
    data: {
        el: {
            selector: '.projects-carousel',
            cellClassName: 'carousel-cell',
            buttonClassName: 'flickity-prev-next-button',
        },
        options: {
            accessibility: false,
            contain: true,
            cellAlign: 'left',
            adaptiveHeight: true,
            percentPosition: true,
            prevNextButtons: true,
            pageDots: false,
        },
    },
    init() {
        const carouselBox = document.querySelector(this.data.el.selector),
            carouselCell = carouselBox.getElementsByClassName(this.data.el.cellClassName),
            buttonNext = carouselBox.getElementsByClassName(this.data.el.buttonClassName)[0];

        if (carouselCell.length > 1) {
            this.flkty();
        }
    },
    flkty() {
        var flkty = new Flickity(this.data.el.selector, this.data.options);
        flkty.on('change', function(index) {});
    },
};

module.exports = introCarousel;
