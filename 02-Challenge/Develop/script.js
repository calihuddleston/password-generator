// Assignment Code
let generateBtn = document.querySelector("#generate");

let choices = {
lowercaseChar: "qwertyuiopasdfghjklzxcvbnm",
uppercaseChar: "QWERTYUIOPASDFGHJKLZXCVBNM",
numericChar: "1234567890",
specialChar: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}


// Write password to the #password input

function generatePassword() {
  console.log("you pressed the button!");
  let passwordLengthPrompt = window.prompt("How many characters would you like your password to contain? Must be between 8-128.");
  passwordLengthPrompt = parseInt(passwordLengthPrompt);
  
  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    window.alert("Great!");
}  else {
  window.alert("Your password must be between 8 and 128 characters.");
  generatePassword();
}

let confirmLowercase = confirm("Would you like to include lowercase characters?");
  if (confirmLowercase) {
    console.log("include lowercase");
    (choices ["lowercaseChar"]);
  } else {
    console.log("don't include lowercase");
  } 

let confirmUppercase = confirm ("Would you like to include uppercase characters?");
  if (confirmUppercase){
      console.log("include uppercase");
      (choices ["uppercaseChar"]);
  } else {
      console.log("don't include uppercase");
  }

let confirmNumeric = confirm("Would you like to include numbers?");
  if (confirmNumeric){
      console.log("include numbers");
      (choices ["numericChar"])
  } else {
      console.log ("don't include numbers");
    }

let confirmSpecialChar = confirm ("Would you like to include special characters?")
  if (confirmSpecialChar) {
      console.log("include special characters");
      (choices ["specialChar"]);
  } else {
      console.log("don't include special characters")
  }
// 1. Prompts the user for the password criteria
//    a. password length 8 < 128
//    b. lowercase, uppercase, numbers, special characters
// 2. Validate input
// 3. Generate password based on criteria 
for (let i = 0; i < passwordLengthPrompt; i++) {
  password = choices[Math.floor(Math.random() * choices.length)]
}
// 4. Display password to the page
return password
} 

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
