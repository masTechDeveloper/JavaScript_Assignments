// Post Increment

// var number = 5;

// var n = number++;

// alert("number value " + number + " n value " + n);

// Pre increment

// var number = 5;

// var n = ++number;

// alert("number value " + number + " n value " + n);

// var number = 12;

// var n = number--;

// alert("number value " + number + " n value " + n);

// Increment & Decrement Random Example 01

// var number = 12;

// var result = number++ - --number + ++number;

// alert("number value " + number + " result value " + result);

// Increment & Decrement Random Example 02

// var number = 10;

// var result = --number + number-- - ++number - --number;

// alert("number value " + number + " result value " + result);

// If Else Example 01

// var age = prompt("What is your age ?");

// if (age <= 10) {
//   alert("Your are" + age);
// }

// if Else Statement Example 02

// var ab = prompt("are you in blockchain student");

// if (ab == "yes") {
//   alert("Welcome in class");
// } else if (ab == "YES") {
//   alert("Welcome in class");
// } else {
//   alert("Get out!");
// }

// if Else Statement Find Grades Example 04

// && Op

// var per = prompt("What is your percentage %");

// if (per >= 80 && per <= 100) {
//   alert("Grade 'A++'");
//   if (per > 90) {
//     alert("Awarde Rs. 100,000.00");
//   } else if (per > 85) {
//     alert("Awarde Rs. 8,000.00");
//   }
// } else if (per >= 70 && per < 80) {
//   alert("Grade 'A'");
// } else if (per >= 60 && per < 70) {
//   alert("Grade 'B'");
// } else if (per >= 50 && per < 60) {
//   alert("Grade 'C'");
// } else {
//   alert("Fail");
// }

// Value Calculator

var num1 = prompt("Enter a First Value ! ");
var operation = prompt("Enter Operator:  etc :  + - * / ...");
var num2 = prompt("Enter a Second Value !");

var val1 = parseInt(num1);
var val2 = parseInt(num2);

if (operation === "-") {
  var resultSub = val1 - val2;
  alert("Result is " + resultSub);
} else if (operation === "+") {
  var resultSum = val1 + val2;
  alert("Result is " + resultSum);
} else if (operation === "*") {
  var resultMultiply = val1 * val2;
  alert("Result is " + resultMultiply);
} else if (operation === "/") {
  var resultDevide = val1 / val2;
  alert("Result is " + resultDevide);
}

// If Statement use in Vovels

// var a = prompt("Enter Characters");

// if (a == "A" || a == "E" || a == "I" || a == "O" || a == "U") {
//   alert("Its Vowel!");
// } else {
//   alert("Not Vowel!");
// }
