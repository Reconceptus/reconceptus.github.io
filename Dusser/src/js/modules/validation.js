const validation = function() {
    $.validator.setDefaults({
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
    });
};

module.exports = validation;
