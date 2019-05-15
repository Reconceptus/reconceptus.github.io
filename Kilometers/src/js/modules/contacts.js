const contacts = function() {
    const $contactMap = document.querySelector('.contact-map');
    const $main = document.getElementById('main');
    $main.appendChild($contactMap);
};

module.exports = contacts;
