const table_expander = function() {
    const $expandBtn = $('.fn-expand-table-btn');

    $expandBtn.click(function() {
        let _this = $(this);
        _this
            .closest('.fn-expand-table-box')
            .toggleClass('opened')
            .next('.fn-expand-table-box')
            .find('.fn-expand-table-data')
            .slideToggle(300);
    });
};

module.exports = table_expander;
