// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

 var lowerc = "abcdefghijklmnopqrstuvwxyz"
 var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var specialchar = "!@#$%^&*()_+-={}:'<>?[/].,;"
 var number = "0123456789"
 masStr= ''

  var charlength = window.prompt("How many characters should be in this password?");

    if (
      charlength <8 || charlength >128 ) {
      var charlength = window.alert('Password length must be between 8 and 128 characters')
      return 
      }

  console.log ("Password is " + charlength + " characters long");

  var specialchar = window.confirm("Would you like any special characters?");
      if (specialchar === true) {
        masStr += specialchar
        console.log ('Password will contain special characters')
      }

  var lower = window.confirm("Do you want lower cased letters?");
    if (lower) {
       masStr += lowerc
      console.log ('Password will contain lower cased letters')
    }
  var upper = window.confirm("Do you want upper cased letters?");
  if (upper) {
    masStr += upperc
    console.log ('Password will contain upper cased letters')
  }

  var number = window.confirm("Do you want numbers?");
  if (number) {
    masStr += number
    console.log ('Password will contain numbers')
  };

  if ( masStr === '') {
  masStr = window.alert("You must pick a category! Please choose at lease one.")
  return
  };
};
  
generateBtn.addEventListener("click", writePassword); {

    function shuffle(masStr) {
      var arr = masStr.split('');           // Convert String to array
      
      arr.sort(function() {
        return 0.5 - Math.random();
      });  
      masStr = arr.join('');                // Convert Array to string
      return masStr;                        // Return shuffled string
    }
    
    var masStr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}:'<>?[/].,;0123456789"
    
    s = shuffle(masStr);
    password = s;
    
    var passwordText = document.querySelector("#password");
  passwordText.value = password;

    console.log(password);
    
  function writePassword(s)
  };
