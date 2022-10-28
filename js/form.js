// DOM Elements
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const locationChoice = document.querySelector(".location-choice");
const locationInputs = Array.from(document.querySelectorAll(".location-input"));
const conditionsInput = document.querySelector(".conditions-input");
const newsInput = document.querySelector(".news-input");

// RegExp
const regExpName = /^[a-zéèôöîïûùü' -]{2,50}$/i;
const regExpEmail = /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i;

// Submit Event
form.addEventListener("submit", validate);

// Function validation
function validate(event) {
    event.preventDefault();

    validateFirstName();
    validateLastName();
    validateEmail();
    validateBirthdate();
    validateQuantity();
    validateLocation();
    validateConditions();

    if (
        validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validateBirthdate() &&
        validateQuantity() &&
        validateLocation() &&
        validateConditions()
    ) {
        closeModal();
        lauchSuccessModal();
    } else {
        console.log("error");
    }
}

// Functions form inputs
function validateFirstName() {
    if (firstNameInput.value.trim().match(regExpName)) {
        firstNameInput.parentNode.setAttribute("data-error-visible", "false");
        return true;
    } else {
        firstNameInput.parentNode.setAttribute("data-error-visible", "true");
        return false;
    }
}

function validateLastName() {
    if (lastNameInput.value.trim().match(regExpName)) {
        lastNameInput.parentNode.setAttribute("data-error-visible", "false");
        return true;
    } else {
        lastNameInput.parentNode.setAttribute("data-error-visible", "true");
        return false;
    }
}

function validateEmail() {
    if (emailInput.value.trim().match(regExpEmail)) {
        emailInput.parentNode.setAttribute("data-error-visible", "false");
        return true;
    } else {
        emailInput.parentNode.setAttribute("data-error-visible", "true");
        return false;
    }
}

function validateBirthdate() {
    let todayDate = Date.parse(new Date());
    let datePicked = Date.parse(birthdateInput.value);
    if(isNaN(datePicked) || datePicked > todayDate){
        birthdateInput.parentNode.setAttribute("data-error-visible", "true");
        return false;
    } else {
        birthdateInput.parentNode.setAttribute("data-error-visible", "false");
        return true;
    }
}

function validateQuantity() {
    if (quantityInput.value > 0) {
        quantityInput.parentNode.setAttribute("data-error-visible", "false");
        return true;
    } else {
        quantityInput.parentNode.setAttribute("data-error-visible", "true");
        return false;
    }
}

function validateLocation(){
    for (var i=0; i<locationInputs.length; i++) {
        if (locationInputs[i].checked) {
            locationChoice.setAttribute("data-error-visible", "false");
            return true;
        }
    }
    locationChoice.setAttribute("data-error-visible", "true");
    return false;
}

function validateConditions() {
    if (conditionsInput.checked == true) {
        conditionsInput.parentNode.setAttribute("data-error-visible", "false");
        return true;
    }
    conditionsInput.parentNode.setAttribute("data-error-visible", "true");
    return false;
}