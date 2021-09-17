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
var specialCharactersList = ['!', '@', '#', '$','%', '^', '&', '*'];
var numberList = [1,2,3,4,5,6,7,8,9,0];
var characterListCombined = alphabetLowerCase.concat(alphabetUpperCase, specialCharactersList, numberList);

var generatePassword = function() {
  // Declares empty array 
  var passwordArray = [];
  // Prompts user for password length
  var passwordLength = prompt("How many characters do you want your password to be?");
  // Checks that user input is an integer
  if (isNaN(passwordLength)) { 
    return "Please input a whole number";
    // Checks that user-entered password length is between 8 and 128 characters
  } else if (passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
  } else if (passwordLength < 8) {
    alert("Password must be between 8 and 128 characters.");
     // If password is between 8 and 128 characters, confirms if user wants to include special characters in generated password
  } else {
    var specialCharacters = confirm("Do you want to include special characters, numbers, and capital letters?");
  }

  // If user selects special characters
  if (specialCharacters) {
    // Generated random character from password character list array and pushes it to end of password array over the length of password entered by user
    for (i=0; i<passwordLength; i++) {
      var randomCharacter = characterListCombined[Math.floor(Math.random()* characterListCombined.length)];
      var looper = i; // dummy variable for loop
      passwordArray.push(randomCharacter); // saves randomly generated character from array to end of password array
    }

    // Ensures that generated password has at least one special character
    var found = passwordArray.some(r=> specialCharactersList.includes(r))
    if (found === false) {
      passwordArray.push(specialCharactersList[Math.floor(Math.random()* specialCharactersList.length)]);
      passwordArray.shift();
      console.log('fixed');
    }
    
  // If user does not want special characters
  } else if (specialCharacters == false) {
    for (i=0; i<passwordLength; i++) {
      var randomCharacter = alphabetLowerCase[Math.floor(Math.random()* alphabetLowerCase.length)];
      var looper = i; // dummy variable for loop
      passwordArray.push(randomCharacter); // saves randomly generated character from array to end of password array
    }
  } else {
    return;
  }

  // Converts password array into a string
  var passwordString = passwordArray.join("");

  // Returns generated password so that it will display in box (line 6)
  return passwordString;
}
