$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var scrollTop,
        scrollVar = 0,
        $header = $('#header'),
        $search = $('#searchForm');

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

    function headerFixed() {
        scrollTop = $(window).scrollTop();
        if(scrollTop > scrollVar){
            $header.addClass('minimized');
            scrollVar = scrollTop;
        }
        else {
            $header.removeClass('minimized');
            scrollVar = scrollTop;
        }
    }


    /*
     ============= document click events
    */

    function documentClick() {
        $(document).click(function(e){
            var targ = $(e.target);
            console.log(targ);

            if(targ.parents('#searchForm').length == 0){
                $search.removeClass('active-search');
            }
            else {
                $search.addClass('active-search');
            }

        })
    }



    /* ----------------------------------- plugins ----------------------------------- */

    function blogCarousel() {
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
                800: {
                    items: 2,
                    margin: 30
                },
                1200: {
                    items: 3,
                    margin: 50
                }
            }
        })

    }



    /* --------------------------------- document load --------------------------------- */

    documentClick();
    headerFixed();

    if($('select').length > 0){}
    if($('[data-owl="blog"]').length > 0){
        blogCarousel();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        headerFixed();
    });

});