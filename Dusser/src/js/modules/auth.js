const $wrapper = document.getElementById('wrapper'),
    $authMenu = document.getElementById('authMenu'),
    $authOpeners = document.querySelectorAll('.auth_open'),
    $authClosers = document.querySelectorAll('.auth_close');

const auth = {
    init: function() {
        for (const btn of $authOpeners) {
            btn.onclick = () => {
                this.open();
            };
        }

        for (const btn of $authClosers) {
            btn.onclick = () => {
                this.close();
            };
        }
    },
    open: function(check) {
        if ($authMenu == null) return false;
        $wrapper.classList.add('left-origin');
        functions.ovh.add();
        functions.sticky_sidebar.translate('add');
        $authMenu.classList.add('opened');
        $wrapper.classList.add('blured');

        check == 'signup' ? $('#auth_signup').click() : $('#auth_signin').click();
    },
    close: function() {
        $authMenu.classList.remove('opened');
        $wrapper.classList.remove('blured');
        functions.sticky_sidebar.translate('remove');
        functions.ovh.remove();
        $wrapper.classList.remove('left-origin');
    },
};

module.exports = auth;
