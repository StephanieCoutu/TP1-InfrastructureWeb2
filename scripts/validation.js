function validateForm() {

  try {

    const inputPrenom = document.getElementById('textprenom');
    const inputNom = document.getElementById('textnom');

    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');

    const inputStatus = document.getElementById('status');

    const prenom = inputPrenom.value;
    const nom = inputNom.value;
    const email = inputEmail.value;
    const message = inputMessage.value;

    inputPrenom.classList.remove('error');
    inputNom.classList.remove('error');
    inputEmail.classList.remove('error');
    inputMessage.classList.remove('error');

    document.getElementById('textprenom-error').classList.remove('error-star');
    document.getElementById('textnom-error').classList.remove('error-star');
    document.getElementById('email-error').classList.remove('error-star');
    document.getElementById('message-error').classList.remove('error-star');

    inputStatus.innerHTML = "* Ce champ est requis!";

    if (prenom != '') {

      if (nom != '') {

        if (email != '') {

          if (message != '') {

            inputStatus.innerHTML = "Redirection en cours...";

            return true;


          } else {

            inputMessage.classList.add('error');

            document.getElementById('message-error').classList.add('error-star');

            return false;

          }

        } else {

          inputEmail.classList.add('error');

          document.getElementById('email-error').classList.add('error-star');

          return false;

        }

      } else {

        inputNom.classList.add('error');

        document.getElementById('textnom-error').classList.add('error-star');

        return false;

      }

    } else {

      inputPrenom.classList.add('error');

      document.getElementById('textprenom-error').classList.add('error-star');

      return false;

    }

  } catch (e) {

    alert("Une exception inattendue s'est produite. Veuillez rejoindre l'administrateur de service!");

    return false;

  }

};