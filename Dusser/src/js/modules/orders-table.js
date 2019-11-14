const $tableWrap = $('.orders-sticky-wrap'),
    $tableHead = $('.orders-sticky'),
    $divs = $('.orders_table-head--row > div'),
    $th = $('.orders_table-thead th');

const orders_table = {
    params: {
        heightChangingTime: 500,
        offsetTop: 0,
        wrapperHeight: 0,
        height: 0,
        scrollTop: 0,
        headerHeight: 0,
        marginTop: 0,
        maxMargin: 0,
    },
    resetInners: function() {
        this.params.offsetTop = $tableWrap.offset().top;
        this.params.wrapperHeight = $tableWrap.height();
        this.params.height = $tableHead.height();
        this.params.headerHeight = window.innerWidth > 1025 ? 0 : $('#header').height();
        for (let i = 0; i < $th.length; i++) {
            $divs.eq(i).width($th.eq(i).width());
        }
    },
    setInners: function() {
        this.params.scrollTop = $(window).scrollTop();
        let changing = setInterval(() => {
            this.resetInners();
        }, 1);
        setTimeout(() => {
            clearInterval(changing);
        }, this.params.heightChangingTime);
    },
    changeMargin: function() {
        $tableHead.removeClass('temp-sticky');
        if (this.params.offsetTop < this.params.scrollTop + this.params.headerHeight) {
            this.params.marginTop =
                this.params.scrollTop + this.params.headerHeight - this.params.offsetTop;
            this.params.maxMargin = this.params.wrapperHeight - this.params.height;

            if (this.params.marginTop + this.params.height > this.params.wrapperHeight) {
                $tableHead
                    .removeClass('sticky')
                    .addClass('no-drops')
                    .css({
                        top: 0,
                        transform: 'translateY(' + this.params.maxMargin + 'px)',
                    });
            } else {
                $tableHead
                    .addClass('sticky')
                    .removeClass('no-drops')
                    .css({
                        top: this.params.headerHeight + 'px',
                        transform: 'translateY(0)',
                    });
            }
        } else {
            $tableHead.removeClass('sticky').attr('style', '');
        }
    },
    translate: function(event) {
        if ($tableHead.length < 1) return false;
        if ($tableHead.hasClass('sticky') < 1) return false;
        if (event == 'add') {
            $tableHead.addClass('temp-sticky').css({
                transform:
                    'translateY(' + (this.params.marginTop - this.params.headerHeight) + 'px)',
            });
        }
    },
    init: function() {
        this.setInners();
        this.changeMargin();

        $(document).on('click', '.fn-expand-table-btn', () => {
            let changing = setInterval(() => {
                this.resetInners();
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

module.exports = orders_table;
