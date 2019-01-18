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