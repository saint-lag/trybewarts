<<<<<<< HEAD
var email = document.querySelector('[name="email"]').value;
var senha = document.querySelector('[name="password"]').value;
const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
=======
// Problema na funcionalidade do formulário (alerta)

document
  .querySelector("#login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.querySelector('[name="email"]').value;
    var senha = document.querySelector('[name="password"]').value;
  });
>>>>>>> bfaaa13a2d5726bfecb5689793d47e342e5856bf

if (email === "tryber@teste.com" && senha === "123456") {
  alert("Olá, Tryber!");
} else if (email === "" || senha === "") {
} else {
  alert("Email ou senha inválidos.");
}

function habilitaButton() {
  event.preventDefault();
  if (document.getElementById('agreement').value === '') {
    buttonEnviar.disabled = true;
  } else {
    buttonEnviar.disabled = false;
  }
}

agreement.addEventListener('change', habilitaButton);