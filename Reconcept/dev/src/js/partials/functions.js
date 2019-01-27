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
     ============= fixing aside
    */

project.fixingAside = function(box,boxParent,boxParentHeight){

    var $boxOffset = boxParent.offset().top,
        $boxHeight = box.height(),
        maxShareScroll = $boxOffset + boxParentHeight - $boxHeight;

    if(scrollTop < $boxOffset){
        box.removeClass('fixed bottom');
    }
    else if(scrollTop > maxShareScroll){
        box.removeClass('fixed');
        box.addClass('bottom');
    }
    else {
        box.addClass('fixed');
        box.removeClass('bottom');
    }

};

    /*
    ============= sticky sharing
   */

project.stickySharing = function(){
    var $sharing = $('.sharing'),
        $shareBox = $sharing.closest('.text-box--layout'),
        $shareBoxHeight = $shareBox.height();

    project.fixingAside($sharing,$shareBox,$shareBoxHeight);
    $(window).scroll(function (e) {
        project.fixingAside($sharing,$shareBox,$shareBoxHeight);
    });

};

    /*
     ============= text parsing
    */

project.textParsing = function(){
    var $textBox = $('.text-box');
    $textBox.each(function () {
        var _this = $(this);
        _this.find('iframe').wrap('<div class="video"></div>');

        _this.find('img[style*="float: left"]').addClass('align-left');
        _this.find('img[style*="float: right"]').addClass('align-right');
        _this.find('img[style*="margin: auto"]').addClass('align-center');
        _this.find('img[style*="width"]').addClass('has-width');

        _this.find('img[style*="float: right"]').addClass('align-right');
    });
};

    /*
     ============= sticky sidebar
    */

project.stickySidebar = function(){
    var $sidebar = $('.sidebar'),
        $sidebarBox = $sidebar.closest('.page-layout'),
        $sidebarBoxHeight = $sidebarBox.height();

    project.fixingAside($sidebar,$sidebarBox,$sidebarBoxHeight);
    $(window).scroll(function (e) {
        project.fixingAside($sidebar,$sidebarBox,$sidebarBoxHeight);
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
