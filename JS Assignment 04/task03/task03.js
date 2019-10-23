/* -----------------------  JavaScript Assignment 04 | Task 03 ----------------------- */


/*  Q3. Write a program to take password as an input from user. The password must qualify these requirements:
        a. It should contain alphabets and numbers
        b. It should not start with a number
        c. It must at least 8 characters long
        d. If the password does not meet the above requirements, prompt
            the user to enter a valid password. For character codes of a-z,A-Z & 0-9 */

function CheckPas() {

    var passInput = document.getElementById("inputPass").value;

    var passw = /^[A-Za-z]\w{7,14}$/;

    if (passInput.match(passw)) {
        alert("Correct Password, try another...");
        document.getElementById("result").innerHTML = "Your password is : " + passInput;
    } else {
        alert("Password does not match For character codes of a-z,A-Z & 0-9");
        document.getElementById("result").innerHTML = "Your password is : " + passInput;
    }
}




/* ------ Solution 02 work in process ---- */

// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {  
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {  
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {  
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }