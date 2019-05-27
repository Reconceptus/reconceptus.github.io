import 'jquery.cookie/jquery.cookie.js';

const accessibility = function(siteFont) {
    const $btn = document.querySelector('.accessibility-mode');
    const $body = document.body;
    const $html = document.documentElement;
    const $accSettings = {
        accMode: $.cookie('accMode'),
        font: $.cookie('font'),
        color: $.cookie('color'),
        image: $.cookie('image'),
    };

    if ($accSettings.accMode > 0) {
        $body.classList.add('acc-mode');
        $html.dataset.accFont = $accSettings.font;
        $html.dataset.accColor = $accSettings.color;
        $html.dataset.accImg = $accSettings.image;
    }

    function cookieReload() {
        $accSettings.accMode = $.cookie('accMode');
        $accSettings.font = $.cookie('font');
        $accSettings.color = $.cookie('color');
        $accSettings.image = $.cookie('image');
    }

    function cookieRemove() {
        $.removeCookie('accMode');
        $.removeCookie('font');
        $.removeCookie('color');
        $.removeCookie('image');
    }

    $btn.onclick = function() {
        defaultSiteFont = siteFont;
        font_cnt = 0;
        $body.classList.toggle('acc-mode');
        $html.removeAttribute('data-acc-img');
        $html.removeAttribute('data-acc-color');
        $html.removeAttribute('data-acc-font');

        if ($accSettings.accMode == undefined) {
            $.cookie('accMode', 1);
        } else {
            $.cookie('accMode', -1 * $accSettings.accMode);
        }
        cookieReload();
    };

    // font changes

    const $btn_font_up = document.getElementById('font_up');
    const $btn_font_down = document.getElementById('font_down');

    let defaultSiteFont;
    let font_cnt;
    if ($accSettings.accMode > 0) {
        defaultSiteFont = $.cookie('font');
        font_cnt = 0.5 * (defaultSiteFont - siteFont);
    } else {
        defaultSiteFont = siteFont;
        font_cnt = 0;
    }

    $btn_font_up.onclick = function() {
        if (font_cnt <= 2) {
            defaultSiteFont = +defaultSiteFont + 2;
            font_cnt++;
            $html.dataset.accFont = defaultSiteFont;
            $.cookie('font', defaultSiteFont);
        }
    };
    $btn_font_down.onclick = function() {
        if (font_cnt > 0) {
            defaultSiteFont -= 2;
            font_cnt--;
            $html.dataset.accFont = defaultSiteFont;
            $.cookie('font', defaultSiteFont);
        }
    };

    // color changes

    const $btn_clr_white = document.getElementById('color_white');
    const $btn_clr_black = document.getElementById('color_black');
    const $btn_clr_blue = document.getElementById('color_blue');
    const $btn_clr_standart = document.getElementById('color_standart');

    $btn_clr_white.onclick = function() {
        $html.dataset.accColor = 'white';
        $.cookie('color', 'white');
    };
    $btn_clr_black.onclick = function() {
        $html.dataset.accColor = 'black';
        $.cookie('color', 'black');
    };
    $btn_clr_blue.onclick = function() {
        $html.dataset.accColor = 'blue';
        $.cookie('color', 'blue');
    };
    $btn_clr_standart.onclick = function() {
        $html.dataset.accColor = 'standart';
        $.cookie('color', 'default');
    };

    // img changes

    const $btn_img_hide = document.getElementById('img_hide');
    const $btn_img_grey = document.getElementById('img_grey');
    const $btn_img_standart = document.getElementById('img_standart');

    $btn_img_hide.onclick = function() {
        $html.dataset.accImg = 'hide';
        $.cookie('image', 'hide');
    };
    $btn_img_grey.onclick = function() {
        $html.dataset.accImg = 'grey';
        $.cookie('image', 'grey');
    };
    $btn_img_standart.onclick = function() {
        $html.dataset.accImg = 'standart';
        $.cookie('image', 'default');
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

        cookieRemove();
    };
};

module.exports = accessibility;
