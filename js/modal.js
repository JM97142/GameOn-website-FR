function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector("#form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const successCloseBtn = document.querySelector(".close-success");
const successModal = document.querySelector("#success-modal");
const successClose = document.querySelector(".btn-success");


// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modals event
modalCloseBtn.addEventListener('click', closeModal);
successClose.addEventListener('click', closeSuccessModal);
successCloseBtn.addEventListener('click', closeSuccessModal);

// Functions
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function lauchSuccessModal() {
  successModal.style.display = "block";
}

function closeSuccessModal() {
  successModal.style.display = "none";
}