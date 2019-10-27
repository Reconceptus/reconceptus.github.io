const burger = function() {
    const $wrapper = document.getElementById('wrapper'),
        $burger = document.getElementById('burger'),
        $burgerMenu = document.getElementById('burgerMenu'),
        $burgerClosers = document.querySelectorAll('.burger_close');

    $burger.onclick = function() {
        $burgerMenu.classList.add('opened');
        $wrapper.classList.add('blured');
    };
    for (const btn of $burgerClosers) {
        btn.onclick = function() {
            $burgerMenu.classList.remove('opened');
            $wrapper.classList.remove('blured');
        };
    }
};

module.exports = burger;
