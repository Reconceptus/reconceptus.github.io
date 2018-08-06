$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var scrollTop,
        scrollVar = 0,
        $html = $('html'),
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
     ============= file input
    */

    function inputFile() {
        var input = document.getElementById( 'fileUpload' ),
            infoArea = document.getElementById( 'fileName' ),
            infoDefault = infoArea.dataset.default,
            removeFile = document.getElementById('fileRemove');

        input.addEventListener( 'change', showFileName );
        removeFile.addEventListener('click', removingFile);

        function showFileName( event ) {
            var input = event.srcElement;
            var fileName = input.files[0].name;

            infoArea.textContent = fileName;
            removeFile.classList.remove('hide');
        }

        function removingFile() {
            input.value = '';
            infoArea.textContent = infoDefault;
            removeFile.classList.add('hide');
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
                if($thisParent.hasClass('show')){
                    $thisParent.removeClass('show');
                }
                else {
                    $thisParent.addClass('show');
                }
            })

        })
    }

    /*
     ============= show region dropbox
    */

    function regionDropBox() {
        var $dropBox = $('.region-dropbox'),
            $dropInput = $dropBox.find('input'),
            $dropLink = $dropBox.find('a');

        $dropInput.focus(function () {
            $dropBox.addClass('active')
        });
        $dropLink.click(function () {
            $dropBox.removeClass('active')
        });
    }

    /*
     ============= tabs dropbox
    */

    function tabsBox() {
        var $dropBox = $('.tabs-nav'),
            $dropInput = $dropBox.find('.selected'),
            $dropLink = $dropBox.find('label');

        $dropInput.click(function () {
            $dropBox.toggleClass('active');
        });
        $dropLink.click(function () {
            $dropBox.removeClass('active');
            $dropInput.text($(this).text())
        });
    }

    /*
     ============= close item on the map
    */

    function closeMapItem() {
        $('.map-item .close').click(function () {
            $(this).closest('.map-item').removeClass('active');
        });
    }

    /*
     ============= fixed sidebar
    */

    function fixedSidebar() {
        var $thisBar = $('.fixed-scrollbar'),
            $thisBox = $thisBar.find('.fixing'),
            $headerHeight = 180,
            $thisBarTopOffset,
            $thisBarLeftOffset,
            $needBarTopOffset,
            $barPosition,
            $barHeight,
            $barBoxHeight,
            $winScroll;

        function setOffsets() {
            $thisBarTopOffset = $thisBar.offset().top;
            $thisBarLeftOffset = $thisBar.offset().left;
            $barHeight = $thisBar.height();
            $barBoxHeight = $thisBox.height();
        }

        function setFixPosition() {
            $winScroll = $(window).scrollTop();
            $needBarTopOffset = $winScroll + $headerHeight;
            $barPosition = $needBarTopOffset - $thisBarTopOffset;

            if($needBarTopOffset >= $thisBarTopOffset){

                if($barHeight > ($barBoxHeight + $barPosition)){

                    $thisBar.addClass('fixed');
                    $thisBar.removeClass('bottom');
                    $thisBox.css({
                        'top':$headerHeight+'px',
                        'left':$thisBarLeftOffset+'px'
                    });
                }
                else {
                    $thisBar.addClass('bottom');
                    $thisBar.removeClass('fixed');
                }

            }
            else {
                $thisBar.removeClass('fixed');
            }

        }

        setOffsets();
        setFixPosition();

        $(window).resize(function () {
            setOffsets();
            setFixPosition();
        });

        $(window).scroll(function () {
            setOffsets();
            setFixPosition();
        });

        $('.show-modal-filter').click(function () {
            $('.modal-filter').addClass('active');
        });
        $('.modal-filter .close').click(function () {
            $('.modal-filter').removeClass('active');
        });
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

            if(targ.parents('.region-dropbox').length == 0){
                $('.region-dropbox').removeClass('active');
            }

        })
    }



    /* ----------------------------------- plugins ----------------------------------- */

    function rangeInput() {
        var keypressSlider = document.getElementById('keypress'),
            input0 = document.getElementById('input-with-keypress-0'),
            input1 = document.getElementById('input-with-keypress-1'),
            inputs = [input0, input1];

        noUiSlider.create(keypressSlider, {
            start: [40, 100],
            step: 10,
            connect: true,
            range: {
                'min': 40,
                '25%': [100, 10],
                '65%': [200, 10],
                'max': 300
            },
            format: wNumb({
                decimals: 0
            }),
            pips: {
                mode: 'range',
                density: 3
            }
        });

        keypressSlider.noUiSlider.on('update', function( values, handle ) {
            inputs[handle].value = values[handle];
        });

        function setSliderHandle(i, value) {
            var r = [null,null];
            r[i] = value;
            keypressSlider.noUiSlider.set(r);
        }

        inputs.forEach(function(input, handle) {

            input.addEventListener('change', function(){
                setSliderHandle(handle, this.value);
            });

            input.addEventListener('keydown', function( e ) {

                var values = keypressSlider.noUiSlider.get();
                var value = Number(values[handle]);

                switch ( e.which ) {
                    case 13:
                        setSliderHandle(handle, this.value);
                        break;
                }
            });
        });
    }

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
    }

    function reviewCarousel() {
        var $carouselBox = $('[data-owl="reviews"]'),
            $carousel = $carouselBox.find('.owl-carousel');

        $carousel.owlCarousel({
            loop: true,
            nav: true,
            navText: ['',''],
            dots: false,
            navSpeed: 300,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2,
                    margin: 30
                },
                1200: {
                    items: 4,
                    mouseDrag: false,
                    margin: 60
                }
            }
        })

        $('#t_prev').click(function () {
            $carouselBox.find('.owl-prev').click()
        })
        $('#t_next').click(function () {
            $carouselBox.find('.owl-next').click()
        })
        $('#t_prev').click();
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
                    items: 2,
                    margin: 20
                },
                601: {
                    items: 3,
                    margin: 20
                },
                768: {
                    items: 4,
                    margin: 20
                },
                1025: {
                    items: 5,
                    margin: 20
                },
                1201: {
                    items: 6,
                    margin: 30
                },
                1367: {
                    items: 7,
                    margin: 30
                },
                1601: {
                    items: 8,
                    margin: 40
                }
            }
        })
    }

    function likesCarousel() {
        var $carouselBox = $('[data-owl="likes"]'),
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
                    items: 4,
                    margin: 40
                }
            }
        })
    }

    function planCarousel() {
        var $carouselBox = $('[data-owl="plans"]'),
            $carousel = $carouselBox.find('.owl-carousel');

        $carousel.owlCarousel({
            loop: true,
            nav: true,
            navText: ['',''],
            dots: false,
            items: 1
        })
    }

    function objectCarousel() {
        var $carouselBox = $('[data-owl="objects"]'),
            $carousel = $carouselBox.find('.owl-carousel');

        $carousel.owlCarousel({
            loop: true,
            nav: true,
            navText: ['',''],
            dots: false,
            items: 1,
            onTranslated: function (e) {
                var currentNum = $carousel.find('.owl-item.active .object-item').attr('data-num');
                $('#owlCurrent').text(currentNum)
            }
        });
    }

    function partnerCarousel() {
        var $carouselBox = $('[data-owl="partner"]'),
            $carousel = $carouselBox.find('.owl-carousel');

        $carousel.owlCarousel({
            loop: true,
            nav: true,
            navText: ['',''],
            dots: true,
            items: 1
        });
    }

    function customScroll() {
        $('.scrolled').each(function () {
            var $this = $(this);
            $this.mCustomScrollbar({
                theme: 'minimal-dark'
            });
        });
    }

    /* --------------------------------- document load --------------------------------- */

    documentClick();
    headerFixed();

    if($('select').length > 0){}
    if($('[data-owl="blog"]').length > 0){
        blogCarousel();
    }
    if($('[data-owl="reviews"]').length > 0){
        reviewCarousel();
    }
    if($('[data-owl="projects"]').length > 0){
        projectsCarousel();
    }
    if($('[data-owl="likes"]').length > 0){
        likesCarousel();
    }
    if($('[data-owl="plans"]').length > 0){
        planCarousel();
    }
    if($('[data-owl="objects"]').length > 0){
        objectCarousel();
    }
    if($('[data-owl="partner"]').length > 0){
        partnerCarousel();
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
    if($('.tabs-nav').length > 0){
        tabsBox();
    }
    if($('.map-item').length > 0){
        closeMapItem();
    }
    if($('.region-dropbox').length > 0){
        regionDropBox();
    }
    if($('.range').length > 0){
        rangeInput();
    }
    if($('.fixed-scrollbar').length > 0){
        fixedSidebar();
    }
    if($('.scrolled').length > 0){
        customScroll();
    }
    if($('.project-gallery').length > 0){
        $('.project-gallery').projectGallery();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        headerFixed();
    });

});