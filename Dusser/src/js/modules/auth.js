const $wrapper = document.getElementById('wrapper'),
    $authMenu = document.getElementById('authMenu'),
    $authOpeners = document.querySelectorAll('.auth_open'),
    $authClosers = document.querySelectorAll('.auth_close');

const auth = {
    default: function() {
        for (const btn of $authOpeners) {
            btn.onclick = function() {
                $authMenu.classList.add('opened');
                $wrapper.classList.add('blured');
            };
        }

        for (const btn of $authClosers) {
            btn.onclick = function() {
                $authMenu.classList.remove('opened');
                $wrapper.classList.remove('blured');
            };
        }
    },
    open: function() {
        $authMenu.classList.add('opened');
        $wrapper.classList.add('blured');
    },
};

module.exports = auth;
