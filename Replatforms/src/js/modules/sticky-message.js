const $messageWrap = $('.message-sticky-wrap'),
    $message = $('.message-sticky');

const sticky_message = {
    selector: {
        message: $message,
        messageWrap: $messageWrap,
    },
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
        headerHeight: 0,
        breakpoint: 0, // 799
    },
    resetInners: function() {
        this.params.offsetTop = this.selector.messageWrap.offset().top;

        this.params.height = this.selector.message.outerHeight();
        this.params.width = this.selector.message.parent().width();
        this.params.headerHeight = 0;

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? this.selector.messageWrap.outerHeight()
                : this.selector.messageWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    setInners: function() {
        this.params.offsetTop = this.selector.messageWrap.offset().top;

        this.params.scrollTop = $(window).scrollTop();
        this.params.winHeight = $(window).height();
        this.params.height = this.selector.message.outerHeight();
        this.params.width = this.selector.message.parent().width();
        this.params.headerHeight = 0;

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint ? this.params.padding : 0;
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight =
            window.innerWidth > this.params.breakpoint
                ? this.selector.messageWrap.outerHeight()
                : this.selector.messageWrap.outerHeight() - 0.4 * window.innerWidth;
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
                this.selector.message
                    .removeClass('sticky')
                    .addClass('no-drops')
                    .css({
                        top: 0,
                        transform: 'translateY(' + this.params.maxMargin + 'px)',
                        width: this.params.width + 'px',
                    });
            } else {
                this.selector.message
                    .addClass('sticky')
                    .removeClass('no-drops')
                    .css({
                        // top: this.params.allowMargin + 'px',
                        width: this.params.width + 'px',
                        // transform: 'translateY(0)',
                    });
            }
        } else {
            this.selector.message.removeClass('sticky').attr('style', '');
        }
    },
    translate: function(event) {
        if (this.selector.message.length < 1) return false;
        if (this.selector.message.hasClass('sticky')) {
            if (event === 'add') {
                this.selector.message.addClass('temp-sticky').css({
                    transform:
                        'translateY(' + (this.params.marginTop - this.params.allowMargin) + 'px)',
                });
            } else {
                this.selector.message.removeClass('temp-sticky');
                this.resetInners();
                this.changeMargin();
            }
        } else if (this.selector.message.hasClass('no-drops')) {
            if (event === 'add') {
                this.selector.message.addClass('temp-sticky');
            } else {
                this.selector.message.removeClass('temp-sticky');
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
    init: function(refreshSelectors) {
        if (refreshSelectors) {
            this.selector.message = $('.message-sticky');
            this.selector.messageWrap = $('.message-sticky-wrap');
        }

        this.setInners();
        this.changeMargin();

        $(window).scroll(() => {
            if (this.selector.message.hasClass('temp-sticky')) return false;
            this.params.scrollTop = $(window).scrollTop();
            this.resetInners();
            this.changeMargin();
        });

        $(window).resize(() => {
            if (this.selector.message.hasClass('temp-sticky')) return false;
            this.params.winHeight = $(window).height();
            this.resetInners();
            this.changeMargin();
        });
    },
};

module.exports = sticky_message;
