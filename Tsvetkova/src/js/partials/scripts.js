document.addEventListener('DOMContentLoaded', () => {
    /* ------------------------------- modules ------------------------------- */

    modules.map(module => {
        !!document.querySelector(module.selector) ? fn[module.name].init() : '';
    });

    /* ----------------------------------- functions ----------------------------------- */

    fadeOut(document.getElementById('preloader'));
});
