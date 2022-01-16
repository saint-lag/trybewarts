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

function informationGetter() {
  const information = [
    `${document.getElementById('input-name').value} ${
      document.getElementById('input-lastname').value
    }`,
    document.getElementById('input-email').value,
    document.getElementById('house').options[
      document.getElementById('house').selectedIndex
    ].value,
    document.querySelector('input[name="family"]:checked').value,
    valueCheckbox(document.getElementsByName('content')),
    document.querySelector('input[name="rate"]:checked').value,
    document.getElementById('textarea').value,
  ];

  return information;
}

buttonEnviar.addEventListener('click', (event) => {
  const information = informationGetter();
  event.preventDefault();
  evaluationForm.innerHTML = '';
  addChildP('Nome', information[0]);
  addChildP('Email', information[1]);
  addChildP('Casa', information[2]);
  addChildP('Família', information[3]);
  addChildP('Matérias', information[4]);
  addChildP('Avaliação', information[5]);
  addChildP('Observações', information[6]);
});

agreement.addEventListener('change', habilitaButton);

textA.addEventListener('input', () => {
  counter.innerText = 500 - textA.value.length;
});
