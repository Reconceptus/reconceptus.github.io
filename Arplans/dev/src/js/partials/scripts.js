$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    var scrollTop,
        scrollVar = 0,
        $header = $('#header'),
        $search = $('#searchForm');

    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

    function headerFixed() {
        scrollTop = $(window).scrollTop();
        if(scrollTop > scrollVar){
            $header.addClass('minimized');
            scrollVar = scrollTop;
        }
        else {
            $header.removeClass('minimized');
            scrollVar = scrollTop;
        }
    }


    /*
     ============= document click events
    */

    function documentClick() {
        $(document).click(function(e){
            var targ = $(e.target);
            console.log(targ);

            if(targ.parents('#searchForm').length == 0){
                $search.removeClass('active-search');
            }
            else {
                $search.addClass('active-search');
            }

        })
    }




    /* --------------------------------- document load --------------------------------- */

    documentClick();
    headerFixed();

    if($('select').length > 0){}

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        headerFixed();
    });

});