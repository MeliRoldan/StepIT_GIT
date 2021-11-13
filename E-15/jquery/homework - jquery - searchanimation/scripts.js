$(function () {

  let x = 0;

  $("button").click(function (e) { 
    e.preventDefault();

    if (x==0) {
      $(".myform").animate({
        width:"100%",
        height:"100vh",
        "border-radius":"0px"
      }, "fast");
      $("input").css({
        "display":"inline"}, "fast");
        $("button").css({
          "color":"#1eaddc",
          right:"5%"
        }); x=1;
    }  else {
      $(".myform").animate({
        width:"70px",
        height:"70px",
        "border-radius":"50px"
      }, "fast");
      $("input").css({
        "display":"none"}, "fast");
        $("button").css({
          "color":"white",
          right:"0%"
        }); x = 0;
    } 
    
  });
  
});