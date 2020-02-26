const $modalBtn = $('[data-open-modal]'),
    $modal = $('.modal'),
    $modalClose = $('.modal .modal_close');

const modal = {
    modal: {
        data: '',
        isOpened: false,
        video: '',
    },
    init: function() {
        $modalBtn.click(e => {
            e.preventDefault;
            // this.close();
            this.modal.data = e.target.dataset.openModal;
            this.modal.video = e.target.dataset.videoSrc;
            if (this.modal.isOpened) {
                this.reopen();
            } else {
                this.open();
            }
        });
        $modalClose.click(e => {
            e.preventDefault;

            if (this.modal.data == 'video') {
                let videoBox = $('[data-modal="' + this.modal.data + '"]').find(
                    '.modal_box-main--video',
                );
                videoBox.html('');
            }

            this.modal.data = '';
            this.close();
        });
    },
    open: function() {
        if (this.modal.data == 'video') {
            let videoBox = $('[data-modal="' + this.modal.data + '"]').find(
                '.modal_box-main--video',
            );
            videoBox.html(
                '<iframe frameborder="0" src="https://www.youtube.com/embed/' +
                    this.modal.video +
                    '?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"></iframe>',
            );
        }

        $('[data-modal="' + this.modal.data + '"]').addClass('visible');
        $('[data-modal="' + this.modal.data + '"]').addClass('current');
        functions.ovh.add();
        $modal.addClass('opened');
        this.modal.isOpened = true;
    },
    handleOpen: function(attr) {
        this.modal.data = attr;
        if (this.modal.isOpened) {
            this.reopen();
        } else {
            this.open();
        }
    },
    handleClose: function() {
        this.modal.data = '';
        this.close();
    },
    custom: function(attr, type, data) {
        this.modal.data = attr;
        let titleIcon = '';
        switch (type) {
            case 'success':
                titleIcon = '<svg><use xlink:href="#icon-check"/></svg>';
                break;
            case 'warning':
                titleIcon = '<svg><use xlink:href="#icon-warning"/></svg>';
                break;
        }

        let _modal = $('[data-modal="' + this.modal.data + '"]');
        _modal.find('.popup_box').addClass(type);
        _modal
            .find('.title-icon')
            .attr('data-title-icon', type)
            .html(titleIcon);
        _modal.find('.title-text').text(data.title);
        _modal.find('.popup_box-main--text').text(data.text);
        _modal.find('.popup_box-main--buttons').html('');

        if (!!data.buttons) {
            data.buttons.forEach(function(item) {
                let btn = document.createElement('button');
                $(btn).text(item.value);
                switch (item.style) {
                    case 'link':
                        $(btn).addClass('link_simple');
                        break;
                    case 'button':
                        $(btn).addClass('btn btn--orange btn--xs');
                        break;
                }
                $(btn).click(item.callback);

                _modal.find('.popup_box-main--buttons').append(btn);
            });
        }

        this.open();
    },
    info: function(attr, data) {
        this.modal.data = attr;

        let _modal = $('[data-modal="' + this.modal.data + '"]');

        _modal.find('.modal_box-main--title').text(data.title);
        _modal.find('.modal_box-main--text').text(data.text);
        _modal.find('.modal_box-main--cta').html('');

        if (!!data.buttons) {
            data.buttons.forEach(function(item) {
                let btn = document.createElement('button');
                $(btn).text(item.value);
                switch (item.style) {
                    case 'link':
                        $(btn).addClass('link_simple');
                        break;
                    case 'button':
                        $(btn).addClass('btn btn--orange btn--xs');
                        break;
                }
                $(btn).click(item.callback);

                _modal.find('.modal_box-main--cta').append(btn);
            });
        }

        this.open();
    },
    reopen: function() {
        $('[data-modal]').removeClass('current');
        setTimeout(() => {
            $('[data-modal]').removeClass('visible');
            $('[data-modal="' + this.modal.data + '"]').addClass('visible');
        }, 200);

        setTimeout(() => {
            $('[data-modal="' + this.modal.data + '"]').addClass('current');
        }, 250);
    },
    close: function() {
        functions.ovh.remove();
        $('[data-modal]').removeClass('current visible');
        $modal.removeClass('opened');
        this.modal.isOpened = false;
    },
    show: function(dataModal) {
        this.modal.data = dataModal;
        if (this.modal.isOpened) {
            this.reopen();
        } else {
            this.open();
        }
    },
};

module.exports = modal;
