const $sidebarWrap = $('.sidebar-sticky-wrap'),
    $sidebar = $('.sidebar-sticky');

const sticky_sidebar = {
    selector: {
        sidebar: $sidebar,
        sidebarWrap: $sidebarWrap,
    },
    params: {
        offsetTop: 0,
        wrapperHeight: 0,
        marginTop: 0,
        height: 0,
        width: 0,
        heightChangingTime: 500,
        scrollTop: 0,
        allowMargin: 0,
        padding: 48,
        allowPadding: 0,
        maxMargin: 0,
        headerIgnore: false,
        headerHeight: 0,
        breakpoint: 0, // 799
    },
    resetInners: function() {
        this.params.offsetTop = this.selector.sidebarWrap.offset().top;

        this.params.height = this.selector.sidebar.outerHeight();
        this.params.width = this.selector.sidebar.parent().width();
        this.params.headerHeight = this.params.headerIgnore ? 0 : $('#header').outerHeight();

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? this.selector.sidebarWrap.outerHeight()
                : this.selector.sidebarWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    setInners: function() {
        this.params.offsetTop = this.selector.sidebarWrap.offset().top;

        this.params.scrollTop = $(window).scrollTop();
        this.params.height = this.selector.sidebar.outerHeight();
        this.params.width = this.selector.sidebar.parent().width();
        this.params.headerHeight = this.params.headerIgnore ? 0 : $('#header').outerHeight();

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? this.selector.sidebarWrap.outerHeight()
                : this.selector.sidebarWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    changeMargin: function() {
        // if (this.params.height > this.params.wrapperHeight) {
        //     $sidebar.removeClass('sticky').attr('style', '');
        //     return;
        // }
        if (this.params.offsetTop < this.params.scrollTop + this.params.allowMargin) {
            this.params.marginTop =
                this.params.scrollTop + this.params.allowMargin - this.params.offsetTop;
            this.params.maxMargin = this.params.wrapperHeight - this.params.height;

            if (this.params.marginTop + this.params.height > this.params.wrapperHeight) {
                this.selector.sidebar
                    .removeClass('sticky')
                    .addClass('no-drops')
                    .css({
                        top: 0,
                        transform: 'translateY(' + this.params.maxMargin + 'px)',
                        width: this.params.width + 'px',
                    });
            } else {
                this.selector.sidebar
                    .addClass('sticky')
                    .removeClass('no-drops')
                    .css({
                        top: this.params.allowMargin + 'px',
                        width: this.params.width + 'px',
                        transform: 'translateY(0)',
                    });
            }
        } else {
            this.selector.sidebar.removeClass('sticky').attr('style', '');
        }
    },
    translate: function(event) {
        if (this.selector.sidebar.length < 1) return false;
        if (this.selector.sidebar.hasClass('sticky')) {
            if (event === 'add') {
                this.selector.sidebar.addClass('temp-sticky').css({
                    transform:
                        'translateY(' + (this.params.marginTop - this.params.allowMargin) + 'px)',
                });
            } else {
                this.selector.sidebar.removeClass('temp-sticky');
                this.resetInners();
                this.changeMargin();
            }
        } else if (this.selector.sidebar.hasClass('no-drops')) {
            if (event === 'add') {
                this.selector.sidebar.addClass('temp-sticky');
            } else {
                this.selector.sidebar.removeClass('temp-sticky');
                this.resetInners();
                this.changeMargin();
            }
        } else return false;
    },
    reCalculate: function() {
        let changing = setInterval(() => {
            this.resetInners();
            this.changeMargin();
        }, 1);
        setTimeout(() => {
            clearInterval(changing);
        }, this.params.heightChangingTime);
    },
    init: function(headerIgnore, refreshSelectors) {
        if (refreshSelectors) {
            this.selector.sidebar = $('.sidebar-sticky');
            this.selector.sidebarWrap = $('.sidebar-sticky-wrap');
        }

        this.params.headerIgnore = headerIgnore ? true : false;

        this.setInners();
        this.changeMargin();

        $(window).scroll(() => {
            if (this.selector.sidebar.hasClass('temp-sticky')) return false;
            this.params.scrollTop = $(window).scrollTop();
            this.resetInners();
            this.changeMargin();
        });

        $(window).resize(() => {
            if (this.selector.sidebar.hasClass('temp-sticky')) return false;
            this.resetInners();
            this.changeMargin();
        });
    },
};

module.exports = sticky_sidebar;
