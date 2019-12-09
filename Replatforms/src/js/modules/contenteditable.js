let c_box = document.querySelector('.contenteditable-box'),
    c_input = c_box.querySelector('.contenteditable-key'),
    c_list = c_box.querySelector('.contenteditable-list');

let contenteditable = {
    data: {
        values: [],
        code: '',
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
    insertItem: function(wrap_class, cta_class, btn_class) {
        let _value = c_input.innerText;
        let itemCode =
            '<div class="contenteditable-item ' +
            wrap_class +
            '">' +
            _value +
            '<div class="contenteditable-item-cta ' +
            cta_class +
            '">' +
            '<button type="button" class="' +
            btn_class +
            '">' +
            '<i class="icon icon_size-2">' +
            '<svg xmlns="http://www.w3.org/2000/svg">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"/>' +
            '</svg>' +
            '</i>' +
            '</button>' +
            '<button type="button" class="' +
            btn_class +
            '">' +
            '<i class="icon icon_size-2">' +
            '<svg xmlns="http://www.w3.org/2000/svg">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-remove"/>' +
            '</svg>' +
            '</i>' +
            '</button>' +
            '<button type="button" class="' +
            btn_class +
            '">' +
            '<i class="icon icon_size-2">' +
            '<svg xmlns="http://www.w3.org/2000/svg">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-translate"/>' +
            '</svg>' +
            '</i>' +
            '</button>' +
            '</div>' +
            '</div>';

        $(c_list).prepend(itemCode);
        this.clearInput();
    },
};

module.exports = contenteditable;
