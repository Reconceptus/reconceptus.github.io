const expander = function() {
    const $expandAccordion = document.querySelectorAll('.fn-expand-accordion');

    if ($expandAccordion.length) {
        for (const accordion of $expandAccordion) {
            const $expandBox = accordion.querySelectorAll('.fn-expand-box');
            for (const expandBox of $expandBox) {
                const expandBtn = expandBox.querySelector('.fn-expand-btn'),
                    expandData = expandBox.querySelector('.fn-expand-data');
                expandBtn.onclick = function() {
                    if ($(expandBox).hasClass('expanded')) {
                        $($expandBox)
                            .removeClass('expanded')
                            .find('.fn-expand-data')
                            .slideUp(300);
                    } else {
                        $($expandBox)
                            .removeClass('expanded')
                            .find('.fn-expand-data')
                            .slideUp(300);
                        $(expandBox).addClass('expanded');
                        $(expandData).slideDown(300);
                    }
                };

                if (expandData.querySelector('.active')) {
                    if ($('html').hasClass('desktop')) {
                        $(expandBox).addClass('expanded');
                        $(expandData).slideDown(0);
                    } else {
                        $(expandBox).removeClass('expanded');
                        $(expandData).slideUp(0);
                    }
                }
            }
        }
        return;
    }

    const $expandBox = document.querySelectorAll('.fn-expand-box');

    for (const expandBox of $expandBox) {
        const expandBtn = expandBox.querySelector('.fn-expand-btn'),
            expandData = expandBox.querySelector('.fn-expand-data');
        expandBtn.onclick = function() {
            $(expandBox).toggleClass('expanded');
            $(expandData).slideToggle(300);
        };

        if (expandData.querySelector('.active')) {
            if ($('html').hasClass('desktop')) {
                $(expandBox).addClass('expanded');
                $(expandData).slideDown(0);
            } else {
                $(expandBox).removeClass('expanded');
                $(expandData).slideUp(0);
            }
        }
    }
};

module.exports = expander;
