// Problema na funcionalidade do formulário (alerta)

document
  .querySelector("#login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.querySelector('[name="email"]').value;
    var senha = document.querySelector('[name="password"]').value;
  });

if (email === "tryber@teste.com" && senha === "123456") {
  alert("Olá, Tryber!");
} else if (email === "" || senha === "") {
} else {
  alert("Email ou senha inválidos.");
}
