$(function () {

  $(document).on("mouseenter", ".star", function () { 
    $(this).css("color","red");
    $(this).prevAll().css("color","red");
    $(this).nextAll().css("color","white");
  });

  $(document).on("mouseleave", ".star", function () { 
    $(this).css("color","white").prevAll().css("color","white");
  });

  $(document).on("click", ".star", function () { 
    $(".star").removeClass("star");
    let rate = $(this).data("id");
    $("#rating").val(rate);
  });

  $(document).on("mouseenter", ".main", function () { 
    $(".main i").addClass("star");
  });
});