// ***** --------------------------- Assignment 02 --------------------------- ***** //

// Q1. Write a program that takes a character(number or string)
//     in a variable & checks whether the given input is a
//     number, uppercase letter or lower case letter.
//     (Hint: ASCII codes: - A = 65, Z = 90, a = 97, z = 122).

// for (i = 0; i <= 3; i++) {  //for loop use.

//   var inputChar = prompt("Enter a String || Number");

//   if (isNaN(inputChar)) {
//     alert("ASCII Code is : " + inputChar.charCodeAt(0));
//     inputChar.split("").forEach(function(c) {
//       alert(c + ": " + c.charCodeAt(0));
//     });
//   } else {
//     alert("ASCII Code is : " + String.fromCharCode(inputChar));
//   }
// }

// ***** --------------------------- Question 01. Complete --------------------------- ***** //

// Q2. Write a JavaScript program that accept two integers and
//     display the larger.Also show if the two integers are equal.

// var input01 = prompt("Enter a first number.");
// var input02 = prompt("Enter a second number.");

// if (input01 == input02) {
//   alert("Two integers are equals : " + input01 + " & " + input02);
// } else if (input01 > input02) {
//   alert(input01 + " is larger number!");
// } else if (input02 > input01) {
//   alert(input02 + " is larger number!");
// } else {
//   alert("Error 404.");
// }

// ***** --------------------------- Question 02. Complete --------------------------- ***** //

// Q3. Write a program that takes input a number from user &
//     state whether the number is positive, negative or zero.

// let number = prompt("Pick a number?");

// number = parseFloat(number).toFixed(2);

// if (number > 0) {s
//   alert("Positive Number: " + number);
// } else if (number == 0) {
//   alert("Hey, there's nothing there! : " + number);
// } else if (number < 0) {
//   alert("Negative Number: " + number);
// } else {
//   alert("Its not a Number : " + number);
// }

// ***** --------------------------- Question 03. Complete --------------------------- ***** //

// Q4. Write a program that takes a character(i.e.string of
//     length 1) and returns true if it is a vowel, false otherwise

// var a = prompt("Enter Characters");

// if (
//   a == "A" ||
//   a == "E" ||
//   a == "I" ||
//   a == "O" ||
//   a == "U" ||
//   a == "a" ||
//   a == "e" ||
//   a == "i" ||
//   a == "o" ||
//   a == "u"
// ) {
//   alert("Its Vowel!");
// } else {
//   alert("Not Vowel!");
// }

// ***** --------------------------- Question 04. Complete --------------------------- ***** //

// Q5. Write a program that

//     a.Store correct password in a JS variable.
//     b.Asks user to enter his / her password
//     c.Validate the two passwords:
//         i.Check if user has entered password.If not, then
//             give message “ Please enter your password”
//         ii.Check if both passwords are same.If they are
//             same, show message “Correct! The password you
//             entered matches the original password”.Show
//             “Incorrect password” otherwise.

// const password = "@shir&?";

// let userInputPass = prompt("Please enter your password!");

// if (password === userInputPass) {
//   alert("“Correct! The password you entered matches the original password”");
// } else {
//   alert("“Incorrect password”");
// }

// ***** --------------------------- Question 05. Complete --------------------------- ***** //

// Q6. This if/else statement does not work. Try to fix it:

//     var greeting;
//     var hour = 13;
//     if (hour < 18) {
//         greeting = "Good day";
//     else
//         greeting = "Good evening";
//     }

// ******* ---------- Answer -------- ******* //

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
//   alert(greeting);
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   alert(greeting);
//   console.log(greeting);
// }

// ***** --------------------------- Question 06. Complete --------------------------- ***** //

// Q7. Write a program that takes time as input from user in 24
//     hours clock format like: 1900 = 7pm.Implement the
//     following case using if, else & else if statements.

// Method 01.

// var hours = prompt("Hours?");
// var minutes = prompt("Minutes");

// // Check whether AM or PM
// var newformat = hours >= 12 ? "PM" : "AM";

// // Find current hour in AM-PM Format
// hours = hours % 12;

// // To display "0" as "12"
// hours = hours ? hours : 12;
// minutes = minutes < 10 ? "" + minutes : minutes;

// alert(hours + ":" + minutes + " " + newformat);

// Method 02.

// var hours = prompt("Enter Hours"),
//   minutes = prompt("Enter Minutes");

// if ((hours = hours ? hours : 12)) {
//   var newformat = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;
//   alert("Time is :- " + hours + ":" + minutes + " " + newformat);
// } else {
//   alert("Error! Input Invalid");
// }
