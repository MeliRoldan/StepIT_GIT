let ul = document.getElementById("uldiv");
let lists = ul.getElementsByClassName("nav-link");
for (let i = 0; i < lists.length; i++){
  lists[i].addEventListener("click", function(){
    const actv = document.getElementsByClassName("active");
    actv[0].className = actv[0].className.replace("active","");
    this.className += "active";
  });
}

let tgoff = document.querySelector(".fa-toggle-off");
let bodybg = document.querySelector("body");

tgoff.addEventListener('click', function (e) {
  this.classList.toggle('fa-toggle-on');
  bodybg.classList.toggle("dark");
});