let minus =  document.querySelector(".minus");
let plus = document.querySelector(".plus");
let input = document.querySelector(".numb");



minus.addEventListener ("click", function () {
    input.value --;
    if (input.value < 0) {input.value = 0};
})

plus.addEventListener ("click", function () {
    input.value ++;
})

