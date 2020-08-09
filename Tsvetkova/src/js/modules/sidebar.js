const sidebar = {
    data: {
        el: {
            sidebar: '.layout-aside',
            sharing: '.sharing',
        },
        options: {
            sharingHeight: null,
            sidebarHeight: null,
            sidebarOffset: null,
            winScrollTop: null,
            offsetDelta: 60,
        },
    },
    init() {
        let sidebar = document.querySelector(this.data.el.sidebar);
        let sharing = document.querySelector(this.data.el.sidebar + ' ' + this.data.el.sharing);
        if (sharing) {
            this.stickySharing(sidebar, sharing);
            window.addEventListener('resize', () => {
                this.stickySharing(sidebar, sharing);
            });
            window.addEventListener('scroll', () => {
                this.stickySharing(sidebar, sharing);
            });
        }
    },
    stickySharing(sidebar, sharing) {
        this.data.options.sidebarHeight = sidebar.offsetHeight;
        this.data.options.sharingHeight = sharing.offsetHeight;
        this.data.options.sidebarOffset = sidebar.offsetTop;
        this.data.options.winScrollTop = window.pageYOffset;
        console.log(this.data.options);
        if (
            this.data.options.winScrollTop + this.data.options.offsetDelta >
            this.data.options.sidebarOffset
        ) {
            if (
                this.data.options.winScrollTop +
                    this.data.options.offsetDelta +
                    this.data.options.sharingHeight >
                this.data.options.sidebarHeight + this.data.options.sidebarOffset
            ) {
                sidebar.classList.add('bottom-sharing');
                sidebar.classList.remove('sticky-sharing');
            } else {
                sidebar.classList.add('sticky-sharing');
                sidebar.classList.remove('bottom-sharing');
            }
        } else {
            sidebar.classList.remove('sticky-sharing', 'bottom-sharing');
        }
    },
};

module.exports = sidebar;
