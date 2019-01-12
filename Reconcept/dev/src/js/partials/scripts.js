$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    $header = $('#header');

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header burger
    */

    $('.burger').click(function () {
        // if($header.hasClass('is-open')){
        //     $header.removeClass('is-open');
        //     $html.removeClass('ovh');
        // }
        // else {
        //     $header.addClass('is-open');
        //     $html.addClass('ovh');
        // }
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
    project.headerFixed();


    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        project.headerFixed();
    });

});