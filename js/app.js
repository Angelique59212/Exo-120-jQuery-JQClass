const third = $(".third");

$("#full").click(function () {
   $(".line").children().addClass("form");
})

$("#empty").click(function () {
    $(".line").children().removeClass("form");
})

$(".circle").click(function () {
    $(this).toggleClass("form");
})

$(".square").click(function (){
    if ($(this).is (".form")) {
        $(this).removeClass("form");
        $(this).siblings().removeClass("form");
    }
    else {
        $(this).addClass("form");
        $(this).siblings().addClass("form");
    }
})

$(".lozenge").click(function (){
    if ($(this).is (".form")) {
        $(this).removeClass("form");
        $(this).siblings().removeClass("form");
        third.removeClass("form");
    }
    else {
        $(this).addClass("form");
        $(this).siblings().addClass("form");
        third.addClass("form");
    }
})

