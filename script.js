// Assignment code here
var lowcase = "abcdefghijklmnopqrstuvwxyz"
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()_+-={}:'<>?[/].,;"
var number = Math.floor(Math.random());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

var lowcase = "abcdefghijklmnopqrstuvwxyz"
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()_+-={}:'<>?[/].,;"
var number = Math.floor(Math.random());

  var charlength = window.prompt("How many characters should be in this password?");
    if (
      (charlength >=8 || charlength <=128) 
    )
    if (
      charlength <8 || charlength >128 ) {
      window.alert('Password length must be between 8 and 128 characters')
      return
      }

  console.log ("Password is " + charlength + " characters long");

  var specialchar = window.confirm("Would you like any special characters?");
      if (specialchar) {
        console.log ('Password will contain special characters')
      };

  var lowerc = window.confirm("Do you want lower cased letters?");
    if (lowerc) {
      console.log ('Password will contain lower cased letters')
    };

  var upperc = window.confirm("Do you want upper cased letters?");
  if (upperc) {
    console.log ('Password will contain upper cased letters')
  };

  var num = window.confirm("Do you want numbers?");
  if (num) {
    console.log ('Password will contain numbers')
  };

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    };
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
