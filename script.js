var validEmail = document.getElementById("email");
var form = document.querySelector("form");
var regularExp = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var errorMessage = document.getElementById("re");
var front = document.getElementById("front");
var submittedEmail = document.getElementById("submitted");
var success = document.getElementById("success");

function validation() {
  if (!validEmail.value.match(regularExp)) {
    errorMessage.innerHTML = "Valid email required";
    return false;
  }
  errorMessage.innerHTML = "";
  front.style.display = "none";
  success.style.display = "flex";
  submittedEmail.innerHTML = validEmail.value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
