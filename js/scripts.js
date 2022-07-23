"use strict";

const submitButton = document.getElementById("submit");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

submitButton.addEventListener("click", () => validate());

const validate = () => {
  console.log("whaaat");
  let firstPassword = password.value;
  let secondPassword = passwordConfirm.value;

  console.log(firstPassword);
  console.log(secondPassword);

  if (!firstPassword) {
    password.classList.toggle("invalid");
  } else if (!secondPassword) {
    passwordConfirm.classList.toggle("invalid");
  } else if (firstPassword !== secondPassword) {
    console.log(password.classList);
    password.classList.toggle("invalid");
    passwordConfirm.classList.toggle("invalid");
  }
};
