import fslightbox from 'fslightbox';
// https://fslightbox.com/
const lightbox = {
    data: {
        el: {
            galleryName: '[data-fslightbox-name]',
            galleryNameAttr: 'fslightboxName',
        },
        options: {},
    },
    init() {
        let galleries = document.querySelectorAll(this.data.el.galleryName);

        galleries.forEach(item => {
            let name = item.dataset[this.data.el.galleryNameAttr];
            fsLightboxInstances[name].props.onOpen = () => {
                this.slideTransformChecker(name);
            };
        });

        // fsLightboxInstances['gallery01'].props.onClose = () => {
        //
        // };
    },
    slideTransformChecker() {
        let slides = document.getElementsByClassName('fslightbox-source-outer'),
            btnNext = document.querySelector('.fslightbox-slide-btn-container-next');

        btnNext.addEventListener('mousedown', () => {
            for (let i = 0; i < slides.length; i++) {
                let currentTransform = slides[i].style.transform;
                if (currentTransform == 'translateX(0px)') {
                    if (i == slides.length - 1) {
                        let nextSlideTransform = slides[0].style.transform;
                        nextSlideTransform = nextSlideTransform.replace('-', '');
                        slides[0].style.transform = nextSlideTransform;
                    } else {
                        let nextSlideTransform = slides[i + 1].style.transform;
                        nextSlideTransform = nextSlideTransform.replace('-', '');
                        slides[i + 1].style.transform = nextSlideTransform;
                    }
                }
            }
        });
    },
};

module.exports = lightbox;
