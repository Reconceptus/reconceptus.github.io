$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    $win = $(window);
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

    $('.show-modal').click(function (e) {
        e.preventDefault();
        var $thisData = $(this).attr('data-modal');
        $('.modal[data-modal="'+$thisData+'"]').addClass('active')
    });

    $('.modal .close').click(function (e) {
        e.preventDefault();
        $('.modal').removeClass('active successful');
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
        project.inputFile();
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