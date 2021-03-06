$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var scrollTop,
        $header = $('#header');

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

    function headerFixed() {
        scrollTop = $(window).scrollTop();
        if(scrollTop > 0){
            $header.addClass('minimized')
        }
        else {
            $header.removeClass('minimized')
        }
    }

    /*
     ============= move words
    */

    function wordsMoving() {

        $('.moving-word').each(function () {
            var $thisWord = $(this),
                $thisOffset = $thisWord.offset().top;

            $(window).scroll(function () {
                var needOffset = scrollTop + 50;
                if(needOffset > $thisOffset){
                    $thisWord.css('margin-top',needOffset-$thisOffset + 'px');
                    $thisWord.addClass('opacity');
                }
                else {
                    $thisWord.css('margin-top',0);
                    $thisWord.removeClass('opacity');
                }
            });

        });
    }

    /*
     ============= parse text elements
    */

    function textParsing() {
        $('.text-box img').each(function () {
            var $thisIMG = $(this);
            if($thisIMG.css('float') == 'left'){
                $thisIMG.addClass('left-align');
            }
            if($thisIMG.css('float') == 'right'){
                $thisIMG.addClass('right-align');
            }
            $thisIMG.attr('style','');
        });
        $('.text-box iframe').each(function () {
            var $thisIframe = $(this);
            $thisIframe.wrap('<div class="iframe"></div>');
        });
    }

    /*
    ============= show reset form
   */

    function showResetForm(){
        var $thisBox = $('.blog--search'),
            $thisInput = $thisBox.find('input'),
            $thisReset = $thisBox.find('.reset');

        $thisInput.keyup(function () {
            if($thisInput.val().trim() != ''){
                $thisBox.addClass('has-text')
            }
            else{
                $thisBox.removeClass('has-text')
            }
        });

        $thisReset.click(function () {
            $thisBox.removeClass('has-text');
        });
    }

    /*
    ============= open modal
   */

    $('.show-modal').click(function (e) {
        e.preventDefault();
        var $thisModal = $(this).attr('data-modal');
        $('.modal[data-modal="'+$thisModal+'"]').addClass('active');
    });

    $('.modal .close').click(function () {
        $('.modal').removeClass('active');
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
    headerFixed();

    if($('.blog--search').length > 0){showResetForm()}
    if($('.text-box').length > 0){textParsing()}
    if($('.moving-word').length > 0){wordsMoving()}

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        headerFixed();
    });

});