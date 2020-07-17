const $burger = document.getElementById('burger'),
    $burgerMenu = document.getElementById('burgerMenu'),
    $burgerClosers = document.querySelectorAll('.burger_close');

const burger = {
    init: function() {
        $burger.onclick = () => {
            this.open();
        };
        for (let i = 0; i < $burgerClosers.length; ++i) {
            const btn = $burgerClosers[i];
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
