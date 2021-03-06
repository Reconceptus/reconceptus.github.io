const $filter = document.getElementById('filters'),
    $filterMenu = document.getElementById('filtersBar'),
    $filterClosers = document.querySelectorAll('.filters_close');

const filter = {
    init: function() {
        $filter.onclick = () => {
            this.open();
        };
        for (let i = 0; i < $filterClosers.length; ++i) {
            const btn = $filterClosers[i];
            btn.onclick = () => {
                this.close();
            };
        }
    },
    open: function() {
        functions.ovh.add();
        $filterMenu.classList.add('opened');
    },
    close: function() {
        $filterMenu.classList.remove('opened');
        functions.ovh.remove();
    },
};

module.exports = filter;
