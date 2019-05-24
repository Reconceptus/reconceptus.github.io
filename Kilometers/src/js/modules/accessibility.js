const accessibility = function(siteFont) {
    const $btn = document.querySelector('.accessibility-mode');
    const $body = document.body;
    const $html = document.documentElement;

    $btn.onclick = function() {
        defaultSiteFont = siteFont;
        font_cnt = 0;
        $body.classList.toggle('acc-mode');
        $html.removeAttribute('data-acc-img');
        $html.removeAttribute('data-acc-color');
        $html.removeAttribute('data-acc-font');
    };

    const $btn_font_up = document.getElementById('font_up');
    const $btn_font_down = document.getElementById('font_down');
    const $btn_clr_white = document.getElementById('color_white');
    const $btn_clr_black = document.getElementById('color_black');
    const $btn_clr_blue = document.getElementById('color_blue');
    const $btn_clr_standart = document.getElementById('color_standart');
    const $btn_img_hide = document.getElementById('img_hide');
    const $btn_img_grey = document.getElementById('img_grey');
    const $btn_img_standart = document.getElementById('img_standart');

    // font changes

    let defaultSiteFont = siteFont;
    let font_cnt = 0;

    $btn_font_up.onclick = function() {
        if (font_cnt <= 2) {
            defaultSiteFont += 2;
            font_cnt++;
            $html.dataset.accFont = defaultSiteFont;
        }
    };
    $btn_font_down.onclick = function() {
        if (font_cnt > 0) {
            defaultSiteFont -= 2;
            font_cnt--;
            $html.dataset.accFont = defaultSiteFont;
        }
    };

    // color changes

    $btn_clr_white.onclick = function() {
        $html.dataset.accColor = 'white';
    };
    $btn_clr_black.onclick = function() {
        $html.dataset.accColor = 'black';
    };
    $btn_clr_blue.onclick = function() {
        $html.dataset.accColor = 'blue';
    };
    $btn_clr_standart.onclick = function() {
        $html.dataset.accColor = 'standart';
    };

    // img changes

    $btn_img_hide.onclick = function() {
        $html.dataset.accImg = 'hide';
    };
    $btn_img_grey.onclick = function() {
        $html.dataset.accImg = 'grey';
    };
    $btn_img_standart.onclick = function() {
        $html.dataset.accImg = 'standart';
    };

    // reset changes

    const $btn_reset = document.getElementById('acc_reset');
    $btn_reset.onclick = function() {
        defaultSiteFont = siteFont;
        font_cnt = 0;
        $body.classList.toggle('acc-mode');
        $html.removeAttribute('data-acc-img');
        $html.removeAttribute('data-acc-color');
        $html.removeAttribute('data-acc-font');
    };
};

module.exports = accessibility;
