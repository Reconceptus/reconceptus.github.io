(function($) {
    $.fn.additemToCart = function(item) {
        let popup_parts = {
                close_btn:
                    '<button class="icon icon-remove header-personal_info--close close" type="button"></button>',
                item_head:
                    '<h4 class="title-reg header-personal_info--short_title">' +
                    item.popup.head +
                    '</h4>',
                item_listing:
                    '<ul class="short_listing">' +
                    '<li class="short_listing-item">' +
                    '<div class="short_listing-item--img"><div class="short_listing-item--img_box">' +
                    '<img src="' +
                    item.img_url +
                    '" alt="' +
                    item.title +
                    '">' +
                    '</div></div>' +
                    '<div class="short_listing-item--data">' +
                    '<div class="short_listing-item--heading">' +
                    '<div class="short_listing-item--title"><span class="a">' +
                    item.title +
                    '</span></div>' +
                    '<div class="short_listing-item--category">' +
                    item.category +
                    '</div>' +
                    '</div>' +
                    '<div class="short_listing-item--price">' +
                    item.price +
                    '₽</div>' +
                    '</div></li></ul>',
                item_buttons:
                    '<div class="header-personal_info--actions form-buttons">' +
                    '<a href="' +
                    item.popup.link_order +
                    '" class="btn btn-red btn--sm">' +
                    item.popup.btn_order +
                    '</a>' +
                    '<a href="javascript:void(0);" class="btn-link link u-nowrap close">' +
                    item.popup.btn_continue +
                    '</a>' +
                    '</div>',
            },
            popup = popup_parts.close_btn;

        if (!item.selector) return false;

        if (item.popup.head) popup += popup_parts.item_head;

        if (item.title) popup += popup_parts.item_listing + popup_parts.item_buttons;

        $(item.selector).on('click', '.close', function() {
            $(item.selector)
                .html('')
                .removeClass('active');
            setTimeout(() => {
                $('#header').removeClass('added-order');
            }, 200);
        });

        function addElements() {
            $('#header').addClass('added-order');
            $(item.selector)
                .html('')
                .addClass('active')
                .append(popup)
                .show();
        }

        return addElements();
    };
})(jQuery);
