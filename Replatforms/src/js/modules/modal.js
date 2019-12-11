const $modalBtn = $('[data-open-modal]'),
    $modal = $('.modal'),
    $modalClose = $('.modal .modal_close');

const modal = {
    modal: {
        data: '',
        isOpened: false,
    },
    init: function() {
        $modalBtn.click(e => {
            e.preventDefault;
            // this.close();
            this.modal.data = e.target.dataset.openModal;
            if (this.modal.isOpened) {
                this.reopen();
            } else {
                this.open();
            }
        });
        $modalClose.click(e => {
            e.preventDefault;
            this.modal.data = '';
            this.close();
        });
    },
    open: function() {
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
