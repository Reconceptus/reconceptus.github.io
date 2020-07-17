const validation = {
    defaults: {
        onfocusout: false,
        ignore: '.ignore',
        errorClass: 'invalid',
        validClass: 'valid',
        highlight: function(element, errorClass, validClass) {
            $(element)
                .closest('.form-field--element')
                .addClass(errorClass)
                .removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element)
                .closest('.form-field--element')
                .addClass(validClass)
                .removeClass(errorClass);
        },
        errorPlacement: function(error, element) {
            error.addClass('form-field--error');
            error.insertAfter(element);
        },
    },
    setDefaults: function() {
        $.validator.setDefaults(this.defaults);
    },
};

module.exports = validation;
