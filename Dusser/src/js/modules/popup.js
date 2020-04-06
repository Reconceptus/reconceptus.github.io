const popup = function(title, text, buttons) {

    let btnDefault = {
        title: 'Согласен',
        class: 'btn btn-red btn--md',
        fn: function () {
            functions.fn.closeModal();
        }
    };

    let btns_box = function() {

        if (!buttons) return '';

        let btns_wrap = document.createElement('div');
        $(btns_wrap).addClass('custom_modal-actions');

        buttons.forEach(function(item) {
            let btn = document.createElement('button');

            $(btn).attr({
                'type':'button',
                'class': !!item.class ? item.class : btnDefault.class
            }).text(!!item.title ? item.title : btnDefault.title);
            $(btn).click(!!item.fn ? item.fn : btnDefault.fn);

            $(btn).appendTo($(btns_wrap));
        });

        return btns_wrap;
    };

    let popup_code =
        '<div class="custom_modal-title">' +
        title +
        '</div>' +
        '<div class="custom_modal-text">' +
        text +
        '</div>';

    $('.custom_modal-main').html('');
    $('.custom_modal-main')
        .append(popup_code)
        .append(btns_box);

    functions.fn.openModal('popup')
};

module.exports = popup;
