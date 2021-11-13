let btn = document.querySelector(".btn");
let ulist = document.querySelector(".ulist");
let val = document.querySelector("#valinp");

btn.addEventListener ("click", function () {
  let newli = document.createElement("li");
  newli.textContent = valinp.value;
  ulist.appendChild(newli);
  valinp.value = "";

  let item = document.querySelectorAll("li");

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("dblclick", function (){
      item[i].remove();
    })
  };
})