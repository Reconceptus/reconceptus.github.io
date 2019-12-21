const $messageWrap = $('.message-sticky-wrap'),
    $message = $('.message-sticky');

const sticky_message = {
    params: {
        offsetTop: 0,
        wrapperHeight: 0,
        scrollTop: 0,
        winHeight: 0,
        height: 0,
        width: 0,
        heightChangingTime: 500,
        allowMargin: 0,
        padding: 0,
        allowPadding: 0,
        maxMargin: 0,
        headerIgnore: false,
        headerHeight: 0,
        breakpoint: 0, // 799
    },
    resetInners: function() {
        this.params.offsetTop = $messageWrap.offset().top;

        this.params.height = $message.outerHeight();
        this.params.width = $message.parent().width();
        this.params.headerHeight = 0;

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? $messageWrap.outerHeight()
                : $messageWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    setInners: function() {
        this.params.offsetTop = $messageWrap.offset().top;

        this.params.scrollTop = $(window).scrollTop();
        this.params.winHeight = $(window).height();
        this.params.height = $message.outerHeight();
        this.params.width = $message.parent().width();
        this.params.headerHeight = 0;

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? $messageWrap.outerHeight()
                : $messageWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    changeMargin: function() {
        if (
            this.params.offsetTop + this.params.wrapperHeight >
            this.params.scrollTop + this.params.winHeight
        ) {
            this.params.marginTop =
                this.params.scrollTop + this.params.allowMargin - this.params.offsetTop;
            this.params.maxMargin = this.params.wrapperHeight - this.params.height;

            if (this.params.marginTop + this.params.height > this.params.wrapperHeight) {
                $message
                    .removeClass('sticky')
                    .addClass('no-drops')
                    .css({
                        top: 0,
                        transform: 'translateY(' + this.params.maxMargin + 'px)',
                        width: this.params.width + 'px',
                    });
            } else {
                $message
                    .addClass('sticky')
                    .removeClass('no-drops')
                    .css({
                        // top: this.params.allowMargin + 'px',
                        width: this.params.width + 'px',
                        // transform: 'translateY(0)',
                    });
            }
        } else {
            $message.removeClass('sticky').attr('style', '');
        }
    },
    translate: function(event) {
        if ($message.length < 1) return false;
        if ($message.hasClass('sticky')) {
            if (event === 'add') {
                $message.addClass('temp-sticky').css({
                    transform:
                        'translateY(' + (this.params.marginTop - this.params.allowMargin) + 'px)',
                });
            } else {
                $message.removeClass('temp-sticky');
                this.resetInners();
                this.changeMargin();
            }
        } else if ($message.hasClass('no-drops')) {
            if (event === 'add') {
                $message.addClass('temp-sticky');
            } else {
                $message.removeClass('temp-sticky');
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
    init: function(headerIgnore) {
        this.params.headerIgnore = headerIgnore ? true : false;

        this.setInners();
        this.changeMargin();

        $(window).scroll(() => {
            if ($message.hasClass('temp-sticky')) return false;
            this.params.scrollTop = $(window).scrollTop();
            this.resetInners();
            this.changeMargin();
        });

        $(window).resize(() => {
            if ($message.hasClass('temp-sticky')) return false;
            this.params.winHeight = $(window).height();
            this.resetInners();
            this.changeMargin();
        });
    },
};

module.exports = sticky_message;
