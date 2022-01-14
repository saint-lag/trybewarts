const email = document.getElementById('email');
const senha = document.getElementById('password');
const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

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

const evaluationForm = document.getElementById('evaluation-form');

buttonEnviar.addEventListener('click', () => {
	try {
		const name_value = document.getElementById('input-name').value;
		const lastname_value = document.getElementById('input-lastname');
		const email_value = document.getElementById('input-email');
		const options = document.getElementById('house').children;
		let selected = false;
		for (const option of options) {
			if (option.outerHTML.includes('selected')) {
				const selectedHouse = option.innerText;
				selected = true;
			}
		}
		if (selected === false) {
			throw new Error('Nenhuma casa selecionada!');
		}
	} catch (err) {
		evaluationForm.innerHTML = err;
	} finally {
		const checkboxDiv = document.getElementById('div-checkbox');
		for (let label of checkboxDiv.children) {
			label.firstElementChild.className = 'subject';
		}
	}
});

agreement.addEventListener('change', habilitaButton);
