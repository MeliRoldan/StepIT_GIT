let radio = document.querySelectorAll(".color");


radio.forEach (val => {
  val.addEventListener("click", function(){
    document.body.style.backgroundColor = this.value;
  })
})