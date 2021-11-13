let tabs = document.querySelectorAll(".tabitem");

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];

  tab.addEventListener ("click", function(){

    let aitem = document.querySelector(".tabitem.active");
    aitem.classList.remove("active");
    this.classList.add("active");

    let adiv = document.querySelector(".tabdiv.active");
    adiv.classList.remove("active");

    let divid = this.getAttribute("data-id");

    document.querySelector("#"+divid).classList.add("active");

  })
}