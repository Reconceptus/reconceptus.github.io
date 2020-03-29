const $wrapper = document.getElementById('wrapper'),
    $burger = document.getElementById('burger'),
    $burgerMenu = document.getElementById('burgerMenu'),
    $burgerClosers = document.querySelectorAll('.burger_close');

const burger = {
    init: function() {
        $burger.onclick = () => {
            this.open();
        };
        for (const btn of $burgerClosers) {
            btn.onclick = () => {
                this.close();
            };
        }
    },
    open: function() {
        $wrapper.classList.add('right-origin');
        functions.ovh.add();
        functions.sticky_sidebar.translate('add');
        $burgerMenu.classList.add('opened');
        $wrapper.classList.add('blured');
    },
    close: function() {
        $burgerMenu.classList.remove('opened');
        $wrapper.classList.remove('blured');
        functions.sticky_sidebar.translate('remove');
        functions.ovh.remove();
        $wrapper.classList.remove('right-origin');
    },
};

module.exports = burger;
