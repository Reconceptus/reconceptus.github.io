const textbox = function() {
    const video = $('.text-box iframe');
    video.each(function() {
        $(this).wrap('<div class="video"></div>');
    });
};

module.exports = textbox;
