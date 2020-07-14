const emailRegEx = new RegExp("[a0-z9]+@[a-z]+\\.[a-z]");
const passRegEx = new RegExp("[a0-z9]+");

let email = "";
let pass = "";

export let emailError = "";
export let passError = "";

export function updateEmailArray(input) {
  var userEmail = input.value.toLowerCase().trim();
  email = userEmail;
}

export function updatePassArray(input) {
  var userPass = input.value.toLowerCase().trim();
  pass = userPass;
}

export function emailValidator() {
  if (emailRegEx.test(email) == true) {
    emailError = "";
    return true;
  }
  emailError = "Wrong email address";
  return false;
}

export function passValidator() {
  if (passRegEx.test(pass) == true) {
    passError = "";
    return true;
  }
  passError = "Wrong password";
  return false;
}
