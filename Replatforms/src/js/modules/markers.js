let markers = function() {
    $('#map').on('click', 'img[src*=custom_marker]', function() {
        let _this = $(this),
            _id = _this.attr('src').split('custom_marker')[1];

        if (_this.parent().hasClass('visible')) {
            $('#map .map-item').removeClass('visible');
        } else {
            $('#map .map-item').removeClass('visible');
            _this.parent().addClass('map-item visible');
        }

        if (_this.next().length == 0) {
            let cloneItem = $('.listing_item[data-item=' + _id + ']').clone();
            _this.after(cloneItem);
        }
    });
};

module.exports = markers;
