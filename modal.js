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
const closeModal = document.getElementById("close-modal");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const submit = document.querySelector(".btn-submit");
const checkbox1 = document.getElementById("check1");
const checkbox2 = document.getElementById("check2");

let errorBorderColor = "#FF4E60";
let errorBorderWidth = "10px";
let errorTextColor = "#FF4E60";







// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//début du p4

//fonctions

//function close Modale

function closeModalBtn() {
  modalbg.style.display = "none";
}


// fonction pour les erreurs de modal

function errorHander () {

}
//fonction validation via submit

function checkFirst () {
  if (first.value === ""){
      alert("Veuillez entre votre prénom");
      first.setAttribute.style.textContent = "red";
  }
}

function checkLast () {
  if (last.value === ""){
      alert("Veuillez entre votre nom");
  }
}

function checkEmail () {
  if (email.value === ""){
      alert("Veuillez saisir une adresse mail valide");
  }
}

function checkBirthdate () {
  if (birthdate.value === ""){
      alert("Veuillez saisir votre date de naissance");
  }
}

function checkQuantity () {
  if (quantity.value === ""){
      alert("Veuillez indiquer votre nombre de partiipations à un tournoi");
  }
}

submit.addEventListener("click", checkFirst, checkLast, checkEmail, checkBirthdate, checkQuantity);
//2: créer une fonction qui vérifie les champs remplis ou non que je pourrais utiliser sur l'addEvent 

//3: chaque check de champs doit être une fonction


//Fermer la modale

closeModal.addEventListener("click", closeModalBtn);

//Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

