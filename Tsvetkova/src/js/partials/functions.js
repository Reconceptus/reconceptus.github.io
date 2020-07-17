window.fn = {
    win: require('./modules/win'),
    introCarousel: require('./modules/intro-carousel'),
};

const modules = [
    {
        selector: 'main',
        name: 'win',
    },
    {
        selector: '.intro-carousel',
        name: 'introCarousel',
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
