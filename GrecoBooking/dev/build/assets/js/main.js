$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var btn = $('#search_btn'),
        nav = $('.nav'),
        search = btn.closest('.search');

    /* ----------------------------------- functions ----------------------------------- */

    function showSearch() {
        btn.click(function () {
            search.addClass('active');
            nav.addClass('hidden');
        })
    }

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

    function select2() {
        $('select').each(function () {
            $(this).select2({
                dropdownCssClass: 'custom-select',
                minimumResultsForSearch: Infinity
            });
        })
    }

    function datePicker() {
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
            },
            onClose: function () {
                $('#picker').removeClass('show up down');
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

    /* --------------------------------- document load --------------------------------- */

    showSearch();
    documentClick();

    if($('select').length > 0){select2({});}
    if($('[data-picker-full]').length > 0){datePicker({});}

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */


    $(window).scroll(function (e) {



    });

})