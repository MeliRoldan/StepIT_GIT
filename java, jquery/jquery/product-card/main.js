$(function () {
    $("img").attr("src","https://superstorefinder.net/superproductswatches/wp-content/uploads/2019/09/white-1-416x666.png")

    $(".color").on("click", function(){
        $(this).parent("span").addClass("selected").siblings().removeClass("selected");
        let color = $(this).attr("data-color");
        let image = $(this).attr("data-image");
        $("img").attr("src", image);
        $(".add-title").text(color);
    });

    $(".capacity").on("click", function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        let price = $(this).attr("data-price");
        $(".price").text(price +"$");
    });
});