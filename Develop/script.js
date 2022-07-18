// Assignment code here

/* ---------------------- password generator functions ---------------------- */

// generate lowercase characters 97 - 122

function randomLower() {
  const lowercase = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  return lowercase;
}

// generate uppercase characters 65 - 90

function randomUpper() {
  const uppercase = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  return uppercase;
}

// generate number characters 48 - 57
function randomNumbers() {
  const numbers = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  return numbers;
}

// generate special characters 35 - 122

function randomSpecial() {
  const specialCharacters = `!"#$%&()*+-/:;<=>?@`;
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

// Random Password Object
const randomFunc = {
  
}

/* ------------------------ Check Password Attributes ----------------------- */
// Password length number input
const passwordNumber = document.querySelector('#length-number-input');
// Password length range input
const passwordRange = document.querySelector('#length-slider-input');
// Uppercase checkbox
const uppercaseCheckbox = document.querySelector('#uppercase');
// Lowercase checkbox
const lowercaseCheckbox = document.querySelector('#lowercase');
// Numbers checkbox
const numbersCheckbox = document.querySelector('#numbers');
// Specials checkbox
const specialCheckbox = document.querySelector('#special-characters');

// Password range length event
function handleRangeInput(e) {
  if (passwordNumber.value !== passwordRange.value) {
    passwordNumber.value = passwordRange.value;
  }
}
passwordRange.addEventListener('mouseup', handleRangeInput);

// Password number length event
function handleNumberInput(e) {
  console.log('hello');
  if (passwordNumber.value !== passwordRange.value) {
    passwordRange.value = passwordNumber.value;
  }
}
passwordNumber.addEventListener('keyup', handleNumberInput);
passwordNumber.addEventListener('mouseup', handleNumberInput);

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// copy password

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
