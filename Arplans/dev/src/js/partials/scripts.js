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
     ============= file input
    */

    function inputFile() {
        var input = document.getElementById( 'fileUpload' );
        var infoArea = document.getElementById( 'fileName' );

        input.addEventListener( 'change', showFileName );

        function showFileName( event ) {

            var input = event.srcElement;
            var fileName = input.files[0].name;

            infoArea.textContent = fileName;
        }
    }

    /*
     ============= show more
    */

    function showMore() {
        var showMore = $('.show-more');

        showMore.each(function () {
            var $this = $(this),
                $thisParent = $this.closest('.show-more-parent'),
                $thisHideBlock = $thisParent.find('.show-more-hidden');

            $this.click(function () {
                $thisHideBlock.slideToggle(300);
            })

        })
    }

    /*
     ============= counter
    */

    function counter() {
        var counterBox = $('.counter');
        counterBox.each(function () {
            var $this = $(this),
                $this_plus = $this.find('.plus'),
                $this_minus = $this.find('.minus'),
                $this_result = $this.find('.result'),
                $this_value = $this_result.val();

            $this_minus.click(function () {
                if($this_value == 1){
                    $this_value = $this_value - 1;
                    $this_minus.addClass('disabled');
                }
                else if($this_value > 1) {
                    $this_value = $this_value - 1;
                }
                $this_result.val($this_value);
            });

            $this_plus.click(function () {
                $this_value = parseInt($this_value) + 1;
                $this_minus.removeClass('disabled');
                $this_result.val($this_value);
            });


        });
    }


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


    function projectsCarousel() {
        var $carouselBox = $('[data-owl="projects"]'),
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
                    items: 8,
                    margin: 40
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
    if($('[data-owl="projects"]').length > 0){
        projectsCarousel();
    }
    if($('input[type="file"]').length > 0){
        inputFile();
    }
    if($('.counter').length > 0){
        counter();
    }
    if($('.show-more').length > 0){
        showMore();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        headerFixed();
    });

});