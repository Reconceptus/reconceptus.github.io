window.fn = {
    headerEvents: require('./modules/header-events'),
    expander: require('./modules/expander'),
    introCarousel: require('./modules/intro-carousel'),
    projectsCarousel: require('./modules/projects-carousel'),
    bannersCarousel: require('./modules/banners-carousel'),
    galleryCarousel: require('./modules/gallery-carousel'),
    textBox: require('./modules/text-box'),
};

const modules = [
    {
        selector: '.header',
        name: 'headerEvents',
    },
    {
        selector: '.expander',
        name: 'expander',
    },
    {
        selector: '.intro-carousel',
        name: 'introCarousel',
    },
    {
        selector: '.projects-carousel',
        name: 'projectsCarousel',
    },
    {
        selector: '.gallery-carousel',
        name: 'galleryCarousel',
    },
    {
        selector: '.banners-carousel',
        name: 'bannersCarousel',
    },
    {
        selector: '.text-box',
        name: 'textBox',
    },
];

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
}
