(function( $ ) {
    $.fn.projectGallery = function() {

        var $this = $(this),
            $dataForClone = $('.gallery-list',this).clone(),
            $data = $dataForClone[0].children,
            $elements = [],
            $current = 1,
            $firstVisible = 1,
            $lastVisible = 4,
            $listMargin = 0;

        for(var i = 0; i < $data.length; i++){
            $elements[i] = $data[i];
        }

        $(this).prepend('<div class="gallery-main"></div>');

        $('.gallery-main').append($elements);

        function defaultActiveItem() {
            $('.gallery-list .item').first().addClass('current');
            $('.gallery-main .item').first().addClass('current');
            $('.gallery-list .item:nth-child(-n+4)').addClass('visible');
        }

        function setActiveItem() {
            showInList();
            $('.current', $this).removeClass('current');
            $('[data-num="'+$current+'"]', $this).addClass('current');
            endAction();
        }

        function clickItem(item) {
            $current = item.attr('data-num');
            setActiveItem();
        }

        function clickArrowLR(dir) {
            $current = parseInt($current);
            if(dir == 'next'){
                $current = $current + 1;
            }
            if(dir == 'prev'){
                $current = $current - 1;
            }
            setActiveItem();
        }

        function listMargin(dir) {
            if(dir == 'up'){
                $listMargin = $listMargin - 75;
            }
            if(dir == 'down'){
                $listMargin = $listMargin + 75;
            }
            return $listMargin+'%';
        }


        function showInList() {
            if($current > $lastVisible){
                $('.gallery-list').css('margin-top',listMargin('up'));

                $lastVisible = $lastVisible + 1;
                $firstVisible = $firstVisible + 1;
            }
            if($current < $firstVisible){
                $('.gallery-list').css('margin-top',listMargin('down'));
                $lastVisible = $lastVisible - 1;
                $firstVisible = $firstVisible - 1;
            }
        }

        function endAction() {
            $current == 1 ?
                $('.buttons .back').addClass('hide') :
                $('.buttons .back').removeClass('hide');

            $current == $elements.length ?
                $('.buttons .forw').addClass('hide') :
                $('.buttons .forw').removeClass('hide');
        }



        defaultActiveItem();
        setActiveItem();
        $('.gallery-list .item').click(function () {
            clickItem($(this));
        });
        $('.buttons .back').click(function () {
            clickArrowLR('prev');
        });
        $('.buttons .forw').click(function () {
            clickArrowLR('next');
        });
    };
})(jQuery);