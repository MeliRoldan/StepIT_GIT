$(function () {

    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 10) {
          $(".navbar").removeClass("bg-transparent").addClass("bg-dark");
        }else{

       if(window.innerWidth > 1000 ){
          $(".navbar").addClass("bg-transparent").removeClass("bg-dark");
       }
        } ;
    });

     $(".navbar-toggler").on("click", function (e) {
        e.preventDefault();
        $(".navbar").removeClass("bg-transparent").addClass("bg-dark");
    })

});