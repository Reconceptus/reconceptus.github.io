const expander = function() {
    const $expandBox = document.querySelectorAll('.fn-expand-box');

    for (const expandBox of $expandBox) {
        const expandBtn = expandBox.querySelector('.fn-expand-btn'),
            expandData = expandBox.querySelector('.fn-expand-data');
        expandBtn.onclick = function() {
            $(expandBox).toggleClass('expanded');
            $(expandData).slideToggle(300);
        };
    }
};

module.exports = expander;
