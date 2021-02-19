// Assignment code here
var lowcase = "abcdefghijklmnopqrstuvwxyz"
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()_+-={}:'<>?[/].,;"
var number = Math.floor(Math.random());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charlength = window.prompt("How many characters should be in this password?");
    if (
      (charlength >=8 || charlength <=128) 
    )
    if (
      charlength <8 || charlength >128 ) {
        charlength.preventDefault();
      window.alert('Password length must be between 8 and 128 characters')
      }

  console.log ("Password is" + charlength + "characters long");

  window.alert("Would you like any special characters?");
  console.log();

  window.alert("Do you want lower cased letters?");
  console.log();

  window.alert("Do you want upper cased letters?");
  console.log();

  window.alert("Do you want numbers?");
  console.log();

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    };
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
