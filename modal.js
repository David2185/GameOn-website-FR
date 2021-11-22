function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// champs prénom
const firstField = document.getElementById('first');
// champs nom
const lastField = document.getElementById('last');
// champs email
const emailField = document.getElementById('email');
// champs date de naissance
const birthdateField = document.getElementById('birthdate');
// champs quantite (nombre de tournoi)
const quantityField = document.getElementById('quantity');
// boutons radios pour la localistation
const locationFields = document.querySelectorAll('input[name="location"]');
// checkbox
const conditionsUseField = document.getElementById('checkbox1');
// 
const modalBody = document.querySelector('.modal-body');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//début du p4

//fonctions

//function close Modale

function closeModal(){
  modalbg.style.display='none';
}
document.querySelector('.close').addEventListener("click", closeModal);

// crée le message d'erreur pour le champs donner en parametre
function createErrorMessage(field,textMessage){
  // if(field.length){
  //   console.log(true)
  // } else {
  //   console.log(false)
  // }

  // si n'est pas un ensemble de champs
  if(!field.length){ 
    // ajout de la bordure pour le champs invalide
    field.style.border = '2px solid red';
    // ajout de la classe au le champs invalide
    field.classList.add('invalid-field');
  } else {
    // sinon selectionner le premier champs de l'ensemble pour pouvoir ajouter le message d'erreur
    field = field[0]
  }
  // création la 'div' pour le message d'erreur
  let errorMessage = document.createElement('div');
  // ajout de la classe a la 'div' du message
  errorMessage.classList.add('error');
  // ajout du texte a la 'div' du message
  errorMessage.innerHTML = textMessage;
  // ajoute le message d'erreur dans le parent du champs actuel
  field.parentNode.append(errorMessage);
}

// supprime les messages d'erreur
function removeErrorMessages(){
  // tous les messages d'erreur
  let errors = document.querySelectorAll('.error');
  // supprime chaque message d'erreur
  errors.forEach((error) =>{
    error.remove();
  });

  //tous les champs invalides
  let invalidFields = document.querySelectorAll('.invalid-field');
  // supprime la bordure de chaque champs invalides 
  invalidFields.forEach((invalidField) =>{
    invalidField.style.border = 'none';
  });
}

// Vérifie si le champ prénom a un minimum de 2 caractères / n'est pas vide.
function checkFirst(){
  let isValid = true;
  let textMessage = '';

  if(firstField.value==''){
    isValid = false;
    textMessage = 'Veuillez indiquer votre prénom';
  }
  else if(firstField.value.length<2){
    isValid = false;
    textMessage = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
  }

  if(!isValid){
    createErrorMessage(firstField,textMessage);
  }
  
  return isValid;
}

