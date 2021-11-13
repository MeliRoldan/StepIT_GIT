$(function () {

  $("#range").on("input", function() {
    let slider = $("#range").val();

    let styles = {
      width: slider + "px",
      height: slider + "px"
    }
    
    $("#slider-image").css(styles);
  });

});