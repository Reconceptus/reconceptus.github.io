// imports
import './vendor/detect.ie';
import './vendor/device.min';
import './vendor/svgxuse.min';

import $ from 'jquery';

// functions
const functions = {
    scroll: require('./modules/scroll')
};

// scripts
$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    let scrollTop,
        winWidth,
        winHeight,
        $html,
        $header = $('#header');

    /* ------------------------------- get window values ------------------------------- */

    scrollTop = $(window).scrollTop();
    function getWindowSizes() {
        winWidth = $(window).width();
        winHeight = $(window).height();
    }


    /* ----------------------------------- functions ----------------------------------- */


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


    let str = `window location is ${window.location}`;
    console.log(str);


    /* --------------------------------- document load --------------------------------- */

    documentClick();
    getWindowSizes();
    functions.scroll();


    if($('[data-owl="blog"]').length > 0){

    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {
        getWindowSizes();
    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {

    });

});