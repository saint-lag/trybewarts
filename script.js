const email = document.getElementById("email");
const senha = document.getElementById("password");
const buttonEnviar = document.getElementById("submit-btn");
const agreement = document.getElementById("agreement");

document.querySelector("#login-button").addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

function habilitaButton() {
  console.log(document.getElementById("agreement").value);
  if (document.getElementById("agreement").value === "") {
    buttonEnviar.disabled = true;
  } else {
    buttonEnviar.disabled = false;
  }
}

agreement.addEventListener("change", habilitaButton);
