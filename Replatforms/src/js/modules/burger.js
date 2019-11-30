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
        functions.ovh.add();
        $burgerMenu.classList.add('opened');
    },
    close: function() {
        $burgerMenu.classList.remove('opened');
        functions.ovh.remove();
    },
};

module.exports = burger;
