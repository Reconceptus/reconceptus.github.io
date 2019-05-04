const burger = function() {
    const $burger = document.getElementById('burger');
    const $header = document.getElementById('header');
    $burger.onclick = function() {
        $header.classList.toggle('open');
        $('.header-nav').slideToggle(250);
    };
};

module.exports = burger;
