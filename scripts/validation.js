/* const form = document.getElementById('form');
const textprenom = document.getElementById('textprenom');
const textnom = document.getElementById('textnom');
const email = document.getElementById('email');
const message = document.getElementById('message');

const validateForm = () => {
    let noError = true;
    const textprenom = textprenom.value.trim();
    const textnom = textnom.value.trim();
    const email = email.value.trim();
    const message = message.value.trim();

    if (textprenomValue === '') {
        setError(textprenom, 'Votre prénom est requis');
        noError = false;
    }else if (textnom === '') {
        setError(textnom, 'Votre nom est requis');
        noError = false;
    }else if (email === '') {
        setError(email, 'Votre adresse courriel est requis');
        noError = false;
    }else if (message === '') {
        setError(message, 'Une briève description de votre contact est requise');
        noError = false;
    }else {
        return noError;
    }
} */

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
    const inputNom = document.getElementById('textname');
    const inputPrenom = document.getElementById('textrenom');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');
  
    const nom = inputNom.value;
    const prenom = inputPrenom.value;
    const email = inputEmail.value;
    const message = inputMessage.value;
  
    if (nom === '') {
      inputNom.classList.add('error');
      document.getElementById('nom-error').textContent = 'Ce champs est requis';
    } else {
      inputNom.classList.remove('error');
      document.getElementById('nom-error').textContent = '';
    }

    if (prenom === '') {
        inputPrenom.classList.add('error');
        document.getElementById('prenom-error').textContent = 'Ce champs est requis';
      } else {
        inputPrenom.classList.remove('error');
        document.getElementById('prenom-error').textContent = '';
      }

      if (email === '') {
        inputEmail.classList.add('error');
        document.getElementById('email-error').textContent = 'Ce champs est requis';
      } else {
        inputEmail.classList.remove('error');
        document.getElementById('email-error').textContent = '';
      }

      if (message === '') {
        inputMessage.classList.add('error');
        document.getElementById('message-error').textContent = 'Ce champs est requis';
      } else {
        inputMessage.classList.remove('error');
        document.getElementById('message-error').textContent = '';
      }
  };

