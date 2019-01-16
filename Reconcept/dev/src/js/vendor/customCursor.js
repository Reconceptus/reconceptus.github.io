$("body").append('<div class="cursor"></div>');
var scrollY = 0, scrollX = 0;
$(document).mousemove(function (e) {
    $(".cursor").css("top", e.pageY - scrollY + "px").css("left", e.pageX - scrollX + "px");
});
$(document).scroll(function (e) {
    scrollY = $(window).scrollTop();
    scrollX = $(window).scrollLeft();
});
setInterval(function(){scroll = $(window).scrollTop();}, 500);
$("a, button, input, textarea, select, label").hover(function (e) {
    $(this).addClass("msty_cur");
    $(".cursor").addClass("overlink");
}, function (e) {
    $(".cursor").removeClass("overlink");
});