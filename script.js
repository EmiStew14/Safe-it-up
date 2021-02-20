// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

var lowerc = "abcdefghijklmnopqrstuvwxyz"
var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialchar = "!@#$%^&*()_+-={}:'<>?[/].,;"
var num = "0123456789"
 
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

      }else {
        console.log("false")
      };

  var lowerc = window.confirm("Do you want lower cased letters?");
    if (lowerc) {
      console.log ('Password will contain lower cased letters')
    
    }else {
      console.log("false")
    };

  var upperc = window.confirm("Do you want upper cased letters?");
  if (upperc) {
    console.log ('Password will contain upper cased letters')
  
  }else {
    console.log("false")
  };

  var num = window.confirm("Do you want numbers?");
  if (num) {
    console.log ('Password will contain numbers')

  }else {
    console.log("false")
  };

  if (specialchar + lowerc + upperc + num === 'false'); {
  window.alert = "You must pick a category! Please choose at lease one."
  return
  };
};

  function pwdShuffle (mastStr) {
    var arr = mastStr.split('');

    arr.sort(function() {
      return 0.5 - Math.random();
    });
    mastStr = arr.join('');
    return mastStr;
  }
  var mastStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}:'<>?[/].,;0123456789";
  mastStr = pwdShuffle(mastStr);

  /*console.log(mastStr);*/

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var writePassword = (password);

  function writePassword(pwdShuffle)
  
generateBtn.addEventListener("click", writePassword);
