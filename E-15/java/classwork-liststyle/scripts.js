let change = document.querySelector(".change");


change.addEventListener("click", function(){
  let slist = document.querySelector(".sibl");
  let ularr = document.querySelectorAll("#parnt li")

  if (slist.previousElementSibling !=null) {
    slist.classList.remove('sibl');
    slist.previousElementSibling.classList.add('sibl');
  } else {
    ularr[0].classList.remove('sibl');
    ularr[ularr.length -1].classList.add('sibl');
  }
})