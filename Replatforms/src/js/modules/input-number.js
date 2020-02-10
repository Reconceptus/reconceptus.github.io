let input_number = function() {
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.5.3/cleave.min.js', function() {
        $('input[type=number]').each(function() {
            let _this = $(this),
                _JSinput = document.createElement('input'),
                _input = $(_JSinput);
            _this.addClass('hide').after(_input);
            _input.attr({
                value: _this.val(),
                placeholder: _this.attr('placeholder'),
                class: 'numeric',
            });
            let cleave = new Cleave(_input, {
                numeral: true,
                delimiter: ' ',
                numeralThousandsGroupStyle: 'thousand',
                onValueChanged: function(e) {
                    _this.val(e.target.rawValue);
                    _this.blur();
                },
            });
        });
    });
};

module.exports = input_number;
