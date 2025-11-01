document.querySelector('.registerbtn').onclick = registration;

function registration() {
  let login = document.querySelector('.input_email');
  let pass = document.querySelector('.input_pass');
  let pass_w = document.querySelector('.input_passw');
    if (pass.value != pass_w.value) {
        alert("Пароли должны быть одинаковыми!");
    }
    else
    {
        alert("Пользователь " + login.value + " зарегистрирован!");
        window.location.href = 'main.html';
    }
}