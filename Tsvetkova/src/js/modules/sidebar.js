const sidebar = {
    data: {
        el: {
            sidebar: '.layout-aside',
            projectSection: '.project-section',
            articleSection: '.article-page',
            sharingOffsetBox: 'sharingOffsetBox',
            sharing: '.sharing',
        },
        options: {
            sharingHeight: null,
            sidebarHeight: null,
            sidebarOffset: null,
            articleOffset: null,
            winScrollTop: null,
            offsetDelta: 60,
        },
    },
    init() {
        const sidebar = document.querySelector(this.data.el.sidebar);
        const project = document.querySelector(this.data.el.projectSection);
        const sharing = document.querySelector(`${this.data.el.sidebar} ${this.data.el.sharing}`);
        const sharingOffsetBox = document.getElementById(this.data.el.sharingOffsetBox);

        if (sharing) {
            if (project) {
                const articleContent = document.querySelector(
                    `${this.data.el.projectSection} ${this.data.el.articleSection}`,
                );

                this.stickySharingInProject(sidebar, sharing, articleContent, sharingOffsetBox);
                window.addEventListener('resize', () => {
                    this.stickySharingInProject(sidebar, sharing, articleContent, sharingOffsetBox);
                });
                window.addEventListener('scroll', () => {
                    this.stickySharingInProject(sidebar, sharing, articleContent, sharingOffsetBox);
                });
            } else {
                this.stickySharing(sidebar, sharing);
                window.addEventListener('resize', () => {
                    this.stickySharing(sidebar, sharing);
                });
                window.addEventListener('scroll', () => {
                    this.stickySharing(sidebar, sharing);
                });
            }
        }
    },
    stickySharing(sidebar, sharing) {
        this.data.options.sidebarHeight = sidebar.offsetHeight;
        this.data.options.sharingHeight = sharing.offsetHeight;
        this.data.options.sidebarOffset = sidebar.offsetTop;
        this.data.options.winScrollTop = window.pageYOffset;

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
    stickySharingInProject(sidebar, sharing, article, offsetBox) {
        this.data.options.sidebarHeight = sidebar.offsetHeight;
        this.data.options.sharingHeight = sharing.offsetHeight;
        this.data.options.articleOffset = article.offsetTop;
        this.data.options.sidebarOffset = sidebar.offsetTop;
        this.data.options.winScrollTop = window.pageYOffset;

        offsetBox.style.height =
            this.data.options.articleOffset - this.data.options.offsetDelta + 'px';

        if (
            this.data.options.winScrollTop + this.data.options.offsetDelta >
            this.data.options.articleOffset
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
