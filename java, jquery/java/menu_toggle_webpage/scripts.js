let togl =  document.querySelector(".toggler");
let menu = document.querySelector(".sidebar");
let li = document.querySelector(".menu");

togl.addEventListener("click", function () {
    menu.classList.toggle("show");
    togl.classList.toggle("float");
    li.classList.toggle("menu--animate");
})



