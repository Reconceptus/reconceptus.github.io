let text_box = function() {
    $('.text-box').each(function() {
        let _this = $(this);
        _this.find('img').each(function() {
            let _this = $(this);
            _this.wrap('<figure class="img"></figure>');
        });
        _this.find('iframe').each(function() {
            let _this = $(this);
            _this.wrap('<figure class="video"></figure>');
        });
    });
};

module.exports = text_box;
