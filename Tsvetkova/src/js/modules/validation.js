import validate from 'validate.js';
// source: view-source:https://validatejs.org/examples.html
const validation = {
    data: {
        el: {
            selector: '.gallery-carousel',
            cellClassName: 'carousel-cell',
            buttonClassName: 'flickity-prev-next-button',
        },
        options: {
            accessibility: false,
            setGallerySize: false,
            wrapAround: true,
            draggable: false,
            percentPosition: true,
            prevNextButtons: true,
            pauseAutoPlayOnHover: false,
            pageDots: false,
        },
    },
    init() {
        let _this = this;

        window.fn.validate = function(form, params, callback) {
            let Form = document.querySelector(form);
            Form.addEventListener('submit', function(ev) {
                ev.preventDefault();
                _this.handleFormSubmit(Form, params, callback);
            });

            let inputs = Form.querySelectorAll('input, textarea, select');
            for (let i = 0; i < inputs.length; ++i) {
                inputs.item(i).addEventListener('change', function(ev) {
                    var errors = validate(Form, params) || {};
                    _this.showErrorsForInput(this, errors[this.name]);
                });
            }
        };

        var constraints = {
            email: {
                // Email is required
                presence: true,
                // and must be an email (duh)
                email: true,
            },
            password: {
                // Password is also required
                presence: true,
                // And must be at least 5 characters long
                length: {
                    minimum: 5,
                },
            },
            'confirm-password': {
                // You need to confirm your password
                presence: true,
                // and it needs to be equal to the other password
                equality: {
                    attribute: 'password',
                    message: '^The passwords does not match',
                },
            },
            login: {
                // You need to pick a username too
                presence: true,
                // And it must be between 3 and 20 characters long
                length: {
                    minimum: 3,
                    maximum: 20,
                },
                format: {
                    // We don't allow anything that a-z and 0-9
                    pattern: '[a-z0-9]+',
                    // but we don't care if the username is uppercase or lowercase
                    flags: 'i',
                    message: 'can only contain a-z and 0-9',
                },
            },
        };
    },
    handleFormSubmit(form, params, callback) {
        var errors = validate(form, params);
        if (!errors) {
            if (callback) {
                return callback;
            } else {
                form.submit();
            }
        }
        form.querySelectorAll('input[name], select[name]').forEach(item => {
            this.showErrorsForInput(item, errors && errors[item.name]);
        });
    },
    showErrorsForInput(input, errors) {
        let formGroup = input.parentNode;
        this.resetFormGroup(formGroup);
        if (errors) {
            formGroup.classList.add('has-error');
        } else {
            formGroup.classList.add('has-success');
        }
    },
    resetFormGroup(formGroup) {
        formGroup.classList.remove('has-error');
        formGroup.classList.remove('has-success');
    },
};

module.exports = validation;
