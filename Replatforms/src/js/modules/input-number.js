let input_number = function() {
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.5.3/cleave.min.js', function() {
        $('input[type=number]').each(function() {
            let _input = $(this);
            _input.attr('type', 'text');
            let cleave = new Cleave(_input, {
                numeral: true,
                delimiter: ' ',
                numeralThousandsGroupStyle: 'thousand',
            });
        });
    });
};

module.exports = input_number;
