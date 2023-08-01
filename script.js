// Assignment Code
var generateBtn = document.querySelector("#generateBtn");
var upperLetter = confirm("Include upper case letters?");
var lowerLetter = confirm("Include lower case letters?");
var num = confirm("Include numbers?");
var special = confirm("Include special characters?");
var passwordLength = prompt("Choose a password length between 8 and 128 characters.");
var passwordLen = parseInt(passwordLength)



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);