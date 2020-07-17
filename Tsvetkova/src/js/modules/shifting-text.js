let shifting_text = function() {
    let shiftingBox = $('.shifting-box'),
        longestText = '',
        textQuantity = shiftingBox.find('.shifting-text').length,
        shiftingInterval = shiftingBox.attr('data-shifting-interval'),
        activeText = 0;

    shiftingBox
        .find('.shifting-text')
        .eq(activeText)
        .addClass('active');

    shiftingBox.find('.shifting-text').each(function() {
        let _this = $(this);
        if (_this.text().length > longestText.length) longestText = _this.text();
    });

    shiftingBox.prepend('<div class="shifting-text--static">' + longestText + '</div>');

    setInterval(function() {
        activeText < textQuantity - 1 ? activeText++ : (activeText = 0);
        shiftingBox.find('.shifting-text').removeClass('active');
        shiftingBox
            .find('.shifting-text')
            .eq(activeText)
            .addClass('active');
    }, +shiftingInterval);
};

module.exports = shifting_text;
