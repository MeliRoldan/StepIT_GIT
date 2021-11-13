$(function () {
  $("#page").load("home.html");

  $(document).on("click", "a", function(){
    let id = $(this).attr("id");
    switch (id) {
      case "about":
        $("#page").load("about.html");
        break;
      case "blog":
        $("#page").load("blog.html");
        break;
      case "contact":
        $("#page").load("contact.html");
        break;
      case "home":
        $("#page").load("home.html");
        break;
    }
  });
});