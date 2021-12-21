$("#full").click(function () {
   $(".line").children().addClass("form");
})

$("#empty").click(function () {
    $(".line").children().removeClass("form");
})

$(".circle").click(function () {
    $(this).toggleClass("form");
})

