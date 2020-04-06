const fn = {
    closeModal: function() {
        functions.ovh.remove();
        $('.modal').removeClass('opened');
        $('[data-modal]').removeClass('active');
    },
    openModal: function (data) {
        $('[data-modal=' + data + ']').addClass('active');
        functions.ovh.add();
        $('.modal').addClass('opened');
    }
};

module.exports = fn;
