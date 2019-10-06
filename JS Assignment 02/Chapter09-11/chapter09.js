// Q1. Write a program to take “city” name as input from user.If user enters “Karachi”,
//     welcome the user like this:
//    “Welcome to city of lights”

// var userInput = prompt("Enter your city Name!");

// if (userInput === "Karachi") {
//   document.write("Welcome to city of Light : " + userInput);
// } else if (userInput === "KARACHI") {
//   document.write("Welcome to city of Light : " + userInput);
// } else if (userInput === "karachi") {
//   document.write("Welcome to city of Light : " + userInput);
// } else {
//   alert("Please Enter 'KARACHI' OR 'Karachi' OR 'karachi' ");
// }

// ******---------------------- Question No 1. Complete ------------------------****** //

// Q2. Write a program to take “gender” as input from user.If the
//     user is male, give the message: Good Morning Sir.If the
//     user is female, give the message: Good Morning Ma’am.

// var input = prompt("Gender");

// if (input === "Male") {
//   alert("Good Morning Sir!");
//   document.write("Good Morning Sir!");
//   console.log("Good Morning Sir!");
// } else if (input === "Female") {
//   alert("Good Morning Ma’am");
//   document.write("Good Morning Ma’am");
//   console.log("Good Morning Ma’am");
// } else {
//   alert("Please Enter a Gender! ");
//   document.write("Error 404. | Please Enter a Gender!");
// }

// ******---------------------- Question No 2. Complete ------------------------****** //

// Q3. Write a program to take input color of road traffic signal
//     from the user & show the message according to this table.

// var inputColorName = prompt(
//   "Enter a Traffic Signal Color! | Red |Green | Yellow"
// );

// if (inputColorName === "Red") {
//   alert("Must Stop!");
//   document.write("<h3>You are enter a 'RED' color thats mean: Must Stop!</h3>");
//   console.log("<h3>You are enter a 'RED' color thats mean: Must Stop!</h3>");
// } else if (inputColorName === "Yellow") {
//   alert("Ready to move!");
//   document.write(
//     "<h3>You are enter a 'YELLOW' color thats mean: Ready to move!</h3>"
//   );
// } else if (inputColorName === "Green") {
//   alert("Move now!");
//   document.write(
//     "<h3>You are enter a 'Green' color thats mean: Move now!</h3>"
//   );
// } else {
//   window.alert("Please enter a following Colors only | Red | Green | Yellow");
// }

// ******---------------------- Question No 3. Complete ------------------------****** //

// Q4. Write a program to take input remaining fuel in car(in
//     litres) from user.If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var inputFuelLitter = prompt("Enter your fuel tank reading.");

var convertIntoFloatNumber = parseFloat(inputFuelLitter);

if (convertIntoFloatNumber < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("your fuel tank reading is : " + convertIntoFloatNumber);
}

// ******---------------------- Question No 4. Complete ------------------------****** //

// Q5. Run this script, & check whether alert message would be
//     displayed or not.Record the outputs.

// var a = 4;

// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// Output is : given condition for variable a is true

// var b = 82;

// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// Output is : Alert is not showing because condition was false.

// var c = 12;

// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// Output is : Condition 2 & 4 is True.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// Output is : Condition true | The cost equals.

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// Output is : True

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// Output is : Car is smaller then cat

// ******---------------------- Question No 5. Complete ------------------------****** //

// Q6. Write a program to take input the marks obtained in three
//     subjects & total marks.Compute & show the resulting
//     percentage on your page.Take percentage & compute
//     grade as per following table:

// var totalMarks = prompt("Enter your Total Marks!");
// var obtainedMarks = prompt("Enter your Obtained Marks!");

// var tMarks = parseInt(totalMarks);
// var obtMarks = parseInt(obtainedMarks);

// var percentage = ((obtMarks / tMarks) * 100).toFixed(2);

// if (percentage >= 80 && percentage <= 100) {
//   document.write(
//     "<h1>Marks Sheet</h1>" +
//       "<br>" +
//       "Total Marks : " +
//       tMarks +
//       "<br>" +
//       "Marks Obtained : " +
//       obtMarks +
//       "<br>" +
//       "Percentage : " +
//       percentage +
//       "%" +
//       "<br>" +
//       "Grade : A-One" +
//       "<br>" +
//       "Remarks : Excellent"
//   );
// } else if (percentage >= 70 && percentage <= 79.99) {
//   document.write(
//     "<h1>Marks Sheet</h1>" +
//       "<br>" +
//       "Total Marks : " +
//       tMarks +
//       "<br>" +
//       "Marks Obtained : " +
//       obtMarks +
//       "<br>" +
//       "Percentage : " +
//       percentage +
//       "%" +
//       "<br>" +
//       "Grade : A" +
//       "<br>" +
//       "Remarks : Good"
//   );
// } else if (percentage >= 60 && percentage <= 69.99) {
//   document.write(
//     "<h1>Marks Sheet</h1>" +
//       "<br>" +
//       "Total Marks : " +
//       tMarks +
//       "<br>" +
//       "Marks Obtained : " +
//       obtMarks +
//       "<br>" +
//       "Percentage : " +
//       percentage +
//       "%" +
//       "<br>" +
//       "Grade : B" +
//       "<br>" +
//       "Remarks : You need to improve"
//   );
// } else if (percentage < 60) {
//   document.write(
//     "<h1>Marks Sheet</h1>" +
//       "<br>" +
//       "Total Marks : " +
//       tMarks +
//       "<br>" +
//       "Marks Obtained : " +
//       obtMarks +
//       "<br>" +
//       "Percentage : " +
//       percentage +
//       "%" +
//       "<br>" +
//       "Grade : Fail" +
//       "<br>" +
//       "Remarks : Sorry"
//   );
// } else {
//   alert("Error 404.");
// }

