import validate from 'validate.js';
// source: view-source:https://validatejs.org/examples.html
const validation = {
    data: {},
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
                    _this.showErrorsForInput(this, errors[this.name], params[this.name]);
                });
            }
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
        form.querySelectorAll('input[name], textarea[name], select[name]').forEach(item => {
            this.showErrorsForInput(item, errors && errors[item.name], params[item.name]);
        });
    },
    showErrorsForInput(input, errors, params) {
        let formGroup = input.parentNode;
        this.resetFormGroup(formGroup);
        if (errors) {
            formGroup.classList.add('has-error');
        } else if (params.presence) {
            formGroup.classList.add('has-success');
        }
    },
    resetFormGroup(formGroup) {
        formGroup.classList.remove('has-error');
        formGroup.classList.remove('has-success');
    },
};

module.exports = validation;
