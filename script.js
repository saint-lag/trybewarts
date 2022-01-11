var email = document.getElementById('email');
var senha = document.getElementById('password');
const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

// Problema na funcionalidade do formulário (alerta)

document.querySelector('#login-button').addEventListener('click', () => {
    event.preventDefault();
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else if (email === '' || senha === '') {
  } else {
      alert('Email ou senha inválidos.');
    }
})

function habilitaButton() {
  if (document.getElementById('agreement').value === '') {
    buttonEnviar.disabled = true;
  } else {
    buttonEnviar.disabled = false;
    console.log('teste');
  }
}

agreement.addEventListener('change', habilitaButton); 