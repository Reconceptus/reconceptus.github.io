let c_box = document.querySelector('.contenteditable-box'),
    c_input = c_box.querySelector('.contenteditable-key');

let contenteditable = {
    data: {
        values: [],
    },
    init: function() {
        c_input.addEventListener('input', () => {
            this.change();
        });
    },
    change: function() {
        let _value = c_input.innerText;
        _value = $.trim(_value);
        if (!!_value) {
            c_box.classList.add('has-text');
        } else {
            c_box.classList.remove('has-text');
        }
    },
    clearInput: function() {
        c_input.innerText = '';
        c_box.classList.remove('has-text');
    },
};

module.exports = contenteditable;
