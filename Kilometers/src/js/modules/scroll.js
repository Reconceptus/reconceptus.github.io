var scroll = (function () {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });
});

module.exports = scroll;