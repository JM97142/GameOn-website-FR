// DOM Elements
const form = document.querySelector("#form");
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
    validateNews();
}

// Functions form inputs
function validateFirstName() {
    if (firstNameInput.value.trim().match(regExpName)) {
        console.log("no error");
        return true;
    } else {
        console.log("error");
        return false;
    }
}

function validateLastName() {
    if (lastNameInput.value.trim().match(regExpName)) {
        console.log("no error")
        return true;
    } else {
        console.log("error")
        return false;
    }
}

function validateEmail() {
    if (emailInput.value.trim().match(regExpEmail)) {
        console.log("no error");
        return true;
    } else {
        console.log("error")
        return false;
    }
}

function validateBirthdate() {
    let todayDate = Date.parse(new Date());
    let datePicked = Date.parse(birthdateInput.value);
    if(isNaN(datePicked) || datePicked > todayDate){
        console.log("error");
        return false;
    } else {
        console.log("no error");
        return true;
    }
}

function validateQuantity() {
    if (quantityInput.value > 0) {
        console.log("no error");
        return true;
    } else {
        console.log("error");
        return false;
    }
}

function validateLocation(){
    for (var i=0; i<locationInputs.length; i++) {
        if (locationInputs[i].checked) {
            console.log("no error");
            return true;
        }
    }
    console.log("error");
    return false;
}

function validateConditions() {
    if (conditionsInput.checked == true) {
        console.log("no error");
        return true;
    }
    console.log("error");
    return false;
}

function validateNews() {
    if (newsInput.checked == true) {
        console.log("no error");
        return true;
    } else {
        console.log("no error");
        return false;
    }
}