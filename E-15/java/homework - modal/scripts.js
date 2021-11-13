let wpop = document.querySelector(".pop");
let modal = document.querySelector(".popup");
let popoff = document.querySelector(".popoff");

wpop.addEventListener("click", function(){
  modal.style.display = "flex";
  wpop.style.display ="none";
})

popoff.addEventListener("click", function(){
  modal.style.display = "none";
  wpop.style.display ="block";
})