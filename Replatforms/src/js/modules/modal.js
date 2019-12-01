const $modalBtn = $('[data-open-modal]'),
    $modal = $('.modal'),
    $modalClose = $('.modal .modal_close');

const modal = {
    modal: {
        data: '',
    },
    init: function() {
        $modalBtn.click(e => {
            e.preventDefault;
            this.close();
            this.modal.data = e.target.dataset.openModal;
            this.open();
        });
        $modalClose.click(e => {
            e.preventDefault;
            this.modal.data = '';
            this.close();
        });
    },
    open: function() {
        $('[data-modal="' + this.modal.data + '"]').addClass('current');
        functions.ovh.add();
        $modal.addClass('opened');
    },
    close: function() {
        functions.ovh.remove();
        $('[data-modal]').removeClass('current');
        $modal.removeClass('opened');
    },
};

module.exports = modal;
