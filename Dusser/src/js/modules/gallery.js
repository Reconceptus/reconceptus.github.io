const gallery = function(selector) {
    $(selector).each(function() {
        const _this = $(this),
            galleryItemCurrent = $('.gallery-main--item.current', _this),
            galleryItemNew = $('.gallery-main--item.new', _this),
            galleryDot = $('.gallery-dots--item', _this),
            galleryPrev = $('.gallery-nav--button.prev', _this),
            galleryNext = $('.gallery-nav--button.next', _this);

        let is_clickable = true,
            visible = 0,
            dots_count = 6;

        for (let i = 0; i < dots_count; i++) {
            galleryDot.eq(i).addClass('visible');
        }

        function changeItem(img) {
            const currentImg = galleryItemCurrent.css('background-image'),
                nextImg = 'url(' + img + ')';
            galleryItemNew.css('background-image', currentImg);
            galleryItemNew.fadeTo(0, 1);
            galleryItemCurrent.css('background-image', nextImg);
            galleryItemNew.fadeTo(250, 0, () => {
                is_clickable = true;
            });
        }

        function changeVisible(dot) {
            if (!dot.hasClass('visible')) {
                let el_index = dot.index(),
                    first_visible_index = $('.gallery-dots .visible:first', _this).index();

                if (first_visible_index > el_index) {
                    visible--;
                    $('.gallery-dots .visible:last', _this).removeClass('visible');
                } else {
                    visible++;
                    $('.gallery-dots .visible:first', _this).removeClass('visible');
                }
                dot.addClass('visible');
                galleryDot.css('transform', 'translateX(' + -100 * visible + '%)');
            }
        }

        galleryDot.click(function() {
            if (is_clickable) {
                is_clickable = false;
                changeItem($('img', this).attr('src'));
                galleryDot.removeClass('current');
                $(this).addClass('current');
            }
        });

        galleryNext.click(function() {
            if (is_clickable) {
                const tempNext = $('.gallery-dots--item.current', _this).next(),
                    firstDot = $('.gallery-dots--item:first', _this);
                is_clickable = false;
                galleryDot.removeClass('current');
                if (tempNext.length) {
                    changeItem($('img', tempNext).attr('src'));
                    tempNext.addClass('current');
                    changeVisible(tempNext);
                } else {
                    changeItem($('img', firstDot).attr('src'));
                    firstDot.addClass('current');
                    changeVisible(firstDot);
                }
            }
        });

        galleryPrev.click(function() {
            if (is_clickable) {
                const tempNext = $('.gallery-dots--item.current', _this).prev(),
                    lastDot = $('.gallery-dots--item:last', _this);
                is_clickable = false;
                galleryDot.removeClass('current');
                if (tempNext.length) {
                    changeItem($('img', tempNext).attr('src'));
                    tempNext.addClass('current');
                    changeVisible(tempNext);
                } else {
                    changeItem($('img', lastDot).attr('src'));
                    lastDot.addClass('current');
                    changeVisible(lastDot);
                }
            }
        });

        // init

        $('.gallery-dots--item:first', _this).addClass('current');
        changeItem($('.gallery-dots--item.current img', _this).attr('src'));
    });
};

module.exports = gallery;
