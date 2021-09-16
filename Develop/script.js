// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ============= New functionality ============= //

// Define global variables
var alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetUpperCase = alphabetLowerCase.map(alphabetLowerCase => alphabetLowerCase.toUpperCase());
var specialCharactersList = ['!', '@', '#', '$','%'];
var numberList = [1,2,3,4,5,6,7,8,9,0];
var characterListCombined = [alphabetLowerCase.concat(alphabetUpperCase.concat(specialCharactersList.concat(numberList)))];

var generatePassword = function() {
  var passwordLength = prompt("How many characters do you want your password to be?");
  if (passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
  }
  else if (passwordLength < 8) {
    alert("Password must be between 8 and 128 characters.");
  }
  else {
    var specialCharacters = confirm("Do you want to include special characters?");
  }

  for (i=0; i<passwordLength; i++) {
    var passwordString = (Math.floor(Math.random() * characterListCombined));

  }


  // if (specialCharacters) {
  //   for (i=0; i<passwordLength; i++) {
  //     var passwordString = Math.floor(Math.random() * characterListCombined.length);
  //   }
    
  //   } else {
  //     for (i=0; i<passwordLength; i++) {
  //       var passwordString = Math.floor(Math.random() * alphabetLowerCase.length);
  //     }
  // }

  // return passwordString;
}

// alert, prompt, confirm (Hints from Jung)
