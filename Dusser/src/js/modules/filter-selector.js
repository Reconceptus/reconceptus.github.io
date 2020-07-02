const $filterSelector = document.getElementById('filter-selector');

const filter_selector = function() {

    const list = $($filterSelector).find('.list'),
        count = $($filterSelector).find('.filters-count'),
        selected = $($filterSelector).find('.selected-filters');

    function itemsCount(){
        let items = list.find('[data-filter-item]').length;
        if(items > 0){
            selected.show();
            count.text('('+items+')');
        }
        else {
            selected.hide();
            count.text('')
        }
    }

    itemsCount();

    function buildItem(attr, txt){
        const item = '<span data-filter-item="' + attr + '" data-filter-value="' + txt + '">' + txt + '</span>';
        return item;
    }

    $($filterSelector).on('change', '.checkbox-item input', function () {
        const _this = $(this),
            _thisName = _this.attr('name'),
            _thisValue = _this.closest('.checkbox-item').find('.checkbox-label').text();

        if(_this.prop('checked')){
            list.append(buildItem(_thisName, _thisValue))
        }
        else {
            list.find('[data-filter-item="'+_thisName+'"][data-filter-value="'+_thisValue+'"]').remove()
        }

        itemsCount();
    });

    $($filterSelector).on('click', '[data-filter-item]', function () {
        const _this = $(this),
            _thisName = _this.attr('data-filter-item'),
            _thisValue = _this.attr('data-filter-value');

        $($filterSelector).find('.checkbox-label:contains('+_thisValue+')')
            .closest('.checkbox-item')
            .find('input[name="'+_thisName+'"]')
            .prop('checked', false);

        _this.remove();

        itemsCount();
    });

    $($filterSelector).on('click', '[type=reset]', function () {
        list.html('');
        itemsCount();
    });
};

module.exports = filter_selector;
