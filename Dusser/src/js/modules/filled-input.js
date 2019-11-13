const filled_input = function() {
    function filled(el) {
        if (el.val().trim() != '') {
            el.parent().addClass('filled');
        } else {
            el.parent().removeClass('filled');
        }
    }
    $('.form-input input').each(function() {
        filled($(this));
    });
    $('.form-input input').change(function() {
        filled($(this));
    });
};

module.exports = filled_input;
