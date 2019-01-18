// detect ie
// Get IE or Edge browser version
var version = detectIE();

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

if (version){
    document.getElementById('wrapper').classList.add('ie');
}

// device js
/*! current-device js */
/* @see https://github.com/matthewhudson/current-device */

!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.device=e():n.device=e()}(window,function(){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=1)}([function(n,e,o){"use strict";o.r(e);var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i=window.device,r={},a=[];window.device=r;var c=window.document.documentElement,d=window.navigator.userAgent.toLowerCase(),u=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"];function l(n){return-1!==d.indexOf(n)}function s(n){return c.className.match(new RegExp(n,"i"))}function f(n){var e=null;s(n)||(e=c.className.replace(/^\s+|\s+$/g,""),c.className=e+" "+n)}function b(n){s(n)&&(c.className=c.className.replace(" "+n,""))}function p(){r.landscape()?(b("portrait"),f("landscape"),w("landscape")):(b("landscape"),f("portrait"),w("portrait")),h()}function w(n){for(var e in a)a[e](n)}r.macos=function(){return l("mac")},r.ios=function(){return r.iphone()||r.ipod()||r.ipad()},r.iphone=function(){return!r.windows()&&l("iphone")},r.ipod=function(){return l("ipod")},r.ipad=function(){return l("ipad")},r.android=function(){return!r.windows()&&l("android")},r.androidPhone=function(){return r.android()&&l("mobile")},r.androidTablet=function(){return r.android()&&!l("mobile")},r.blackberry=function(){return l("blackberry")||l("bb10")||l("rim")},r.blackberryPhone=function(){return r.blackberry()&&!l("tablet")},r.blackberryTablet=function(){return r.blackberry()&&l("tablet")},r.windows=function(){return l("windows")},r.windowsPhone=function(){return r.windows()&&l("phone")},r.windowsTablet=function(){return r.windows()&&l("touch")&&!r.windowsPhone()},r.fxos=function(){return(l("(mobile")||l("(tablet"))&&l(" rv:")},r.fxosPhone=function(){return r.fxos()&&l("mobile")},r.fxosTablet=function(){return r.fxos()&&l("tablet")},r.meego=function(){return l("meego")},r.cordova=function(){return window.cordova&&"file:"===location.protocol},r.nodeWebkit=function(){return"object"===t(window.process)},r.mobile=function(){return r.androidPhone()||r.iphone()||r.ipod()||r.windowsPhone()||r.blackberryPhone()||r.fxosPhone()||r.meego()},r.tablet=function(){return r.ipad()||r.androidTablet()||r.blackberryTablet()||r.windowsTablet()||r.fxosTablet()},r.desktop=function(){return!r.tablet()&&!r.mobile()},r.television=function(){for(var n=0;n<u.length;){if(l(u[n]))return!0;n++}return!1},r.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?screen.orientation.type.includes("portrait"):window.innerHeight/window.innerWidth>1},r.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?screen.orientation.type.includes("landscape"):window.innerHeight/window.innerWidth<1},r.noConflict=function(){return window.device=i,this},r.ios()?r.ipad()?f("ios ipad tablet"):r.iphone()?f("ios iphone mobile"):r.ipod()&&f("ios ipod mobile"):r.macos()?f("macos desktop"):r.android()?r.androidTablet()?f("android tablet"):f("android mobile"):r.blackberry()?r.blackberryTablet()?f("blackberry tablet"):f("blackberry mobile"):r.windows()?r.windowsTablet()?f("windows tablet"):r.windowsPhone()?f("windows mobile"):f("windows desktop"):r.fxos()?r.fxosTablet()?f("fxos tablet"):f("fxos mobile"):r.meego()?f("meego mobile"):r.nodeWebkit()?f("node-webkit"):r.television()?f("television"):r.desktop()&&f("desktop"),r.cordova()&&f("cordova"),r.onChangeOrientation=function(n){"function"==typeof n&&a.push(n)};var m="resize";function y(n){for(var e=0;e<n.length;e++)if(r[n[e]]())return n[e];return"unknown"}function h(){r.orientation=y(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(m="orientationchange"),window.addEventListener?window.addEventListener(m,p,!1):window.attachEvent?window.attachEvent(m,p):window[m]=p,p(),r.type=y(["mobile","tablet","desktop"]),r.os=y(["ios","iphone","ipad","ipod","android","blackberry","windows","fxos","meego","television"]),h(),e.default=r},function(n,e,o){n.exports=o(0)}]).default});

// svg-use
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else c=document.createElement("a"),c.href=a;return c.protocol.replace(/:/g,"")+c.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
"true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,q=0;m();var f=document.getElementsByTagName("use");for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect()}catch(w){g=!1}var h=(a=f[c].getAttribute("href")||f[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[c].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var b=
h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute("href")&&f[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),b.length&&(a=e[b],!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&(h=u(b),void 0!==h&&(a=new h,e[b]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",b),a.send(),q+=1)))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?e[b]=!0:e[b].onload&&(e[b].abort(),
delete e[b].onload,e[b]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();

// touch-or-mouse
/*! Touch Or Mouse - v0.2 - 2014-10-10
 * Shared at https://gist.github.com/lmeurs/e5db12f0b3ef43f9cd65
 * Demonstrated at http://jsfiddle.net/lmeurs/uo4069nh
 * Discussed at http://stackoverflow.com/a/26145343/328272
 * Copyright (c) 2014 Laurens Meurs, wiedes.nl; Licensed MIT */
(function(e){"use strict";var t={ghostEventDelay:1e3};var n={init:function(n){var r=this;if(!r.data("touchOrMouse")){r.on("touchstart.touchOrMouse touchend.touchOrMouse",function(t){e(this).data("touchOrMouse").touchEventInProgress=t.type==="touchstart";e(this).data("touchOrMouse").lastTouchEventTimestamp=Date.now()}).data("touchOrMouse",{options:e.extend(t,n||{}),touchEventInProgress:false,lastTouchEventTimestamp:0})}return r},get:function(t){var n=this,r=n.data("touchOrMouse"),i=e(t.delegateTarget).data("touchOrMouse");if(!i){e(t.delegateTarget).data("touchOrMouse",i={})}var s=r.touchEventInProgress||r.lastTouchEventTimestamp>Date.now()-r.options.ghostEventDelay||t.type==="mouseleave"&&i.lastMouseEnterEventWasInvokedByTouch;if(t.type==="mouseenter"){i.lastMouseEnterEventWasInvokedByTouch=s}return s?"touch":"mouse"}};e.fn.touchOrMouse=function(e,t){return n[e].call(this,t)}})(jQuery);

// custom-cursor
$("body").append('<div class="cursor"></div>');
var scrollY = 0, scrollX = 0;
$(document).mousemove(function (e) {
    $(".cursor").css("top", e.pageY - scrollY + "px").css("left", e.pageX - scrollX + "px");
});
$(document).scroll(function (e) {
    scrollY = $(window).scrollTop();
    scrollX = $(window).scrollLeft();
});
setInterval(function(){scroll = $(window).scrollTop();}, 500);
$("a, button, input, textarea, select, label").hover(function (e) {
    $(this).addClass("msty_cur");
    $(".cursor").addClass("overlink");
}, function (e) {
    $(".cursor").removeClass("overlink");
});

// functions
var project = {},
    scrollTop,
    scrollVar = 0,
    winWidth,
    winHeight,
    $search, $searchModal,
    $html = document.getElementsByTagName('html'),
    $header;

/* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

project.headerFixed = function(){

    if(scrollTop <= 80){
        $header.removeClass('simple-header');
        scrollVar = 0;
    }
    else if(scrollTop > scrollVar){
        $header.addClass('simple-header');
        scrollVar = scrollTop;
    }
    else {
        $header.removeClass('simple-header');
        scrollVar = scrollTop;
    }
};

    /*
     ============= page overflow
    */

project.ovhEnable = function(){
    $html[0].classList.add('ovh');
};
project.ovhDisable = function(){
    $html[0].classList.remove('ovh');
};

    /*
     ============= search modal reset
    */

project.searchReset = function(){
    var $searchForm = $('.search-form'),
        $searcCloneText = $searchForm.find('.clone-text .text'),
        $searcCloneBox = $searchForm.find('.input-dublicate'),
        $searcReset = $searchForm.find('.reset'),
        $searchInput = $('.search-input');

    function visibleReset(value){
        var inputValue = value;
        if(inputValue == ''){
            $searcCloneBox.removeClass('visible');
        }
        else {
            $searcCloneBox.addClass('visible');
        }
    }

    $searchInput.keyup(function (e) {
        var _thisVal = $(this).val();
        $searcCloneText.text(_thisVal);
        visibleReset(_thisVal);
    });

    $searcReset.click(function () {
        $searcCloneText.text('');
        visibleReset('');
    });
};

    /*
     ============= sticky sharing
    */

project.fixingSharing = function(share,box,boxHeight){

    var $shareBoxOffset = box.offset().top,
        $shareHeight = share.height(),
        maxShareScroll = $shareBoxOffset + boxHeight - $shareHeight;

    if(scrollTop < $shareBoxOffset){
        share.removeClass('fixed bottom');
    }
    else if(scrollTop > maxShareScroll){
        share.removeClass('fixed');
        share.addClass('bottom');
    }
    else {
        share.addClass('fixed');
        share.removeClass('bottom');
    }

};

project.stickySharing = function(){
    var $sharing = $('.sharing'),
        $shareBox = $sharing.closest('.text-box--layout'),
        $shareBoxHeight = $shareBox.height();

    project.fixingSharing($sharing,$shareBox,$shareBoxHeight);
    $(window).scroll(function (e) {
        project.fixingSharing($sharing,$shareBox,$shareBoxHeight);
    });

};


/* ----------------------------------- plugins ----------------------------------- */

project.carousel = function() {
    var $carouselBox = $('[data-owl="blog"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: true,
        nav: true,
        navText: ['',''],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20
            },
            1201: {
                items: 3,
                margin: 30
            },
            1367: {
                items: 3,
                margin: 50
            }
        }
    })
};

// scripts
$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    $header = $('#header');
    $search = $('#showSearch');
    $support = $('#showSupport');
    $modal = $('.modal');

    /* ------------------------------- get window values ------------------------------- */

    scrollTop = $(window).scrollTop();
    function getWindowSizes() {
        winWidth = $(window).width();
        winHeight = $(window).height();
    }

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header burger
    */

    $('#burger').click(function () {
        $header.removeClass('simple-header');
    });

    /*
     ============= modals
    */

    $search.on('click',function () {
        project.ovhEnable();
        $header.removeClass('simple-header');
        $('.search-modal').addClass('active');
    });

    $support.on('click',function () {
        project.ovhEnable();
        $header.removeClass('simple-header');
        $('.support-modal').addClass('active');
    });

    $modal.find('.close').on('click',function () {
        project.ovhDisable();
        $modal.removeClass('active');
    });

    /*
     ============= document click events
    */

    function documentClick() {
        $(document).click(function(e){
            // var targ = $(e.target);
            // if(targ.parents('#searchForm').length == 0){
            //     if(targ.parents('#search_btn').length == 0){
            //         search.removeClass('active');
            //         nav.removeClass('hidden');
            //     }
            // }
            //
            // if(targ.parents('.language').length == 0){
            //     lang.removeClass('show')
            // }
        })
    }




    /* --------------------------------- document load --------------------------------- */

    documentClick();
    project.headerFixed();
    getWindowSizes();
    if($('.search-form').length > 0){
        project.searchReset();
    }
    if($('.sharing').length > 0){
        project.stickySharing();
    }


    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        scrollTop = $(window).scrollTop();
        project.headerFixed();
    });

});