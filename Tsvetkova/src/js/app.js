// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';
// import './vendor/flickity.pkgd';
// import './vendor/flickity-fade';

// variables
let scrollTop, winWidth, winHeight;

// functions
window.fn = {
    headerEvents: require('./modules/header-events'),
    expander: require('./modules/expander'),
    introCarousel: require('./modules/intro-carousel'),
    projectsCarousel: require('./modules/projects-carousel'),
    bannersCarousel: require('./modules/banners-carousel'),
    galleryCarousel: require('./modules/gallery-carousel'),
    textBox: require('./modules/text-box'),
    validation: require('./modules/validation'),
    sidebar: require('./modules/sidebar'),
    lightbox: require('./modules/lightbox'),
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
    {
        selector: '.custom-form',
        name: 'validation',
    },
    {
        selector: '.layout-aside',
        name: 'sidebar',
    },
    {
        selector: '[data-fslightbox]',
        name: 'lightbox',
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

// scripts
document.addEventListener('DOMContentLoaded', () => {
    /* ------------------------------- modules ------------------------------- */

    modules.map(module => {
        !!document.querySelector(module.selector) ? fn[module.name].init() : '';
    });

    /* ----------------------------------- functions ----------------------------------- */

    fadeOut(document.getElementById('preloader'));
});