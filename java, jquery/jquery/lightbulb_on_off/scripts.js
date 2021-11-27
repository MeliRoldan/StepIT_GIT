$(function () {

  $("button").click(function (e) { 
    e.preventDefault();
    $(".slide").animate({height:"170px"},"fast").animate({height:"110px"},"slow");
    $(".on-off").animate({top:"170px"},"fast").animate({top:"110px"},"slow");
    $(".main").toggleClass("on");
  });
  
});