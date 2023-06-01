const form = document.getElementById('form');
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
}

