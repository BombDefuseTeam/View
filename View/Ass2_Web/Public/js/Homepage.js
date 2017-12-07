$(document).ready(function () {
    $(".item").click(function () {
        $(".item").removeClass("active");
        $(this).addClass("active");

    });

    $(".card").hover(function () {

        $(this).addClass("animated flip");

    }, function () {

        $(this).removeClass("animated flip");

    });

});