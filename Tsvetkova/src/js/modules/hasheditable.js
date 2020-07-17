let c_box, c_input, c_list;

if ($('.hasheditable-box').length > 0) {
    c_box = document.querySelector('.hasheditable-box');
    c_input = c_box.querySelector('.hasheditable-key');
    c_list = c_box.querySelector('.hasheditable-list');
}

let hasheditable = {
    data: {
        icons: {
            icon_remove:
                '<i class="icon icon_size-2"><svg><use xlink:href="#icon-remove"/></svg></i>',
            icon_translate:
                '<i class="icon icon_size-2"><svg><use xlink:href="#icon-translate"/></svg></i>',
        },
        classes: {
            wrap: 'hashtag-list--item',
            cta: 'hashtag-list--item_cta',
            btn: 'hashtag-list--item_btn',
            text: 'hashtag-list--item_text',
            input: 'hashtag-list--item_input',
        },
        name: 'hashtag[]',
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
    removeItem: function(el) {
        let el_parent = $(el).closest('.hasheditable-item');
        el_parent.remove();
        functions.sticky_sidebar.reCalculate();
    },
    insertItem: function(
        fieldName = this.data.name,
        translateCallback,
        wrap_class = this.data.classes.wrap,
        cta_class = this.data.classes.cta,
        btn_class = this.data.classes.btn,
        text_class = this.data.classes.text,
        input_class = this.data.classes.input,
    ) {
        let _value = $.trim(c_input.value);
        let itemCode =
            '<div class="hasheditable-item ' +
            wrap_class +
            '">' +
            '<div class="hasheditable-item-text ' +
            text_class +
            '">' +
            _value +
            '</div>' +
            '<input type="text" readonly name="' +
            fieldName +
            '" class="hasheditable-item-input ' +
            input_class +
            '" value="' +
            _value +
            '"/>' +
            '<div class="hasheditable-item-cta ' +
            cta_class +
            '">' +
            '<button type="button" onclick="functions.hasheditable.removeItem(this);" class="editing-item-btn ' +
            btn_class +
            '">' +
            this.data.icons.icon_remove +
            '</button>' +
            '<button type="button" onclick="functions.hasheditable.translate(this);" class="' +
            btn_class +
            '">' +
            this.data.icons.icon_translate +
            '</button>' +
            '</div>' +
            '</div>';

        $(c_list).append(itemCode);
        this.clearInput();
        functions.sticky_sidebar.reCalculate();
        if (!!translateCallback) return translateCallback;
    },
};

module.exports = hasheditable;
