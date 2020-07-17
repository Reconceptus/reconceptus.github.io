let dropdown = function() {
    let drop = $('.dropdown');
    drop.each(function() {
        let _this = $(this);
        _this.find('.dropdown_selected').click(function() {
            if (_this.hasClass('active')) {
                drop.removeClass('active');
            } else {
                drop.removeClass('active');
                _this.addClass('active');
            }
        });
    });
    $(document).click(e => {
        let target = $(e.target);

        if (target.parents('.dropdown').length == 0) {
            drop.removeClass('active');
        }
    });
};

module.exports = dropdown;
