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

    inputStatus.innerHTML = "* Ce champ est requis!";

    if (prenom != '') {

      if (nom != '') {

        if (email != '') {

          if (message != '') {

            inputStatus.innerHTML = "Redirection en cours...";

            return true;

          } else {

            inputMessage.classList.add('error');

            return false;

          }

        } else {

          inputEmail.classList.add('error');

          return false;

        }

      } else {

        inputNom.classList.add('error');

        return false;

      }

    } else {

      inputPrenom.classList.add('error');

      return false;

    }

  } catch (e) {

    alert("Une exception inattendue s'est produite. Veuillez rejoindre l'administrateur de service!");

    return false;

  }

};