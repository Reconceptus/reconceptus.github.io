!function(e,o){if("function"==typeof define&&define.amd)define(["exports"],o);else if("undefined"!=typeof exports)o(exports);else{var t={};o(t),e.bodyScrollLock=t}}(this,function(exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var e={get passive(){n=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform),d=null,l=[],u=!1,c=-1,a=void 0,s=void 0,v=function(e){var o=e||window.event;return 1<o.touches.length||(o.preventDefault&&o.preventDefault(),!1)},t=function(){setTimeout(function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)})};exports.disableBodyScroll=function(r,e){var t;i?r&&!l.includes(r)&&(l=[].concat(function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}(l),[r]),r.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},r.ontouchmove=function(e){var o,t,n,i;1===e.targetTouches.length&&(t=r,i=(o=e).targetTouches[0].clientY-c,t&&0===t.scrollTop&&0<i?v(o):(n=t)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&i<0?v(o):o.stopPropagation())},u||(document.addEventListener("touchmove",v,n?{passive:!1}:void 0),u=!0)):(t=e,setTimeout(function(){if(void 0===s){var e=!!t&&!0===t.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;e&&0<o&&(s=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}),d||(d=r))},exports.clearAllBodyScrollLocks=function(){i?(l.forEach(function(e){e.ontouchstart=null,e.ontouchmove=null}),u&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),u=!1),l=[],c=-1):(t(),d=null)},exports.enableBodyScroll=function(o){i?(o.ontouchstart=null,o.ontouchmove=null,l=l.filter(function(e){return e!==o}),u&&0===l.length&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),u=!1)):d===o&&(t(),d=null)}});

$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    $win = document.body;
    $html = $('html');
    $header = $('#header');
    $search = $('#searchForm');

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header burger
    */

    $('.burger').click(function () {
        if($header.hasClass('is-open')){
            $header.removeClass('is-open');
            $html.removeClass('ovh');
        }
        else {
            $header.addClass('is-open')
            $html.addClass('ovh');
        }
    });

    /*
     ============= modals open/close
    */

    $(document).on('click','.show-modal',function (e) {
        e.preventDefault();
        var $thisData = $(this).attr('data-modal');
        $('.modal[data-modal="'+$thisData+'"]').addClass('active');
        bodyScrollLock.disableBodyScroll();
    });

    $('.modal .close').click(function (e) {
        e.preventDefault();
        $('.modal').removeClass('active successful');
        bodyScrollLock.enableBodyScroll();
    });

    $('.modal[data-modal="custom"] .close').click(function (e) {
        var $customModal = $('.modal[data-modal="custom"]');
        $customModal.find('.modal-custom--title').html('');
        $customModal.find('.modal-custom--text').html('');
    });

    /*
     ============= close item on the map
    */

    $('.map-item .close').click(function () {
        $(this).closest('.map-item').removeClass('active');
    });

    /*
     ============= document click events
    */

    function documentClick() {
        $(document).click(function(e){
            var targ = $(e.target);
            // console.log(targ);

            if(targ.parents('#searchForm').length == 0){
                $search.removeClass('active-search');
            }
            else {
                $search.addClass('active-search');
            }

            if(targ.parents('.region-dropbox').length == 0){
                $('.region-dropbox').removeClass('active');
            }

        })
    }

    /*
     ============= copy ref link
    */

    var isPrevent = false;
    $('.copy-btn').click(function (e) {
        var _link = $(this).closest('.link');
        if (isPrevent){
            e.preventDefault;
        }
        else {
            _link.addClass('copied');
            isPrevent = true;
            setTimeout(function () {
                isPrevent = false;
                _link.removeClass('copied');
            },3000)
        }

    });

    /*
     ============= toggle ref link
    */
    if($('.ref-link').length > 0){
        if(localStorage.reflink == 'hidden'){
            $('.ref-link').addClass('hidden')
        }
    }

    $(document).on('click','.ref-link--toggle',function () {
        var _this = $(this),
            _ref = _this.closest('.ref-link');

        _ref.toggleClass('hidden');

        localStorage.reflink = _ref.hasClass('hidden') ? 'hidden' : 'shown'
    });

    /* --------------------------------- document load --------------------------------- */

    documentClick();
    project.headerFixed();

    if($('select').length > 0){}
    if($('[data-owl="blog"]').length > 0){
        project.blogCarousel();
    }
    if($('[data-owl="reviews"]').length > 0){
        project.reviewCarousel();
    }
    if($('[data-owl="projects"]').length > 0){
        project.projectsCarousel();
    }
    if($('[data-owl="likes"]').length > 0){
        project.likesCarousel();
    }
    if($('[data-owl="plans"]').length > 0){
        project.planCarousel();
    }
    if($('[data-owl="objects"]').length > 0){
        project.objectCarousel();
    }
    if($('[data-owl="partner"]').length > 0){
        project.partnerCarousel();
    }
    if($('input[type="file"]').length > 0){
        if($('#supportFileUpload').length > 0){project.supportInputFile();}
        if($('#customFileUpload').length > 0){project.customInputFile();}
    }
    if($('.text-box').length > 0){
        project.textImagesParcing();
    }
    if($('.video-box').length > 0){
        project.videoBoxHeight();
    }
    if($('.counter').length > 0){
        project.counter();
    }
    if($('.show-more').length > 0){
        project.showMore();
    }
    if($('.projects-filters').length > 0){
        project.homeTabs();
    }
    if($('.tabs-nav').length > 0){
        project.tabsBox();
    }
    if($('.region-dropbox').length > 0){
        project.regionDropBox();
    }
    if($('.map-box').length > 0){
        project.mapMarkers();
    }
    if($('.fixed-scrollbar').length > 0){
        project.fixedSidebar();
    }
    if($('.scrolled').length > 0){
        project.customScroll();
    }
    if($('.project-gallery').length > 0){
        project.initProjectGallery();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        project.headerFixed();
    });

});