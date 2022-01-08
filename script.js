// user loads into site and sees a button
// make button and area for password
//user clicks button
// add event listener to button
// a way of asking user for characters
// a way to store characters that the user wants
// a way to randomly select character and build a string
// return random password
//user gets password


// String method to define criteria variables
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
var numerChar = "0123456789"
var specChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// generateBtn element with class #generate is returned
var generateBtn = document.querySelector("#generate");

// Function to generate password based on prompts user selects
function generatePassword() {

  // Empty strings based on user preference for password
  var possChar = ''
  var chosChar = ''

  // Function to generate password based on prompt about password length 
  function getPassLength() {
    // Ask user how many characters for password and provide input field for user
    var passLength = prompt("How many characters would you like?");
    // Use "if" conditional statement to specify the number of characters to execute function
    if (passLength === "" || passLength === null) {
      window.alert("You need to provide a number between 8 and 128! Please try again.")
      // Use return to call function again and stop the rest of this function from running
      return getPassLength();
    }
    // Use "if" conditional statement for input greater than or equal to 8
    if (passLength < 8) {
      window.alert("You need to provide a number greater than or equal to 8. Please try again.")
      return getPassLength();
    }
    // Use "if" conditional statement for input less than or equal to 128
    if (passLength > 128) {
      window.alert("You need to provide a number less than 128. Please try again.")
      return getPassLength();
    }
    return passLength;
    
  }
  // Check the number of characters user input 
  var passwordLength = getPassLength()
  console.log(passwordLength);
  
  // Ask user confirm prompts for lowercase, uppercase, numerical, and/or special characters in password
  var lowerConfirm = confirm("Do you want lowercase characters?");
  var upperConfirm = confirm("Do you want uppercase characters?");
  var numerConfirm = confirm("Do you want numeric characters?");
  var specConfirm = confirm("Do you want special characters?")


  if (lowerConfirm) {
    possChar += lowerChar
  }

  if (upperConfirm) {
    possChar += upperChar
  }

  if (numerConfirm) {
    possChar += numerChar
  }

  if (specConfirm) {
    possChar += specChar
  }



  for (let i = 0; i < passwordLength; i++) {
    chosChar += possChar[Math.floor(Math.random() * possChar.length)]
  }
// User gets password
  return chosChar;
}

// Displays random password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value generates random password
  passwordText.value = password;

}

// Event listener generates button with a "click"
generateBtn.addEventListener("click", writePassword);