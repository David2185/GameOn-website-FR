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
const closeModalBtn = document.getElementById("close-modal");
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




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//début du p4

//fonctions

//function close Modale

function closeModal() {
  modalbg.style.display = "none";
}


// fonction pour les erreurs de modal

function errorHander (elt) {
    elt.setAttribute.style.borderColor = "red";
}
//fonction validation via submit

function checkFirst () {
  errorHander(first);
  if (first.value.trim() === "") {
      alert("Veuillez entre votre prénom");
      first.setAttribute.style.textContent = "red";
  } else if (first.value.length < 2) {
    alert("Veuillez saisr un minimum de 2 caractères");
  }
}

function checkLast () {
  if (last.value.trim() === ""){
      alert("Veuillez entre votre nom");
  }
}

function checkEmail () {
  if (email.value.trim() === ""){
      alert("Veuillez saisir une adresse mail valide");
  }
}

function checkBirthdate () {
  if (birthdate.value.trim() === ""){
      alert("Veuillez saisir votre date de naissance");
  }
}

function checkQuantity () {
  if (quantity.value.trim() === ""){
      alert("Veuillez indiquer votre nombre de partiipations à un tournoi");
  }
}

function check () {
  checkFirst(), checkLast(), checkQuantity(), checkBirthdate(), checkEmail()
  // closeModal
}

submit.addEventListener("click", checkFirst, checkLast, checkEmail, checkBirthdate, checkQuantity);
//2: créer une fonction qui vérifie les champs remplis ou non que je pourrais utiliser sur l'addEvent 

//3: chaque check de champs doit être une fonction


//Fermer la modale

closeModalBtn.addEventListener("click", check);

//Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

