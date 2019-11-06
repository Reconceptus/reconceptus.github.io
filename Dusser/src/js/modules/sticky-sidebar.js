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
        allowPadding: 8,
        maxMargin: 0,
        headerHeight: 0,
    },
    resetInners: function() {
        this.params.offsetTop = $sidebarWrap.offset().top;
        this.params.wrapperHeight = $sidebarWrap.height();
        this.params.height = $sidebar.height();
        this.params.width = $sidebar.parent().width();
        this.params.headerHeight = $('#header').height();

        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;
    },
    setInners: function() {
        this.params.offsetTop = $sidebarWrap.offset().top;
        this.params.wrapperHeight = $sidebarWrap.height();
        this.params.scrollTop = $(window).scrollTop();
        this.params.height = $sidebar.height();
        this.params.width = $sidebar.parent().width();
        this.params.headerHeight = $('#header').height();

        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;
    },
    changeMargin: function() {
        if (this.params.height > this.params.wrapperHeight) {
            $sidebar.removeClass('sticky').attr('style', '');
            return;
        }
        if (this.params.offsetTop < this.params.scrollTop + this.params.allowMargin) {
            this.params.marginTop =
                this.params.scrollTop + this.params.allowMargin - this.params.offsetTop;
            this.params.maxMargin = this.params.wrapperHeight - this.params.height;

            if (this.params.marginTop + this.params.height > this.params.wrapperHeight) {
                $sidebar.removeClass('sticky').css({
                    top: 0,
                    transform: 'translateY(' + this.params.maxMargin + 'px)',
                    width: this.params.width + 'px',
                });
            } else {
                $sidebar.addClass('sticky').css({
                    top: this.params.allowMargin + 'px',
                    width: this.params.width + 'px',
                });
            }
        } else {
            $sidebar.removeClass('sticky').attr('style', '');
        }
    },
    init: function() {
        this.setInners();
        this.changeMargin();

        $(document).on('click', '.fn-expand-btn', () => {
            let changing = setInterval(() => {
                this.params.height = $sidebar.height();
                this.changeMargin();
            }, 1);
            setTimeout(() => {
                clearInterval(changing);
            }, this.params.heightChangingTime);
        });

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
