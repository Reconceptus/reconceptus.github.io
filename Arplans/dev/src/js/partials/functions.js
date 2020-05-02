var project = {},
    scrollTop,
    scrollVar = 0,
    $html,
    $header,
    $search;

/* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

project.headerFixed = function(){
    scrollTop = $(window).scrollTop();

    if(scrollTop > scrollVar){
        $header.addClass('minimized');
        scrollVar = scrollTop;
    }
    else {
        $header.removeClass('minimized');
        scrollVar = scrollTop;
    }
};

    /*
     ============= home video height
    */

project.videoBoxHeight = function(){
    var $videoBox = $('.video-box'),
        $winHeight, $winWidth;

    function setMinHeight(){
        $winWidth = $(window).width();
        $winHeight = $(window).height();
        $winHeight = $winHeight - 60;
        if($winWidth <= 767){
            $videoBox.css('min-height',$winHeight+'px');
        }
        else {
            $videoBox.css('min-height',0);
        }
    }

    setMinHeight();

    $(window).resize(function () {
        setMinHeight();
    });

};

    /*
     ============= home tabs
    */

project.homeTabs = function(){
    $('[data-filter]').click(function () {
        var num = $(this).attr('data-filter');
        $('[data-filter-box]').removeClass('active');
        $('[data-filter]').removeClass('current');

        $('[data-filter-box='+num+']').addClass('active');
        $('[data-filter='+num+']').addClass('current');
    });
};

    /*
     ============= file input in support
    */

project.supportInputFile = function() {
    var input = document.getElementById( 'supportFileUpload' ),
        infoArea = document.getElementById( 'supportFileName' ),
        infoDefault = infoArea.dataset.default,
        removeFile = document.getElementById('supportFileRemove');

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
};

    /*
     ============= file input in contacts
    */

project.customInputFile = function() {
    var input = document.getElementById( 'customFileUpload' ),
        infoArea = document.getElementById( 'customFileName' ),
        infoDefault = infoArea.dataset.default,
        removeFile = document.getElementById('customFileRemove');

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
};

    /*
      ============= show more
    */

project.showMore = function() {
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
};

    /*
      ============= alert message
    */

project.alertMessage = function(title,text) {
    var $customModal = $('.modal[data-modal="custom"]');
    bodyScrollLock.disableBodyScroll();
    if(title){
        $customModal.find('.modal-custom--title').html(title)
    }
    if(text){
        $customModal.find('.modal-custom--text').html(text)
    }
    $customModal.addClass('active');
};

    /*
     ============= show region dropbox
    */

project.regionDropBox = function() {
    var $dropBox = $('.region-dropbox'),
        $dropInput = $dropBox.find('input'),
        $dropLink = $dropBox.find('a');

    $dropInput.focus(function () {
        $dropBox.addClass('active')
    });
    $dropLink.click(function () {
        $dropBox.removeClass('active')
    });
};

    /*
     ============= project tabs
    */

project.tabsBox = function() {
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
};

    /*
     ============= mapboxMarkers
    */

project.mapMarkers = function() {
    $('.map-box').on('click','.on-map',function () {
        var thisLink = $(this),
            thisMarker = thisLink.attr('data-map-object');
        if(thisMarker != undefined){
            $('.map-box .item').removeClass('current');
            thisLink.closest('.item').addClass('current');
            $('.map-box .scaled').removeClass('scaled');
            $('.map-box img[src*='+thisMarker+']')
                .parent()
                .addClass('scaled');
        }
    });

    $('.map-box').on('click','img[src*=custom_marker]',function () {

        $('.map-box img[src*=custom_marker]').parent().removeClass('scaled');

        var thisSrc = $(this).attr('src'),
            thisMarker = thisSrc.split('custom_')[1];

        $('.map-box img[src*='+thisMarker+']').parent().addClass('scaled');

        $('.map-box .item').removeClass('current');
        $('[data-map-object='+thisMarker+']').closest('.item').addClass('current');

        $('.map-box--aside').addClass('short');

    });

    $('.map-box').on('click','.show-all-btn',function () {

        $('.map-box--aside').removeClass('short');

    });
};


    /*
     ============= fixed sidebar
    */

project.fixedSidebar = function() {
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
        $winScroll = scrollTop;
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

    var isScrolling;
    window.addEventListener('scroll', function(event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function(){
            setOffsets();
            setFixPosition();
        }, 10);
    }, false);


    // $(window).scroll(function () {
    //     setOffsets();
    //     setFixPosition();
    // });

    setTimeout(function () {
        setOffsets();
        setFixPosition();
    },500);

    $('.show-modal-filter').click(function () {
        $('.fixing').slideToggle(300);
    });
};

    /*
    ============= parsing text elements
   */

project.textImagesParcing = function () {
    $('.text-box img').each(function () {
        var $thisIMG = $(this);
        if($thisIMG.css('float') == 'left'){
            $thisIMG.addClass('left-align');
            $thisIMG.attr('style','');
        }
        if($thisIMG.css('float') == 'right'){
            $thisIMG.addClass('right-align');
            $thisIMG.attr('style','');
        }

    });
};


    /*
    ============= counter
   */

project.counter = function() {
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
            $this_value = +$this_value + 1;
            $this_minus.removeClass('disabled');
            $this_result.val($this_value);
        });
    });
};

/* ----------------------------------- plugins ----------------------------------- */

project.blogCarousel = function() {
    var $carouselBox = $('[data-owl="blog"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: false,
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

project.reviewCarousel = function() {
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
                items: 1,
                margin: 20
            },
            601: {
                items: 4,
                margin: 30
            },
            1025: {
                items: 4,
                margin: 40
            },
            1201: {
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
};

project.projectsCarousel = function() {
    var $carouselBox = $('[data-owl="projects"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: false,
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
};

project.likesCarousel = function() {
    var $carouselBox = $('[data-owl="likes"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: false,
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
};

project.planCarousel = function() {
    var $carouselBox = $('[data-owl="plans"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: false,
        nav: true,
        navText: ['',''],
        dots: false,
        items: 1
    });

    $('.plan-item [data-plan]').click(function () {
        var $thisPlan = $(this).data('plan');
        $('.gallery-items [data-plan='+$thisPlan+']').click();
    })
};

project.objectCarousel = function() {
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
};

project.partnerCarousel = function() {
    var $carouselBox = $('[data-owl="partner"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: true,
        nav: true,
        navText: ['',''],
        dots: true,
        items: 1
    });
};

project.customScroll = function() {
    $('.scrolled').each(function () {
        var $this = $(this);
        if($this.hasClass('catalog-filters') || $this.hasClass('catalog-filters--form')){
            if($(window).width() > 1200){
                $this.mCustomScrollbar({
                    theme: 'minimal-dark'
                });
            }
        }
        else {
            $this.mCustomScrollbar({
                theme: 'minimal-dark'
            });
        }

    });
};

project.initProjectGallery = function () {
    $('.project-gallery').projectGallery();
};