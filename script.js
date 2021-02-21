// Assignment code here

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
      var charlength = window.alert('Password length must be between 8 and 128 characters')
      return 
      }

  console.log ("Password is " + charlength + " characters long");

  var special = window.confirm("Would you like any special characters?");
      if (special) {
        console.log ('Password will contain special characters')

      }else {
        console.log("false")
      };

  var lower = window.confirm("Do you want lower cased letters?");
    if (lower) {
      console.log ('Password will contain lower cased letters')
    
    }else {
      console.log("false")
    };

  var upper = window.confirm("Do you want upper cased letters?");
  if (upper) {
    console.log ('Password will contain upper cased letters')
  
  }else {
    console.log("false")
  };

  var number = window.confirm("Do you want numbers?");
  if (number) {
    console.log ('Password will contain numbers')

  }else {
    console.log("false")
  };

  if (special + lower + upper + number === 'undefined'); {
  window.alert = "You must pick a category! Please choose at lease one."
  return
  };
};

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
generateBtn.addEventListener("click", writePassword); {
  var lowerc = "abcdefghijklmnopqrstuvwxyz"
  var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialchar = "!@#$%^&*()_+-={}:'<>?[/].,;"
  var num = "0123456789"
  var mastStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}:'<>?[/].,;0123456789";
  var len = Math.ceil(passwordText/2);
    len = len - 1;
    var lenSpec = passwordText-2*len;

    for (i=0;i<len;i++) {
        password+=upperc.charAt(Math.floor(Math.random()*upperc.length));
        password+=num.charAt(Math.floor(Math.random()*num.length));
    }

    for (i=0;i<lenSpec;i++)
        password+=specialchar.charAt(Math.floor(Math.random()*specialchar.length));
        password+=lowerc.charAt(Math.floor(Math.random()*lowerc.length));

    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');

  console.log(password);
  //return password
};
