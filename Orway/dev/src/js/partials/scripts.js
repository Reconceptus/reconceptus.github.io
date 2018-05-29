$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var btn = $('#search_btn'),
        nav = $('.nav');

    /* ----------------------------------- functions ----------------------------------- */

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

    if($('select').length > 0){}

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {


    });

});