// Assignment Code
  let generateBtn = document.querySelector("#generate");
  let lowercaseChar = "qwertyuiopasdfghjklzxcvbnm";
  let uppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let numericChar = "1234567890";
  let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let passwordChar;
  let password = "";

// Write password to the #password input

function generatePassword() {
// Prompts user to enter numeric value for password
  let passwordLengthPrompt = window.prompt("How many characters would you like your password to contain? Must be between 8-128.");
  passwordLengthPrompt = parseInt(passwordLengthPrompt);
  
// Conditional based on password length criteria, if prompt return true a window alert will say 'Great'. If it returns false an alert window will give a reminder of the length criteria and direct them back to the input prompt.
  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    window.alert("Great!");
}  else {
  window.alert("Your password must be between 8 and 128 characters.");
  generatePassword();
}

// Confirms if user would like lowercase characters
  let confirmLowercase = confirm("Would you like to include lowercase characters?");
    if (confirmLowercase) {
      console.log("include lowercase");
      passwordChar += lowercaseChar;
    } else {
      console.log("don't include lowercase");
    } 

// Confirms if user would like uppercase characters 
  let confirmUppercase = confirm ("Would you like to include uppercase characters?");
    if (confirmUppercase){
        console.log("include uppercase");
        passwordChar += uppercaseChar;
    } else {
        console.log("don't include uppercase");
    }

// Confirms if user would like numerical characters
  let confirmNumeric = confirm("Would you like to include numbers?");
    if (confirmNumeric){
        console.log("include numbers");
        passwordChar += numericChar;
    } else {
        console.log ("don't include numbers");
      }

// Confirms if user would like special characters
  let confirmSpecialChar = confirm ("Would you like to include special characters?")
    if (confirmSpecialChar) {
        console.log("include special characters");
        passwordChar += specialChar;
    } else {
        console.log("don't include special characters")
    }

// Generates password based on criteria 
  for (let i = 0; i < passwordLengthPrompt; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

// Displays password to the page
  return password;
} 

function writePassword() {
   password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds event listener to generate button
  generateBtn.addEventListener("click", writePassword);
