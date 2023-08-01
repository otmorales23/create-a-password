// Assignment Code
var generateBtn = document.querySelector("#generateBtn");
var upperLetter = confirm("Include upper case letters?");
var lowerLetter = confirm("Include lower case letters?");
var num = confirm("Include numbers?");
var special = confirm("Include special characters?");
var passwordLength = prompt("Choose a password length between 8 and 128 characters.");
var passwordLen = parseInt(passwordLength)

if (passwordLen >= 8 && passwordLen <= 128) {
  function generatePassword() {
    var emptyString = "";
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&()*+,-./:;<=>?@^[]^_`{|}~';
    
    emptyString += upperLetter ? uppercase : '';
    emptyString += lowerLetter ? lowercase : '';
    emptyString += num ? numbers : '';
    emptyString += special ? symbols : '';
    
  
    var password = '';
    for (var i = 0; i < passwordLen; i++) {
      password += emptyString.charAt(Math.floor(Math.random() * emptyString.length));
         
    }
    console.log(password)
    return password;
  }
} else {
  alert("Password must be between 8 and 128 characters.")
}

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