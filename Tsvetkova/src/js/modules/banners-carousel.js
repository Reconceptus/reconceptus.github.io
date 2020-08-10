import Flickity from 'flickity';
import imagesLoaded from 'imagesLoaded';

const bannersCarousel = {
    data: {
        el: {
            selector: '.banners-carousel',
            wrapper: '.banners-carousel_wrapper',
            cellClassName: 'carousel-cell',
        },
        options: {
            accessibility: false,
            setGallerySize: false,
            freeScroll: true,
            wrapAround: true,
            draggable: false,
            cellAlign: 'left',
            adaptiveHeight: true,
            percentPosition: false,
            prevNextButtons: false,
            pauseAutoPlayOnHover: false,
            selectedAttraction: 0.01,
            autoPlay: 3000,
            pageDots: false,
        },
    },
    init() {
        const carouselBox = document.querySelector(this.data.el.selector);
        const carouselCells = carouselBox.getElementsByClassName(this.data.el.cellClassName);
        const carouselWrapper = document.querySelector(this.data.el.wrapper);

        let flkty,
            cellsLength = carouselCells.length,
            order = 1;

        imagesLoaded(carouselBox, () => {
            flkty = new Flickity(
                this.data.el.selector,
                Object.assign({}, this.data.options, {
                    on: {
                        ready() {
                            carouselCells[0].style.marginLeft = `${-1 *
                                carouselCells[0].offsetWidth}px`;
                            setTimeout(() => {
                                carouselCells[0].style.marginLeft = 0;
                            }, 3000);
                        },
                        change(index) {
                            const i = index == 0 ? cellsLength - 1 : index - 1;
                            order++;
                            carouselCells[i].style.order = order;
                            carouselCells[index].style.marginLeft = `${-1 *
                                carouselCells[index].offsetWidth}px`;
                            setTimeout(() => {
                                carouselCells[index].style.marginLeft = 0;
                            }, 3000);
                        },
                    },
                }),
            );

            flkty.on('pointerDown', () => {
                carouselWrapper.classList.add('pointered');
                setTimeout(() => {
                    flkty.playPlayer();
                    carouselWrapper.classList.remove('pointered');

                    const selectedCell = carouselBox.getElementsByClassName('is-selected')[0];
                    selectedCell.style.marginLeft = `${-1 * selectedCell.offsetWidth}px`;
                    setTimeout(() => {
                        selectedCell.style.marginLeft = 0;
                    }, 3000);
                }, 3000);
            });

            let cellsWidth = this.getCellsWidth(flkty.getCellElements()),
                wrapperWidth = this.getWrapperWidth(carouselWrapper);

            if (cellsWidth > wrapperWidth) {
                carouselWrapper.classList.remove('static-banners');
            } else {
                carouselWrapper.classList.add('static-banners');
            }

            window.addEventListener('resize', () => {
                cellsWidth = this.getCellsWidth(flkty.getCellElements());
                wrapperWidth = this.getWrapperWidth(carouselWrapper);

                if (cellsWidth > wrapperWidth) {
                    carouselWrapper.classList.remove('static-banners');
                } else {
                    carouselWrapper.classList.add('static-banners');
                }
            });
        });
    },
    getCellsWidth(cells) {
        let cellsWidth = 0;
        for (let i = 0; i < cells.length; i++) {
            cellsWidth += cells[i].offsetWidth;
        }
        return cellsWidth;
    },
    getWrapperWidth(wrapper) {
        return wrapper.offsetWidth;
    },
};

module.exports = bannersCarousel;
