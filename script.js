// user loads into site and sees a button
// make button and area for password
//user clicks button
// add event listener to button
// a way of asking user for characters
// a way to store characters that the user wants
// a way to randomly select character and build a string
// return random password
//user gets password


// Assignment code here
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
var numerChar = "0123456789"
var specChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var possChar = ''
  var chosChar = ''

  function getPassLength() {
    var passLength = prompt("How many characters would you like?");
    if (passLength === "" || passLength === null) {
      window.alert("You need to provide a number between 8 and 128! Please try again.")
      return getPassLength();
    }

    if (passLength < 8) {
      window.alert("You need to provide a number greater than or equal to 8. Please try again.")
      return getPassLength();
    }

    if (passLength > 128) {
      window.alert("You need to provide a number less than 128. Please try again.")
      return getPassLength();
    }

    return passLength;
  }

  var passwordLength = getPassLength()
  console.log(passwordLength);

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