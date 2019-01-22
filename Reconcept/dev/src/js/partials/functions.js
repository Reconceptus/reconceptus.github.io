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
     ============= file input
    */

project.fileInput = function(){

    var inputVox = $('.file');
    inputVox.each(function () {
        var _this = $(this),
            inputEl = _this.find('input[type="file"]'),
            infoArea = _this.find('.file-text'),
            resetBtn = _this.find('.reset'),
            fileNameDefault = infoArea.attr('data-default-text');

        inputEl.change(function (e) {
            var fileName = e.target.files[0].name;
            infoArea.text(fileName);
            _this.addClass('has-file');
        });

        resetBtn.click(function () {
            inputEl.val('');
            infoArea.text(fileNameDefault);
            _this.removeClass('has-file');
        });

    });

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
