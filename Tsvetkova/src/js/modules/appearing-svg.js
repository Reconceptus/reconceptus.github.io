const appearingSVG = {
    data: {
        el: {
            svgClass: 'appearing-svg',
        },
        images: [],
        scrollTop: 0,
    },
    init() {
        const allSVG = document.getElementsByClassName(this.data.el.svgClass);
        for (let i = 0; i < allSVG.length; i++) {
            let svgOffset = 0;

            svgOffset = this.getElementOffsetTop(allSVG[i]);
            if (svgOffset - 0.85 * window.innerHeight <= this.data.scrollTop) {
                allSVG[i].classList.add('active-svg');
            }

            window.addEventListener('scroll', () => {
                svgOffset = this.getElementOffsetTop(allSVG[i]);
                if (svgOffset - 0.85 * window.innerHeight <= this.data.scrollTop) {
                    allSVG[i].classList.add('active-svg');
                } else {
                    // allSVG[i].classList.remove('active')
                }
            });
        }
    },
    getElementOffsetTop(el) {
        const rect = el.getBoundingClientRect();
        this.data.scrollTop = window.pageYOffset;

        return rect.top + window.pageYOffset;
    },
};

module.exports = appearingSVG;
