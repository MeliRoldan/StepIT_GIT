//შევქმნათ მასივი
let user = ["მელი", "img", 22, "2020/09/22", "პროგრამირება", 100, 90];
console.log (user);

// შევქმნათ ფუნქციები 
// დაფილტრული მასივი დავბეჭდოთ for ციკლში და გამოვიტანოთ html-ში
let over90 = user.filter(myFunction1);
function myFunction1(array) {
  return array > 90;
}
for (let i = 0; i < over90.length; i++) {
   const element = over90[i];
   document.getElementById("demo").innerHTML = element;
}

let age = user.filter(myFunction2);
function myFunction2(array) {
  return array == 22;
}
for (let i = 0; i < age.length; i++) {
   const element = age[i];
   document.getElementById("demo1").innerHTML = element;
}

let date = user.filter(myFunction3);
function myFunction3(array) {
  return array == "2020/09/22";
}
for (let i = 0; i < date.length; i++) {
   const element = date[i];
   document.getElementById("demo2").innerHTML = element;
}

let course = user.filter(myFunction4);
function myFunction4(array) {
  return array == "პროგრამირება";
}
for (let i = 0; i < course.length; i++) {
   const element = course[i];
   document.getElementById("demo3").innerHTML = element;
}

let percnt = user.filter(myFunction5);
function myFunction5(array) {
  return array > 80 && array < 100;
}
for (let i = 0; i < percnt.length; i++) {
   const element = percnt[i];
   document.getElementById("demo4").innerHTML = element;
}


// პირველი 2 სიმბოლოს წაშლა
//user.slice(2);

// შუა ელემენტის აღება
let mid = user.slice(3,4);
console.log (mid)

// პირველი და ბოლო ელემენტის წაშლა
user.shift();
user.pop();
console.log (user);

// 2 ელემენტის დამატება თავში და ბოლოში
user.unshift ("გვარი");
user.push ("50 ქულა");
console.log (user);



