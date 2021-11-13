let vis = document.querySelector(".fa-eye");
let pass = document.querySelector(".pass");

vis.addEventListener('click', function (e) {
    let type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
  });


