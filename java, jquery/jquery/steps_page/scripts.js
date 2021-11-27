$(function () {

  //კლიკის ცვლადი
  let click = 0;
  
  //ღილაკი "შემდეგი"
  $(".next").click(function(e){
    e.preventDefault();

    if (click < 2) {

      //აქტიური ტესქტის გადასვლა
      $(".active-h").removeClass("active-h").closest("div").next().find("h2").addClass("active-h");
      $(".active-p").removeClass("active-p").closest("div").next().find("p").addClass("active-p");

      //აქტიური ხაზის გადასვლა
      $(".a-line").addClass("show").next().addClass("a-line show");

      //აქტიური კონტენტის გადასვლა
      $(".active-content").removeClass("active-content").next().addClass("active-content");

      //"უკან" ღილაკის გამოჩენა
      $(".back").removeClass("hide");
    }

    //"დასრულება ღილაკის გამოჩენა"
    if (click == 1) {
      $(".next").text("Finish");
    }
    click++;
  });

  //ღილაკი "უკან"
  $(".back").click(function(e){
    e.preventDefault();

    if (click > 0) {

      //აქტიური ტესქტის გადასვლა
      $(".active-h").removeClass("active-h").closest("div").prev().find("h2").addClass("active-h");
      $(".active-p").removeClass("active-p").closest("div").prev().find("p").addClass("active-p");

      //აქტიური ხაზის გადასვლა
      $(".a-line.show").removeClass("a-line show").prev().addClass("a-line show");
      
      //აქტიური კონტენტის გადასვლა
      $(".active-content").removeClass("active-content").prev().addClass("active-content");

      //"დასრულება ღილაკის გაქრობა"
      $(".next").text("Next");
    } 
    
    //"უკან" ღილაკის გაქრობა
    if (click == 1) {
      $(".back").addClass("hide");
    }
    click--;
  });
});