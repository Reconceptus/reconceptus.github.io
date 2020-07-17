const init = {
    plNavScroll: function() {
        if ($('html').hasClass('desktop')) {
            $('.pl-nav-scroll').each(function() {
                let _this = $(this);
                _this.mCustomScrollbar({ theme: 'light' });

                if (_this.hasClass('modal_box-main--overflow')) {
                    $(window).resize(function() {
                        _this.mCustomScrollbar('update');
                    });
                }
            });
        }
    },
    plSidebarScroll: function() {
        if ($('html').hasClass('desktop')) {
            $('.pl-sidebar-scroll').each(function() {
                let _this = $(this);
                _this.mCustomScrollbar({ theme: 'dark-3' });

                $(window).resize(function() {
                    _this.mCustomScrollbar('update');
                });
            });
        }
    },
    chatBox: function() {
        const _headerAllow = $('.sidebar-sticky').attr('data-header-ignore');
        functions.sticky_sidebar.init(_headerAllow, true);
        this.plSidebarScroll();
        functions.sticky_message.init(true);
        $('html, body').scrollTop('99999');
    },
    tableWrap: function() {
        $('.profile_table-main').each(function() {
            $(this)
                .find('table')
                .wrap('<div class="profile_table-main--auto"></div>');
        });
    },
};

module.exports = init;
