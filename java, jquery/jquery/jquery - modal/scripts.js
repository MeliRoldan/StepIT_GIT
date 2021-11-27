$(function () {

  $(".log").click(function () { 

    $(".myform").addClass("right");
    $(".submit").text("Login");
    $("input").addClass("blue");
    $("#fname").hide();
    $("#lname").hide();
  });
  
  
  $(".sign").click(function(){

    $(".myform").removeClass("right");
    $("#fname").show();
    $("#lname").show();
    $(".submit").text("Sign Up");
  });
  
});