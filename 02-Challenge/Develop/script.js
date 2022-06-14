// Assignment Code
let generateBtn = document.querySelector("#generate");
const lowercaseChar = "qwertyuiopasdfghjklzxcvbnm"
const uppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
const numericChar = "1234567890"
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Write password to the #password input

function generatePassword() {
  console.log("you pressed the button!")
  let passwordLengthPrompt = window.prompt("How many characters would you like your password to contain? Must be between 8-128.");
  passwordLengthPrompt = parseInt(passwordLengthPrompt)

// 1. Prompts the user for the password criteria
 //    a. password length 8 < 128
 if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
  window.confirm("Great!");
} else {
  window.alert("Your password length must be between 8 and 128 characters.");
} 

let confirmLowercase = confirm("Would you like to include lowercase characters?");
  if (confirmLowercase === true) {
    console.log("include lowercase");
    password += lowercaseChar;
  } else if (confirmLowercase === false){
    console.log("don't include lowercase")
    let confirmUppercase = confirm ("Would you like to include uppercase characters?")
  }
//    b. lowercase, uppercase, numbers, special characters
// 2. Validate input
// 3. Generate password based on criteria 


// 4. Display password to the page
  return "Generated password will go here!"
} 

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
