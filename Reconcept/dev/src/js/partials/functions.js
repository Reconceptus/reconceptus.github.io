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
        $('.sidebar').length > 0 ? $('.sidebar').removeClass('subscribe-bar') : '';
        scrollVar = 0;
    }
    else if(scrollTop > scrollVar){
        $header.addClass('simple-header');
        $('.sidebar').length > 0 ? $('.sidebar').removeClass('subscribe-bar') : '';
        scrollVar = scrollTop;
    }
    else {
        $header.removeClass('simple-header');
        $('.sidebar').length > 0 ? $('.sidebar').addClass('subscribe-bar') : '';
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

project.fixingAside = function(box,boxParent,boxParentHeight,diff,addHeight){

    var difference = diff,
        additionalHeight = addHeight > 0 ? addHeight : 0;

    var $boxOffset = boxParent.offset().top,
        $boxHeight = box.height(),
        maxShareScroll = $boxOffset + boxParentHeight - $boxHeight;

    if(scrollTop < $boxOffset - difference + additionalHeight){
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
        $personBox = $sharing.closest('.text-box--aside').find('.person'),
        $shareBox = $sharing.closest('.text-box--layout'),
        $personBoxHeight = $personBox.height(),
        $shareBoxHeight = $shareBox.height();

    project.fixingAside($sharing,$shareBox,$shareBoxHeight,0,$personBoxHeight);

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

        _this.find('blockquote').wrapInner('<p></p>');
        _this.find('.read-also').closest('p').addClass('read-also--wrap');

        var containerWidth = _this.closest('.text-box--wrap').width();
        _this.find('.text-box--images').css('max-width',containerWidth+'px');

        $(window).resize(function () {
            containerWidth = _this.closest('.text-box--wrap').width();
            _this.find('.text-box--images').css('max-width',containerWidth+'px');
        });


    });
};

    /*
     ============= project link parsing
    */

project.linkParsing = function(){
    var $link = $('.project-link'),
        $linkText = $link.text().trim();

    $link.html('<div class="link-full"></div><div class="link-parts"></div>');

    for(var i=0; i<$linkText.length; i++){
        $('.link-full, .link-parts').append('<span>'+$linkText[i]+'</span>');
    }

};

    /*
     ============= sticky sidebar
    */

project.stickySidebar = function(){
    var $sidebar = $('.sidebar'),
        $sidebarBox = $sidebar.closest('.page-layout'),
        $sidebarBoxHeight = $sidebarBox.height();

    project.fixingAside($sidebar,$sidebarBox,$sidebarBoxHeight,110);
};

    /*
     ============= person ava in profile
    */

project.personAva = function(){
    var $person = $('.text-box--aside .person');

    $person.each(function () {
        var $textBox = $(this).closest('.text-box--layout');
        $textBox.prepend($(this).clone());
    });

};

    /*
      ============= alert message
    */

project.alertMessage = function(title,text) {
    var $customModal = $('.modal[data-modal="custom"]');
    project.ovhEnable();
    if(title){
        $customModal.find('.modal-custom--title').html(title)
    }
    if(text){
        $customModal.find('.modal-custom--text').html(text)
    }
    $customModal.addClass('active');
};


    /*
     ============= rotate img
    */

project.rotateImg = function(){

    $('.rotate-box').each(function () {
        var container = $(this).get(0),
            inner = $('.img', this).get(0);

        // Mouse
        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function(event) {
                var e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function(e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function() {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);
        $(window).resize(function () {
            mouse.setOrigin(container);
        });

        //----------------------------------------------------

        var counter = 0;
        var refreshRate = 10;
        var isTimeToUpdate = function() {
            return counter++ % refreshRate === 0;
        };

        //----------------------------------------------------

        var onMouseEnterHandler = function(event) {
            update(event);
        };

        var onMouseLeaveHandler = function() {
            inner.style = "";
        };

        var onMouseMoveHandler = function(event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //----------------------------------------------------

        var update = function(event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
            );
        };

        var updateTransformStyle = function(x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        //--------------------------------------------------------

        container.onmousemove = onMouseMoveHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmouseenter = onMouseEnterHandler;
    });

};


/* ----------------------------------- plugins ----------------------------------- */


