// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName() {
  var name = document.getElementById("usertext").value;
  if (name == null || name == "") {
    return false;
  } else if (name.length < 8 || name.length > 15) {
    return false;
  }
  for (let i = 0; i <= name.length; i++) {
    if (name[i] == " ") {
      return false;
    }
  }
  for (let i = 0; i <= name.length; i++) {
    if (name[i] == "!" || "@" || "#" || "$" || "%" || "^" || "&" || "*") {
      return false;
    }
  }
  return true;
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
  var email = document.getElementById("emailtext").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
  var password = document.getElementById("passwordtext").value;
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.length < 6) {
    return false;
  } else if (password.match(passw)) {
    return true;
  } else return false;
}
