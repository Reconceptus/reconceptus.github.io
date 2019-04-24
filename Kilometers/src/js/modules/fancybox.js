var fancybox = function() {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ['close'],
        baseClass: 'custom-gallery',
    });
};

module.exports = fancybox;
