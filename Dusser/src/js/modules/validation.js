const validation = {
    defaults: {
        onfocusout: false,
        ignore: '.ignore',
        success: 'valid',
        errorClass: 'invalid',
        highlight: function(element, errorClass, validClass) {
            $(element)
                .closest('.form-field')
                .addClass(errorClass)
                .removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element)
                .closest('.form-field')
                .addClass(validClass)
                .removeClass(errorClass);
        },
    },
    setDefaults: function() {
        $.validator.setDefaults(this.defaults);
    },
};

module.exports = validation;
