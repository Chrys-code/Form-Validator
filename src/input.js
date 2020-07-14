import {
  updateEmailArray,
  updatePassArray,
  emailValidator,
  passValidator,
  emailError,
  passError,
} from "./validatormodule.js";

const inputs = document.querySelectorAll("input");
const formBtn = document.querySelector(".btn");
const emailerr = document.querySelector(".emailerror");
const passerr = document.querySelector(".passerror");

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // Email
    if (input.classList.contains("email")) {
      updateEmailArray(input);
      if (emailValidator() == true) {
        emailerr.innerText = emailError;
      }
      emailerr.innerText = emailError;
    }
    //Password
    if (input.classList.contains("password")) {
      updatePassArray(input);
      if (passValidator() == true) {
        passerr.innerText = passError;
      }
      passerr.innerText = passError;
    }
  });
});

formBtn.addEventListener("click", (e) => {
  if (emailValidator() == false || passValidator() == false) {
    e.preventDefault();
  }
});
