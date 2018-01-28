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

    /* --------------------------------- document load --------------------------------- */

    showSearch();
    documentClick();

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */


    $(window).scroll(function (e) {



    });

})