let c_box = document.querySelector('.contenteditable-box'),
    c_input = c_box.querySelector('.contenteditable-key'),
    c_list = c_box.querySelector('.contenteditable-list');

let contenteditable = {
    data: {
        icons: {
            icon_edit: '<i class="icon icon_size-2"><svg><use xlink:href="#icon-edit"/></svg></i>',
            icon_approve: '',
            icon_cancel: '',
            icon_remove: '',
            icon_translate: '',
        },
        classes: {
            wrap: 'key_benefits-list--item',
            cta: 'key_benefits-list--item_cta',
            btn: 'key_benefits-list--item_btn',
            text: 'key_benefits-list--item_text',
            textarea: 'key_benefits-list--item_textarea',
        },
    },
    init: function() {
        c_input.addEventListener('input', () => {
            this.change();
        });
    },
    change: function() {
        let _value = c_input.value;
        _value = $.trim(_value);
        if (!!_value) {
            c_box.classList.add('has-text');
        } else {
            c_box.classList.remove('has-text');
        }
    },
    clearInput: function() {
        c_input.value = '';
        c_box.classList.remove('has-text');
    },
    editItem: function(el) {
        let el_parent = $(el).closest('.contenteditable-item'),
            el_text = el_parent.find('.contenteditable-item-text'),
            el_textarea = el_parent.find('.contenteditable-item-textarea');

        const currentValue = el_textarea.val();

        el_parent.addClass('editing');
        el_textarea.focus();
        el_textarea[0].selectionStart = el_textarea[0].selectionEnd = 999999;

        el_textarea[0].addEventListener('input', () => {
            el_text.text(el_textarea.val());
        });
    },
    insertItem: function(
        translateCallback,
        wrap_class = this.data.classes.wrap,
        cta_class = this.data.classes.cta,
        btn_class = this.data.classes.btn,
        text_class = this.data.classes.text,
        textarea_class = this.data.classes.textarea,
    ) {
        let _value = c_input.value;
        let itemCode =
            '<div class="contenteditable-item ' +
            wrap_class +
            '">' +
            '<div class="contenteditable-item-text ' +
            text_class +
            '">' +
            _value +
            '</div>' +
            '<textarea class="contenteditable-item-textarea ' +
            textarea_class +
            '">' +
            _value +
            '</textarea>' +
            '<div class="contenteditable-item-cta ' +
            cta_class +
            '">' +
            '<button type="button" onclick="functions.contenteditable.editItem(this);" class="' +
            btn_class +
            '">' +
            this.data.icons.icon_edit +
            '</button>' +
            '<button type="button" class="' +
            btn_class +
            '">' +
            '<i class="icon icon_size-2"><svg xmlns="http://www.w3.org/2000/svg">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-remove"/>' +
            '</svg></i>' +
            '</button>' +
            '<button type="button" class="' +
            btn_class +
            '">' +
            '<i class="icon icon_size-2"><svg xmlns="http://www.w3.org/2000/svg">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-translate"/>' +
            '</svg></i>' +
            '</button>' +
            '</div>' +
            '</div>';

        $(c_list).prepend(itemCode);
        this.clearInput();
    },
};

module.exports = contenteditable;
