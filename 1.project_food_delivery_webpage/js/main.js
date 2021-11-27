$( function() {  
  //PAGES LOAD
  $(".navbar-nav").on("click", "a", function(){
    let id = $(this).attr("id");
    $("#pages").load(id + ".html");
    if (id != "home") {
      let name = $(this).text();
      $("#banner-content").html(`
      <nav aria-label="breadcrumb py-5">
        <ol class="breadcrumb my-5 py-5 d-flex align-items-center justify-content-center">
          <li class="breadcrumb-item active" aria-current="page"><a href="#">${name}</a></li>
        </ol>
      </nav>`);
    };
  });

  $(".nav-link , .nav-btn").on("click", function(){
    $(".navbar-nav").find(".nav-link.active").removeClass("active");
    $(".rounded-nav-items").find(".nav-btn.active").removeClass("active");
    $(this).addClass("active");
  });

  //SCROLL ON NAV
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
     if (scroll > 10) {
      $(".navbar").addClass("fixed-top");
      $(".navbar").addClass("bg-dark")
    } else{
      $(".navbar").removeClass("fixed-top");
      $(".navbar").removeClass("bg-dark")
    };
  });

   //DATE PICKER
   var today = new Date();
   var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
   $("#datepicker").val(date);
   $("#datepicker").datepicker();
       
   //TIMEPICKER
   $("#timepicker").val("12:00");
   $('input.timepicker').timepicker({});
   $('.timepicker').timepicker({
     timeFormat: 'h:mm p',
     interval: 60,
     minTime: '10:00am',
     maxTime: '11:00pm',
     defaultTime: '12',
     startTime: '10:00',
     dynamic: false,
     dropdown: true,
     scrollbar: true
   });
   
   //SWIPER
   var swiper = new Swiper(".mySwiper", {
     loop: true,
     loopFillGroupWithBlank: true,
     autoplay: {
       delay: 3000,
       disableOnInteraction: false,
     },
     mousewheel: {
       invert: true,
     },
     breakpoints: {
       200: {
         slidesPerView: 1,
         spaceBetween: 0,
         slidesPerGroup: 1,
       },
       440: {
         slidesPerView: 2,
         spaceBetween: 20,
         slidesPerGroup: 2,
       },
       640: {
         slidesPerView: 3,
         spaceBetween: 30,
         slidesPerGroup: 3,
       },
       768:   {
         slidesPerView: 4,
         spaceBetween: 20,
         slidesPerGroup: 4,
       },
       1024:   {
         slidesPerView: 6,
         spaceBetween: 10,
         slidesPerGroup: 6,
       },
       2024:   {
         slidesPerView: 12,
         spaceBetween: 10,
         slidesPerGroup: 12,
       },
     }
   });
   
   // COUNTDOWN
    let DueDate = new Date("Jan 5, 2022 15:37:25").getTime();
   let countd = setInterval(function() {
     let NowDate = new Date().getTime();
     let timeleft = DueDate - NowDate;
     // calculation
     let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
     let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
   
     document.getElementById("dd").innerHTML = days;
     document.getElementById("hh").innerHTML = hours;
     document.getElementById("mm").innerHTML = minutes;
     document.getElementById("ss").innerHTML = seconds;
   }, 2000);
});