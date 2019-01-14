$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    $header = $('#header');
    $search = document.getElementById('showSearch');
    $searchModal = document.getElementById('searchModal');


    /* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header burger
    */

    $('#burger').click(function () {
        $header.removeClass('simple-header');
    });

    /*
     ============= search modal
    */

    $search.addEventListener('click',function () {
        project.ovhEnable();
        $header.removeClass('simple-header');
        $searchModal.classList.add('active');
    });

    document.getElementById('closeModal').addEventListener('click',function () {
        project.ovhDisable();
        $searchModal.classList.remove('active');
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
    if($('.search-form').length > 0){
        project.searchReset();
    }


    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        project.headerFixed();
    });

});