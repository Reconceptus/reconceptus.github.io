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
