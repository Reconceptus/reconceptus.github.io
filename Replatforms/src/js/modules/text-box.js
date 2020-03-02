const text_box = {
    initText: function() {
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
            _this.find('li').each(function() {
                let _this = $(this);
                if (_this.text().length < 1) {
                    _this.remove();
                }
            });
        });
    },
    initFAQ: function() {
        $('.faq-item--answer').each(function() {
            let _this = $(this);
            _this.find('img').each(function() {
                let _this = $(this);
                _this.wrap('<figure class="text-img"></figure>');
            });
            _this.find('iframe').each(function() {
                let _this = $(this);
                _this.wrap('<figure class="text-video"></figure>');
            });
        });
    },
};

module.exports = text_box;
