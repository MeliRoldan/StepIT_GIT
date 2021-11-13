$(function () {

  let l = 0;

  $(document).on("submit",".myform", function (e) { 
    e.preventDefault();
    
    //აიდის ცვლადი
    let task = $("#task").val();
   
    //ახალი ველის დამატება
    $(".list").append(`
    <div class='li w-100 m-0' data-id="${l}" data-name="${task}">
      <div class="p-div">
        <p>${task}</p>
      </div>
      <div class="btn-div">
        <button class='row-btn btn edit btn-success border-0' data-id="${l}">Edit</button>
        <button class='row-btn btn delete btn-danger border-0' data-id="${l}">Delete</button>
      </div>
    </div>`);
    l++;

    //ინფუთის დარესეტება
    $(".myform")[0].reset();
  });


  //ველის რედაქტირება
  $(document).on('click','.edit',function(e){
    e.preventDefault();

    //აიდების დაკავშირება
    let data = $(".li[data-id="+$(this).attr('data-id')+"]");
    let task = data.attr('data-name');

    //ფორმის განახლება
    $(".myform").removeClass("myform").addClass("updateform");

    //რედაქტირება
    $("#task").val(task);
    $("input[name='id']").val($(this).attr('data-id'));
    $(".add-btn").text("EDIT").removeClass("btn-dark").addClass("btn-warning");
  });

  //რედაქტირებული ინფოს შენახვა
  $(document).on('submit','.updateform',function(e){
    e.preventDefault();

    let id = $("input[name='id']").attr("value");
    let data = $(".li[data-id="+id+"]");
    data.attr('data-name', $("#task").val());
    $(".li[data-id="+id+"] p").text($("#task").val());

    //განახლება
    $(".add-btn").text("SUBMIT").removeClass("btn-warnig").addClass("btn-dark");
    $(".alert").fadeIn("slow").fadeOut(5000);
    $(".updateform").removeClass("updateform").addClass("myform");
    $(".myform")[0].reset();
  });


  //წაშლა
  $(document).on("click", ".delete", function(e){
    e.preventDefault();
    $(".li[data-id="+$(this).attr('data-id')+"]").remove();
  });
  
});