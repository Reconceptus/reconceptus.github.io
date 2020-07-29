const headerScroll = {
    data: {
        el: {
            wrapper: document.getElementById('wrapper'),
        },
        isScroll: Boolean,
        minScrollTop: 120,
        prevScrollTop: 0,
        delta: 5,
    },
    init() {
        if (!document.documentElement.classList.contains('desktop')) return false;

        setInterval(() => {
            if (this.data.isScroll) {
                this.hasScrolled();
                this.data.isScroll = false;
            }
        }, 20);

        window.addEventListener('scroll', () => {
            this.data.isScroll = true;
        });
    },
    hasScrolled() {
        let scrollTop = window.pageYOffset;

        if (Math.abs(this.data.prevScrollTop - scrollTop) <= this.data.delta) return;

        if (scrollTop > this.data.prevScrollTop && scrollTop > this.data.minScrollTop) {
            this.data.el.wrapper.classList.add('simple-header');
        } else {
            this.data.el.wrapper.classList.remove('simple-header');
        }

        this.data.prevScrollTop = scrollTop;
    },
};

module.exports = headerScroll;
