let language = function() {
    let lng = $('.language');
    lng.each(function() {
        let _this = $(this);
        _this.find('.language_selected').click(function() {
            _this.toggleClass('active');
        });
    });
    $(document).click(e => {
        let target = $(e.target);

        if (target.parents('.language').length == 0) {
            lng.removeClass('active');
        }
    });
};

module.exports = language;
