var email = document.querySelector('[name="email"]').value;
var senha = document.querySelector('[name="password"]').value;
const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

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