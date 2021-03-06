// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';

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
    ovh: require('./modules/ovh'),
    appearingSVG: require('./modules/appearing-svg'),
    contactPageScroll: require('./modules/contact-page-scroll'),
};

const modules = [
    {
        selector: 'body',
        name: 'ovh',
    },
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
    {
        selector: '.appearing-svg',
        name: 'appearingSVG',
    },
    {
        selector: '.contact-page_address',
        name: 'contactPageScroll',
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