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
const modalCloseBtn = document.querySelector(".close");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCloseBtn.addEventListener('click', closeModal);

// Functions
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
}