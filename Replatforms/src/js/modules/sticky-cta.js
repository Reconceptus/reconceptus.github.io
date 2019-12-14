const $ctaWrap = $('.cta-sticky-wrap'),
    $cta = $('.cta-sticky');

const sticky_cta = {
    params: {
        offsetTop: 0,
        wrapperHeight: 0,
        marginTop: 0,
        height: 0,
        width: 0,
        heightChangingTime: 500,
        scrollTop: 0,
        allowMargin: 0,
        padding: [48, 32],
        allowPadding: 0,
        maxMargin: 0,
        headerHeight: 0,
        breakpoint: 799, // 799
    },
    resetInners: function() {
        this.params.offsetTop = $ctaWrap.offset().top;

        this.params.height = $cta.outerHeight();
        this.params.width = $cta.parent().width();

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint
                ? this.params.padding[0]
                : this.params.padding[1];
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight = $ctaWrap.outerHeight();
        // window.innerWidth > this.params.breakpoint
        //     ? $ctaWrap.outerHeight()
        //     : $ctaWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    setInners: function() {
        this.params.offsetTop = $ctaWrap.offset().top;

        this.params.scrollTop = $(window).scrollTop();
        this.params.height = $cta.outerHeight();
        this.params.width = $cta.parent().width();

        this.params.allowPadding =
            window.innerWidth > this.params.breakpoint
                ? this.params.padding[0]
                : this.params.padding[1];
        this.params.allowMargin = this.params.headerHeight + this.params.allowPadding;

        this.params.wrapperHeight = $ctaWrap.outerHeight();
        // window.innerWidth > this.params.breakpoint
        //     ? $ctaWrap.outerHeight()
        //     : $ctaWrap.outerHeight() - 0.4 * window.innerWidth;
    },
    changeMargin: function() {
        if (this.params.offsetTop < this.params.scrollTop + this.params.allowMargin) {
            this.params.marginTop =
                this.params.scrollTop + this.params.allowMargin - this.params.offsetTop;
            this.params.maxMargin = this.params.wrapperHeight - this.params.height;

            if (this.params.marginTop + this.params.height > this.params.wrapperHeight) {
                $cta.removeClass('sticky')
                    .addClass('no-drops')
                    .css({
                        top: 0,
                        transform: 'translateY(' + this.params.maxMargin + 'px)',
                        // width: this.params.width + 'px',
                    });
            } else {
                $cta.addClass('sticky')
                    .removeClass('no-drops')
                    .css({
                        top: this.params.allowMargin + 'px',
                        // width: this.params.width + 'px',
                        transform: 'translateY(0)',
                    });
            }
        } else {
            $cta.removeClass('sticky').attr('style', '');
        }
    },
    translate: function(event) {
        if ($cta.length < 1) return false;
        if ($cta.hasClass('sticky')) {
            if (event === 'add') {
                $cta.addClass('temp-sticky').css({
                    transform:
                        'translateY(' + (this.params.marginTop - this.params.allowMargin) + 'px)',
                });
            } else {
                $cta.removeClass('temp-sticky');
                this.resetInners();
                this.changeMargin();
            }
        } else if ($cta.hasClass('no-drops')) {
            if (event === 'add') {
                $cta.addClass('temp-sticky');
            } else {
                $cta.removeClass('temp-sticky');
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
    init: function() {
        this.setInners();
        this.changeMargin();

        $(window).scroll(() => {
            if ($cta.hasClass('temp-sticky')) return false;
            this.params.scrollTop = $(window).scrollTop();
            this.resetInners();
            this.changeMargin();
        });

        $(window).resize(() => {
            if ($cta.hasClass('temp-sticky')) return false;
            this.resetInners();
            this.changeMargin();
        });
    },
};

module.exports = sticky_cta;
