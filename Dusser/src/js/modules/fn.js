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
    },
    modal: function (data,file,settings,callback) {
        $(".modal-section--box[data-modal="+data+"]")
            .load(file,callback);
    }
};

module.exports = fn;
