$(function () {
    
    $(".btn").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");

        if ($(this).hasClass("list")) {
            $(".col").removeClass("col-sm-6 col-md-4 col-lg-3").addClass("col-12 col-sm-12 col-md-12 col-lg-12");
            $(".card-head").addClass("col-3");
            $(".card-body").addClass("col-8");
            $("p, h6").addClass("list-style").removeClass("grid-style");

        } else if ($(this).hasClass("grid")) {
            $(".col").removeClass("col-12 col-sm-12 col-md-12 col-lg-12").addClass("col-sm-6 col-md-4 col-lg-3");
            $(".card-head").removeClass("col-3");
            $(".card-body").removeClass("col-8");
            $("p, h6").removeClass("list-style").addClass("grid-style");
        }
    });
});