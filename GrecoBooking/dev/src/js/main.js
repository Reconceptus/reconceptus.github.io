$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var btn = $('#search_btn'),
        nav = $('.nav'),
        search = btn.closest('.search');

    /* ----------------------------------- functions ----------------------------------- */

    /*
    ============= show/hide search field
    */

    function showSearch() {
        btn.click(function () {
            search.addClass('active');
            nav.addClass('hidden');
        })
    }

    /*
     ============= document click events
    */

    function documentClick() {
        $(document).click(function(e){
            var targ = $(e.target);
            if(targ.parents('#searchForm').length == 0){
                if(targ.parents('#search_btn').length == 0){
                    search.removeClass('active');
                    nav.removeClass('hidden');
                }
            }
        })
    }

    /*
     ============= custom select init
    */

    function select2() {
        $('select').each(function () {
            $(this).select2({
                dropdownCssClass: 'custom-select',
                minimumResultsForSearch: Infinity
            });
        })
    }

    /*
     ============= datepickers
    */

    function datePickerFullRequest() {
        var dateToday = new Date();
        var dates = $("#arrivalDate, #departureDate").datepicker({
            changeMonth:true,
            changeYear:true,
            numberOfMonths: 2,
            minDate: dateToday,
            beforeShow:function () {
                var picker = $('#picker'),
                    pickerOffset = picker.offset().top,
                    scrollTop = $(window).scrollTop(),
                    needScroll = pickerOffset-350;

                if(scrollTop > needScroll){
                    picker.addClass('down');
                }
                else {picker.addClass('up');}
                picker.addClass('show');
                $('#picker .calendar').prepend($('#ui-datepicker-div'));
                if($('.villa-request').length > 0){
                    $('.villa-request .pickerfields .input').addClass('filled')
                }
            },
            onClose: function () {
                $('#picker').removeClass('show up down');
                if($('.villa-request').length > 0){
                    if($("#arrivalDate").val() == '' && $("#departureDate").val() == ''){
                        $('.villa-request .pickerfields .input').removeClass('filled')
                    }
                }
            },
            onSelect: function(selectedDate){
                var option = this.id == "arrivalDate" ? "minDate" : "maxDate",
                    instance = $( this ).data( "datepicker" ),
                    date = $.datepicker.parseDate(
                        instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
                        selectedDate, instance.settings);
                dates.not(this).datepicker("option", option, date);

            }
        });
    }

    function datePickerFastRequest() {
        var dateToday = new Date();
        var dates = $("#check_in, #check_out").datepicker({
            changeMonth:true,
            changeYear:true,
            numberOfMonths: 2,
            minDate: dateToday,
            beforeShow:function () {
                var picker = $('#fastpicker'),
                    pickerOffset = picker.offset().top,
                    scrollTop = $(window).scrollTop(),
                    needScroll = pickerOffset-400;

                if(scrollTop > needScroll){
                    picker.addClass('down');
                }
                else {picker.addClass('up');}
                picker.addClass('show');
                $('#fastpicker .calendar').prepend($('#ui-datepicker-div'));
            },
            onClose: function () {
                $('#fastpicker').removeClass('show up down');
            },
            onSelect: function(selectedDate){
                var option = this.id == "check_in" ? "minDate" : "maxDate",
                    instance = $( this ).data( "datepicker" ),
                    date = $.datepicker.parseDate(
                        instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
                        selectedDate, instance.settings);
                dates.not(this).datepicker("option", option, date);
            }
        });
    }

    /*
     ============= carousel for villa
    */

    function villaCarousel() {

        $('.villa-carousel').owlCarousel({
            loop:false,
            nav:true,
            navText:['',''],
            dots: false,
            items:1
        })

    }

    /*
     ============= villa request inputs
    */

    function showInput() {

        function effectInp(addr){
            if(addr.val().trim() != ''){
                addr.parent().addClass('filled')
            }
            else{addr.parent().removeClass('filled')}
        }
        $('.villa-request .input input').each(function(){
            effectInp($(this))
        })
        $('.villa-request .input input').change(function(){
            effectInp($(this))
        })

    }

    /*
     ============= navigation for villa
    */

    function villaPosition(el) {

        var currentScrollTop = $(window).scrollTop(),
            villaNavHeight = $('.villa-nav').height(),
            currentVillaOffset = $('.villa-nav').offset().top,
            villaContentHeight = $('.villa-page--wrap').height(),
            scrollForDetachFix = currentVillaOffset + villaContentHeight - 0.5*villaNavHeight;

        if(currentScrollTop > currentVillaOffset){
            if(currentScrollTop < scrollForDetachFix){
                el.removeClass('absolute');
                el.addClass('fixed');
            }
            else {
                el.removeClass('fixed');
                el.addClass('absolute');
            }
        }
        else {
            el.removeClass('fixed absolute');
        }
    }

    function scrollToVillaPart() {
        $('[data-nav-part]').click(function () {
            var villaNavHeight = $('.villa-nav').height(),
                dataClick = $(this).attr('data-nav-part'),
                targetOffset = $('[data-villa-part="'+dataClick+'"]').offset().top;
            villaNavHeight = 0.5*villaNavHeight + 20;
            $('html,body').animate({scrollTop : targetOffset-villaNavHeight},300);
        })
    }

    function villaNavigation() {
        var $villaNav = $('#villaNav');
        villaPosition($villaNav);
        scrollToVillaPart();
        $(window).scroll(function () {
            villaPosition($villaNav);
        })
    }

    /*
    ============= position for villa request
   */

    function setRequestPosition(el,vH) {
        var currentScrollTop = $(window).scrollTop(),
            currentWinHeight = $(window).height(),
            villaNavHeight = $('.villa-nav').height(),
            currentRequestOffset = el.offset().top,
            requestBoxHeight = el.height(),
            requestFormHeight = el.find('.villa-request').height(),
            scrollForFix = currentRequestOffset - 2*villaNavHeight,
            sizeForFix = currentScrollTop + 0.5*currentWinHeight,
            sizeForBottom = requestBoxHeight - requestFormHeight - vH + currentRequestOffset,
            $top = sizeForFix - currentRequestOffset;

        if(currentScrollTop > scrollForFix){
            if(currentScrollTop < sizeForBottom){
                el.removeClass('absolute');
                el.addClass('fixed');
                // el.find('.villa-request').css('top', $top + 'px');
            }
            else {
                el.removeClass('fixed');
                el.addClass('absolute');
            }
        }
        else {
            el.removeClass('fixed absolute');
            el.find('.villa-request').attr('style','');
        }
    }

    function villaRequestPosition() {
        var $villaReq = $('.villa-layout--side'),
            $villaH = $villaReq.find('.villa-request').height();
        setRequestPosition($villaReq,$villaH);
        $(window).scroll(function () {
            setRequestPosition($villaReq,$villaH);
        })
    }


    /* --------------------------------- document load --------------------------------- */

    showSearch();
    documentClick();

    if($('select').length > 0){select2();}
    if($('[data-picker-full]').length > 0){datePickerFullRequest();}
    if($('[data-picker-fast]').length > 0){datePickerFastRequest();}
    if($('.villa-carousel').length > 0){villaCarousel();}
    if($('.villa-nav').length > 0){villaNavigation();}
    if($('.villa-request').length > 0){showInput(); villaRequestPosition();}

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */


    $(window).scroll(function (e) {



    });

})