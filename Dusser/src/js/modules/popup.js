const popup = function(title, text) {
    let popup_code =
        '<div class="custom_modal-title">' +
        title +
        '</div>' +
        '<div class="custom_modal-text">' +
        text +
        '</div>' +
        '<div class="custom_modal-actions">' +
        '<button class="btn btn-red btn--md close">Согласен</button>' +
        '</div>';

    $('.custom_modal-main').html('');
    $('.custom_modal-main').append(popup_code);
};

module.exports = popup;
