const listing_views = function() {
    const view_all_btn = document.querySelector('.listing_filter-button--select_all');
    view_all_btn.onclick = function() {
        $('.listing_item-selectable--checkbox').prop('checked', true);
    };
};

module.exports = listing_views;
