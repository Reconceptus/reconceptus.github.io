var project = {},
    scrollTop,
    scrollVar = 0,
    winWidth,
    $search, $searchModal,
    $html = document.getElementsByTagName('html'),
    $header;

/* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

project.headerFixed = function(){
    scrollTop = $(window).scrollTop();
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
