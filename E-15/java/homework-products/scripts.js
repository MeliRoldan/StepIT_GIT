//შევცქმნათ Product მაისივი
let Product = [
  {name:"Iphone 5",
  price: 1300,
  img:"https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  stock: 5,
  weight: [1,2,3]},

  {name:"Iphone 6", 
  price: 2100,
  img:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",  
  stock: 30,
  weight: [4,5,6]},

  {name:"Iphone 11",
  price: 1265,
  img:"https://images.unsplash.com/photo-1608547492981-3327ee04cafd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  stock: 50,
  weight: [7,8,9]},

  {name:"Iphone S",
  price: 3000,
  img:"https://images.unsplash.com/photo-1600541519467-937869997e34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",   
  stock: 9,
  weight: [3,4,5]},
]

//  პროდუქციის მასივი უნდა დავბეჭდოთ foreach ფუნქციაში (bootstrap card)

let blogcard = document.getElementById("blg");

  
  Product.forEach ((arr) => {

    //თუ მარაგის რაოდენობა ნაკლებია 10 ზე გამოვიტანოთ ტექსტი (იწურება) თუ არა რაოდენობა
    let text;
    arr.stock < 10 ?  text = arr.stock + " იწურება" : text = arr.stock;

    //გამოტანილი პროდუქტის ყველა წონა უნდა ჩანდეს html ში
    
    let wrange = [];
    for (let w in arr.weight) {
      wrange += arr.weight[w] + " kg; ";
    }
    let neww = wrange.toString ();

    blogcard.innerHTML += `
    <div class="card m-2" style="max-width: 540px;">
      <div class="row g-0">
          <div class="col-md-6 overflow-hidden d-flex">
            <img src="${arr.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${arr.name}</h5>
              <p class="card-text">Price: $ ${arr.price}</p>
              <p class="card-text" id="stock">In stock: ${text}</p>
              <p class="card-text">Weight: ${neww.replaceAll (",","")}</p>
            </div>
          </div>
      </div>
    </div>`
  });

