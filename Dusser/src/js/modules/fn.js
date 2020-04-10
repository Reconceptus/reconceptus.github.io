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
    modal: function (data,content,settings,callback) {

        if(content.type == 'file'){
            $(".modal-section--box[data-modal="+data+"]")
                .load(content.file,callback);
        }
        if(content.type == 'code'){
            $(".modal-section--box[data-modal="+data+"]").html(content.code);
            setTimeout(()=>{
                callback();
            },100)
        }

    }
};

module.exports = fn;
