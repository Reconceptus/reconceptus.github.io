const $sidebarWrap = $('.sidebar-sticky-wrap'),
    $sidebar = $('.sidebar-sticky');

const sticky_sidebar = {
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
        headerHeight: 0,
        breakpoint: 0, // 799
    },
    resetInners: function() {
        this.params.offsetTop = $sidebarWrap.offset().top;

        this.params.height = $sidebar.outerHeight();
        this.params.width = $sidebar.parent().width();
        this.params.headerHeight = $('#header').outerHeight();

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? $sidebarWrap.outerHeight()
                : $sidebarWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    setInners: function() {
        this.params.offsetTop = $sidebarWrap.offset().top;

        this.params.scrollTop = $(window).scrollTop();
        this.params.height = $sidebar.outerHeight();
        this.params.width = $sidebar.parent().width();
        this.params.headerHeight = $('#header').outerHeight();

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? $sidebarWrap.outerHeight()
                : $sidebarWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    changeMargin: function() {
        if ($sidebar.hasClass('temp-sticky')) return false;
        // if (this.params.height > this.params.wrapperHeight) {
        //     $sidebar.removeClass('sticky').attr('style', '');
        //     return;
        // }
        if (this.params.offsetTop < this.params.scrollTop + this.params.allowMargin) {
            this.params.marginTop =
                this.params.scrollTop + this.params.allowMargin - this.params.offsetTop;
            this.params.maxMargin = this.params.wrapperHeight - this.params.height;

            if (this.params.marginTop + this.params.height > this.params.wrapperHeight) {
                $sidebar
                    .removeClass('sticky')
                    // .addClass('no-drops')
                    .css({
                        top: 0,
                        transform: 'translateY(' + this.params.maxMargin + 'px)',
                        width: this.params.width + 'px',
                    });
            } else {
                $sidebar
                    .addClass('sticky')
                    // .removeClass('no-drops')
                    .css({
                        top: this.params.allowMargin + 'px',
                        width: this.params.width + 'px',
                        transform: 'translateY(0)',
                    });
            }
        } else {
            $sidebar.removeClass('sticky').attr('style', '');
        }
    },
    translate: function(event) {
        if ($sidebar.length < 1) return false;
        if ($sidebar.hasClass('sticky') < 1) return false;
        if (event == 'add') {
            $sidebar.addClass('temp-sticky').css({
                transform:
                    'translateY(' + (this.params.marginTop - this.params.allowMargin) + 'px)',
            });
        } else {
            $sidebar.removeClass('temp-sticky');
        }
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
    init: function() {
        this.setInners();
        this.changeMargin();

        $(window).scroll(() => {
            this.params.scrollTop = $(window).scrollTop();
            this.changeMargin();
        });

        $(window).resize(() => {
            this.resetInners();
            this.changeMargin();
        });
    },
};

module.exports = sticky_sidebar;
