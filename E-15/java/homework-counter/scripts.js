let minus =  document.querySelector(".minus");
let plus = document.querySelector(".plus");
let reset = document.querySelector(".reset");
let numb = document.querySelector(".counter");

let count = 0;
update ();
function update(){
    numb.innerHTML = count;
}

minus.addEventListener ("click", function () {
    count --;
    if (count < 0){count=0};
    update ();
})

plus.addEventListener ("click", function () {
    count ++;
    update ();
})

reset.addEventListener ("click", function () {
    count = 0;
    update ();
})

