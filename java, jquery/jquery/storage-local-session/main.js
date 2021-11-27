$(function () {

    $(".modal").show();
    $(".btn-close").on("click", function(){
        $(".modal").hide();
    });

    let alert = localStorage.getItem("alert");
     if (alert=="dont"){
        $(".modal").hide();
     };

    $("#exampleCheck1").on("change", function(){
        if($(this).is(":checked")){
            $(".modal").hide();
            localStorage.setItem("alert", "dont");
        };
    })

    let User = {
        email: "test@test.com",
        password: "123456"
    }

    let log = sessionStorage.getItem("logged");
    if (log=="test123"){
        $("form").hide();
        $(".logged").removeClass("d-none");
    }

    $("form").submit(function(e){
        e.preventDefault();
        let email = $(".email").val();
        let pass = $(".pass").val();
        if (email == User.email && pass == User.password){
            sessionStorage.setItem("logged","test123");
            $("form").hide();
            $(".logged").removeClass("d-none");
        } else {
            $(".incorrect").removeClass("d-none");
        };
    });

    $(".logout").on("click", function(){
        sessionStorage.removeItem("logged");
        window.location.reload();
    });
});