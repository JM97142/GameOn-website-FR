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
const endMessage = document.querySelector(".end-message");
const modalCloseEnd = document.querySelector(".btn-close-end");
const endModal = document.querySelector("#end-modal");


// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modals event
modalCloseBtn.addEventListener('click', closeModal);
modalCloseEnd.addEventListener('click', closeEndModal);

// Functions
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function lauchEndModal() {
  endModal.style.display = "block";
}

function closeEndModal() {
  endModal.style.display = "none";
}