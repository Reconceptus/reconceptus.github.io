import validate from 'validate.js';
// source: view-source:https://validatejs.org/examples.html
const validation = {
    data: {},
    init() {
        const _this = this;

        window.fn.validate = function(form, params, callback) {
            const Form = document.querySelector(form);
            Form.addEventListener('submit', ev => {
                ev.preventDefault();
                _this.handleFormSubmit(Form, params, callback);
            });

            const inputs = Form.querySelectorAll('input, textarea, select');
            for (let i = 0; i < inputs.length; ++i) {
                inputs.item(i).addEventListener('change', function(ev) {
                    const errors = validate(Form, params) || {};
                    _this.showErrorsForInput(this, errors[this.name], params[this.name]);
                });
            }
        };
    },
    handleFormSubmit(form, params, callback) {
        const errors = validate(form, params);
        if (!errors) {
            if (callback) {
                return callback;
            }
            form.submit();
        }
        form.querySelectorAll('input[name], textarea[name], select[name]').forEach(item => {
            this.showErrorsForInput(item, errors && errors[item.name], params[item.name]);
        });
    },
    showErrorsForInput(input, errors, params) {
        const formGroup = input.parentNode;
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
