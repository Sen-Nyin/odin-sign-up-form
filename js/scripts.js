"use strict";

const submitButton = document.getElementById("submit");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordNoMatch = document.querySelector(".no-password-match");

submitButton.addEventListener("click", () => validate());

const validate = () => {
  console.log("whaaat");
  let firstPassword = password.value;
  let secondPassword = passwordConfirm.value;

  console.log(firstPassword);
  console.log(secondPassword);

  if (!firstPassword) {
    password.classList.add("invalid");
    passwordNoMatch.textContent = `* You must enter a valid password!`;
  } else if (!secondPassword) {
    passwordConfirm.classList.add("invalid");
    password.classList.remove("invalid");
    passwordNoMatch.textContent = `* You must confirm your password!`;
  } else if (firstPassword !== secondPassword) {
    console.log(password.classList);
    password.classList.add("invalid");
    passwordConfirm.classList.add("invalid");
    passwordNoMatch.textContent = `* Your passwords don't match!`;
  } else {
    password.classList.remove("invalid");
    passwordConfirm.classList.remove("invalid");
    passwordNoMatch.textContent = ``;
  }
};
