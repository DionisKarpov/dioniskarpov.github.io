$(document).scroll(function() {
    var pos = $(window).scrollTop();
    $(".info").css("top", (pos * 0.5) + "px");
});