$(".type-div").load("typing.html");
$(".options").hide();

$(function () {
  $(".select-btn").on("click", function () {
    $(".options").toggle();
  });

  $(document).on("click", ".option", function () {
    let choosed = $(this).find("span").text();
    $(".btn-span").text(choosed).addClass("selected-user");
    $(".options").hide();
  });

  $("input").keyup(function (e) { 
    if(e.keyCode == 13)  {
      let value = $(this).val();
      $(".tag-div").prepend(`
      <span>${value} <i class="bi bi-x-circle-fill ps-1"></i></span>
      `);

      $("input").val("");

      $("i").on("click", function () {
        $(this).closest("span").remove();
      });
    }
  });
});