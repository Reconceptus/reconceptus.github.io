const gallery = function() {
    const galleryItemCurrent = $('.gallery-main--item.current'),
        galleryItemNew = $('.gallery-main--item.new'),
        galleryDot = $('.gallery-dots--item'),
        galleryPrev = $('.gallery-nav--button.prev'),
        galleryNext = $('.gallery-nav--button.next');

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
                first_visible_index = $('.gallery-dots .visible:first').index();

            if (first_visible_index > el_index) {
                visible--;
                $('.gallery-dots .visible:last').removeClass('visible');
            } else {
                visible++;
                $('.gallery-dots .visible:first').removeClass('visible');
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
            const tempNext = $('.gallery-dots--item.current').next(),
                firstDot = $('.gallery-dots--item:first-child');
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
            const tempNext = $('.gallery-dots--item.current').prev(),
                lastDot = $('.gallery-dots--item:last-child');
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
};

module.exports = gallery;
