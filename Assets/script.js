// Assignment code here
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// ! THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// ! WHEN I answer each prompt
// ! THEN my input should be validated and at least one character type should be selected
// !WHEN all prompts are answered
// !THEN a password is generated that matches the selected criteria
// !WHEN the password is generated
// !THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");

function askLength() {
  var length = prompt("How many characters do you want your password to be? (Choose between 8 and 128)")
  var parsedInput = parseInt(length, 10);
  if (!isNaN(parsedInput) && parsedInput >= 8 && parsedInput <= 128) {
    return length
  }
    else {
    alert("Invalid entry. Needs to be a number between 8 and 128.")
    askLength()
  }
}

function askUpperCase() {
  var wantsUpperCase = confirm("Do you want uppercase characters included?")
  return wantsUpperCase
}

function askNumbers() {
  var wantsNumbers = confirm("Do you want numbers included?")
  return wantsNumbers
}

function askSpecialCharacters() {
  var wantsSpecialCharacters = confirm("Do you want special characters included?")
  return wantsSpecialCharacters
}

function combinePossibleCharacters(wantsUpperCase, wantsNumbers, wantsSpecialCharacters) {
  const lowerCaseletters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const specialCharacters = '!@#$%^&*()_+-=[]{}|:;"\',.<>?/`~\\'

  list = lowerCaseletters
  if (wantsUpperCase) {
    list = list.concat(upperCaseLetters)
  }
  if (wantsNumbers) {
    list = list.concat(numbers)
  }
  if (wantsSpecialCharacters) {
    list = list.concat(specialCharacters)
  }
  return list
}

// loop through master list at random indexes appending that character in order to generate password 
function generatePassword(length, possibleCharacters) {
  var password = ''
  for (var i = 0; i < length; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  return password
}

function getPassword() {
  var length = askLength()
  var wantsUpperCase = askUpperCase()
  var wantsNumbers = askNumbers()
  var wantsSpecialCharacters = askSpecialCharacters()
  var possibleCharacters = combinePossibleCharacters(wantsUpperCase, wantsNumbers, wantsSpecialCharacters)
  var password = generatePassword(length, possibleCharacters)
  return password
}

function writePassword() {
  var password = getPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