// ******---------------------- Question No 6. Complete ------------------------****** //

// Q7. Guess Game:
//     Store a secret number(ranging from 1 to 10) in a variable.
//     Prompt user to guess the secret number.

//   a.If user guesses the same number, show “Bingo! Correct
//     answer”.

//   b.If the guessed number + 1 is the secret number, show
//     “Close enough to the correct answer”.

// var randNumber = Math.floor(Math.random() * 10);

// var guessNumber = prompt(
//   "Please Guess the Number 0 to 10." +
//     "\n" +
//     "The Secret Number is : " +
//     randNumber // Secret Number Variable
// );

// var convGuessNum = parseInt(guessNumber);

// if (randNumber === convGuessNum) {
//   alert("Correct answer! you win.");
// } else if (randNumber > guessNumber) {
//   alert("Close enough to the correct answer");
// } else if (randNumber < guessNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Please Enter a numbers only.");
// }

// ******---------------------- Question No 7. Complete ------------------------****** //

// Q8. Write a program to check whether the given number is
//     divisible by 3. Show the message to the user if the number
//     is divisible by 3.

// var divisibleNumber = prompt("Check Divisiblity !");

// divisibleNumber = parseInt(divisibleNumber);

// if (divisibleNumber % 3 == 0) {
//   alert("Yes. " + divisibleNumber + " is Divisible by 3.");
// } else {
//   alert("No. " + divisibleNumber + " is not Divisible by 3.");
// }

// ******---------------------- Question No 8. Complete ------------------------****** //

// Q9. Write a program that checks whether the given input is an
//     even number or an odd number.

// var enterNumber = prompt("Enter Number!");

// var convNum = parseInt(enterNumber);

// if (convNum % 2 == 0) {
//   alert("Even Number");
// } else {
//   alert("Odd Number");
// }

// ******---------------------- Question No 9. Complete ------------------------****** //

// Q10. Write a program that takes temperature as input and
//       shows a message based on following criteria

//     a.T > 40 then “It is too hot outside.”
//     b.T > 30 then “The Weather today is Normal.”
//     c.T > 20 then “Today’s Weather is cool.”
//     d.T > 10 then “OMG! Today’s weather is so Cool.”

// var t = prompt("Temperature reading!");

// var temperature = parseInt(t);

// if (temperature >= 40 && temperature < 100) {
//   alert("“It is too hot outside.”");
// } else if (temperature >= 30 && temperature < 40) {
//   alert("“The Weather today is Normal.”");
// } else if (temperature >= 20 && temperature < 30) {
//   alert("“Today’s Weather is cool.”");
// } else if ((temperature >= 10 && temperature < 20) || temperature < 10) {
//   alert("“OMG! Today’s weather is so Cool.”");
// } else {
//   alert("Error 404.");
// }

// ******---------------------- Question No 10. Complete ------------------------****** //

// Q11. Write a program to create a calculator for +, -,*, / & %
//       using if statements.Take the following input:

//     a.First number
//     b.Second number
//     c.Operation(+, -, *, /, %)
//     Compute & show the calculated result to user.

// var num1 = prompt("Enter a First Value ! ");
// var operation = prompt("Enter Operator:  etc :  + - * / ...");
// var num2 = prompt("Enter a Second Value !");

// var val1 = parseInt(num1);
// var val2 = parseInt(num2);

// if (operation === "-") {
//   var resultSub = val1 - val2;
//   alert("Result is : " + val1 + operation + val2 + " = " + resultSub);
// } else if (operation === "+") {
//   var resultSum = val1 + val2;
//   alert("Result is : " + val1 + operation + val2 + " = " + resultSum);
// } else if (operation === "*") {
//   var resultMultiply = val1 * val2;
//   alert("Result is : " + val1 + operation + val2 + " = " + resultMultiply);
// } else if (operation === "/") {
//   var resultDevide = val1 / val2;
//   alert("Result is : " + val1 + operation + val2 + " = " + resultDevide);
// }

// ******---------------------- Question No 11. Complete ------------------------****** //
