const $search = document.getElementById('searchObject'),
    $searchMenu = document.getElementById('searchMenu'),
    $searchClosers = document.querySelectorAll('.search_close');

const search = {
    init: function() {
        $search.onclick = () => {
            this.open();
        };
        for (const btn of $searchClosers) {
            btn.onclick = () => {
                this.close();
            };
        }
    },
    open: function() {
        functions.ovh.add();
        $searchMenu.classList.add('opened');
    },
    close: function() {
        $searchMenu.classList.remove('opened');
        functions.ovh.remove();
    },
};

module.exports = search;
