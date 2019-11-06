const validation = {
    defaults: {
        onfocusout: false,
        ignore: '.ignore',
        errorClass: 'invalid',
        highlight: function(element, errorClass) {
            $(element)
                .closest('.form-field')
                .addClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element)
                .closest('.form-field')
                .removeClass(errorClass);
        },
        errorPlacement: $.noop,
    },
    setDefaults: function() {
        $.validator.setDefaults(this.defaults);
    },
};

module.exports = validation;
