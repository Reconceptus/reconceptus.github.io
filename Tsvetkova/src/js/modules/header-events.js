const headerEvents = {
    data: {
        el: {
            wrapper: document.getElementById('wrapper'),
            burger: document.getElementById('burger'),
            closeMenu: document.getElementById('closeMenu'),
        },
        isScroll: Boolean,
        minScrollTop: 120,
        prevScrollTop: 0,
        delta: 5,
    },
    init() {
        this.burger();

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
    burger() {
        this.data.el.burger.addEventListener('click', () => {
            this.data.el.wrapper.classList.add('menu-enabled');
        });
        this.data.el.closeMenu.addEventListener('click', () => {
            this.data.el.wrapper.classList.remove('menu-enabled');
        });
    },
    hasScrolled() {
        const scrollTop = window.pageYOffset;

        if (Math.abs(this.data.prevScrollTop - scrollTop) <= this.data.delta) return;

        if (scrollTop <= this.data.minScrollTop) {
            this.data.el.wrapper.classList.remove('simple-header');
        } else {
            this.data.el.wrapper.classList.add('simple-header');
        }

        this.data.prevScrollTop = scrollTop;
    },
};

module.exports = headerEvents;
