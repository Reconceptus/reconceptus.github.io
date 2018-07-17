(function( $ ) {
    $.fn.projectGallery = function() {

        var $dataForClone = $(this).clone(),
            $data = $dataForClone[0].children,
            $elements = [];

        for(var i = 0; i < $data.length; i++){
            $elements[i] = $data[i];
        }

        $(this).html('<div class="gallery-main"></div><div class="gallery-list"></div>')

        $('.gallery-list').append($elements);

        function defaultActiveItem() {
            $('.gallery-list .item').first().addClass('current');
        }

        function setActiveItem() {
            var activeItem = $('.gallery-list .current').clone();
            $('.gallery-main').empty().append(activeItem)
        }

        function clickItem(item) {
            $('.gallery-list .current').removeClass('current');
            item.addClass('current');
            setActiveItem();
        }



        defaultActiveItem();
        setActiveItem();
        $('.gallery-list .item').click(function () {
            clickItem($(this));
        })
    };
})(jQuery);