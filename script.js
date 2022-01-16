const email = document.getElementById('email');
const senha = document.getElementById('password');
const buttonEnviar = document.getElementById('submit-btn');
const evaluationForm = document.getElementById('evaluation-form');
const agreement = document.getElementById('agreement');
const textA = document.getElementById('textarea');
const counter = document.getElementById('counter');

document.querySelector('#login-button').addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function habilitaButton() {
  console.log(document.getElementById('agreement').value);
  if (document.getElementById('agreement').value === '') {
    buttonEnviar.disabled = true;
  } else {
    buttonEnviar.disabled = false;
  }
}

function valueCheckbox(checkboxId) {
  const arrayCheckbox = [];
  for (let i = 0; i < checkboxId.length; i += 1) {
    if (checkboxId[i].checked === true) {
      arrayCheckbox.push(checkboxId[i].value);
    }
  }
  return arrayCheckbox.join(', ');
}

function addChildP(chave, valor) {
  const p = document.createElement('p');
  p.innerText = `${chave}: ${valor}`;
  p.className = 'subject';
  evaluationForm.appendChild(p);
}

buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const nameValue = document.getElementById('input-name').value;
  const nameComplete = `${nameValue} ${
    document.getElementById('input-lastname').value
  }`;
  const emailValue = document.getElementById('input-email').value;
  const select = document.getElementById('house');
  const house = select.options[select.selectedIndex].value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const comentary = document.getElementById('textarea').value;
  const contentCheckbox = valueCheckbox(document.getElementsByName('content'));
  evaluationForm.innerHTML = '';
  addChildP('Nome', nameComplete);
  addChildP('Email', emailValue);
  addChildP('Casa', house);
  addChildP('Família', family);
  addChildP('Matérias', contentCheckbox);
  addChildP('Avaliação', rate);
  addChildP('Observações', comentary);
});

agreement.addEventListener('change', habilitaButton);

textA.addEventListener('input', () => {
  counter.innerText = 500 - textA.value.length;
});
