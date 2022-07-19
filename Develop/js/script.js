// Assignment code here

/* ------------------ random character generator functions ------------------ */

// generate lowercase characters charcodes: 97 - 122
function randomLower() {
  const lowercase = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  return lowercase;
}

// generate uppercase characters charcodes: 65 - 90
function randomUpper() {
  const uppercase = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  return uppercase;
}

// generate number characters charcodes: 48 - 57
function randomNumbers() {
  const numbers = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  return numbers;
}

// generate special characters charcodes: 35 - 122
function randomSpecial() {
  const specialCharacters = `!"#$%&()*+-/:;<=>?@`;
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

// Random Password Object
const randomPassFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumbers,
  special: randomSpecial,
};

/* ------------------------ Check Password Attributes ----------------------- */
// Password length number input selector
const passwordNumber = document.querySelector(
  '#length-number-input[type="number"]'
);
// Password length range input selector
const passwordRange = document.querySelectorAll(
  '#length-slider-input[type="range"]'
);
console.log(passwordRange);
// Uppercase checkbox selector
const uppercaseCheckbox = document.querySelector('#uppercase');
// Lowercase checkbox selector
const lowercaseCheckbox = document.querySelector('#lowercase');
// Numbers checkbox selector
const numbersCheckbox = document.querySelector('#numbers');
// Specials checkbox selector
const specialCheckbox = document.querySelector('#special-characters');
// Generate password button selector
const generateBtn = document.querySelector('#generate');
// Generated password text area selector
const passwordTextArea = document.querySelector('.generated-password-area');

// Password attribute event listeners
function writePassword() {
  const lengthNumber = parseInt(passwordNumber.value);
  const uppercaseBool = uppercaseCheckbox.checked;
  const lowercaseBool = lowercaseCheckbox.checked;
  const numbersBool = numbersCheckbox.checked;
  const specialBool = specialCheckbox.checked;

  // Write password to text area
  passwordTextArea.innerText = generatePassword(
    uppercaseBool,
    lowercaseBool,
    numbersBool,
    specialBool,
    lengthNumber
  );
}

/* ------------------------ generate random password ------------------------ */
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Generate random password function
function generatePassword(upper, lower, number, special, length) {
  // create a password variable
  let generatedPassword = '';
  // filter out unchecked attributes of the password //
  // How many checkboxes are ticked
  const attributeCount = upper + lower + number + special;
  // Turn the attribute booleans into an array of objects, loop through each object
  // and filter out the values that aren't checked
  const attributeArray = [{ upper }, { lower }, { number }, { special }].filter(
    (attributes) => Object.values(attributes)[0]
  );
  // return an empty string if none of the password attributes have been checked
  if (attributeCount === 0) {
    return 'Please tick at least one password attribute';
  }
  // find the length of the password and loop through the length, generating the password
  for (let i = 0; i < length; i += attributeCount) {
    attributeArray.forEach((attribute) => {
      const charKey = Object.keys(attribute)[0];
      // Append the character the generated password string
      generatedPassword += randomPassFunc[charKey]();
    });
  }

  const finishedPassword = generatedPassword.slice(0, length);
  return finishedPassword;
  // for the length of the password loop through and call the generator function
  // assign the password variable to output of the loop and return the password
}

/* -------------------- updating password length changes -------------------- */
// Password range length change event
function handleRangeInput() {
  const sliderVal = document.getElementById('length-slider-input').value;
  if (passwordNumber.value !== sliderVal) {
    passwordNumber.value = sliderVal;
  }
}

passwordRange.forEach((input) => {
  input.addEventListener('input', handleRangeInput);
});

// Password number length change event
function handleNumberInput() {
  const slider = document.getElementById('length-slider-input');
  if (slider.value !== passwordNumber.value) {
    slider.value = passwordNumber.value;
  }
}
passwordNumber.addEventListener('input', handleNumberInput);

/* ------------------------------ copy password ----------------------------- */
// Copy password button selector
const copyPasswordBtn = document.querySelector('.copy-button');

// handler copy password function
function handleCopyPassword() {
  // create a text element for the copied password text content to sit in
  const passwordArea = document.createElement('textarea');
  // create a variable containing the text from the generated password
  const passwordText = passwordTextArea.textContent;
  // return nothing if there's no password present
  if (!passwordText) {
    return;
  }
  // add the generated password text to the value of the newly created text area
  passwordArea.value = passwordText;
  // append the created text area to the DOM
  document.body.appendChild(passwordArea);
  // use the select method to select the text in the newly created text area
  passwordArea.select();
  // copy the text to the clipboard
  document.execCommand('copy');
  // remove the newly created area
  passwordArea.remove();
  alert('Password copied to clipboard');
}

// Copy password event listener
copyPasswordBtn.addEventListener('click', handleCopyPassword);
