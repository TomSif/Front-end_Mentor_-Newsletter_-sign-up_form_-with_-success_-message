// FORMS ELEMENTS

const form = document.querySelector(".signup__form"); // select the form
const emailInput = document.getElementById("email"); // select the email input (sans le #)
const inputContainer = document.querySelector(".signup__input-container"); // TOGGLE CLASS LIST SELECTOR
const signUp = document.querySelector(".signup"); // will change the display of the container
const successMessage = document.querySelector(".success-message"); // will change the display of the container
const dismissButton = document.querySelector(".success-message__dismiss-btn"); // select the dismiss button

// Modèle de regex pour l'email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Assure-toi que le DOM est chargé avant d'ajouter l'événement
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailRegex.test(emailInput.value)) {
    // Cacher le formulaire et afficher le message de succès
    signUp.style.display = "none";
    successMessage.style.display = "flex";
  } else {
    // Afficher le message d'erreur
    inputContainer.classList.add("error");
  }
});

// Hide error message when typing in input
emailInput.addEventListener("input", function () {
  inputContainer.classList.remove("error");
});

// Hide success message and display form
dismissButton.addEventListener("click", function () {
  signUp.style.display = "grid";
  successMessage.style.display = "none";
  emailInput.value = ""; // Reset input value
});
