/* -----------------------  JavaScript Assignment 04 | Task 05 ----------------------- */


/*  Q5. Write a program that takes a positive integer from user & display the
        following in your browser.
        
        a. number
        b. round off value of the number
        c. floor value of the number
        d. ceil value of the number */



var userInput = prompt("Please enter some value!");

const round = Math.round(userInput);
const floor = Math.floor(userInput);
const ceil = Math.ceil(userInput);

document.write("Number : " + userInput + "<br>");
document.write("Round Off : " + round + "<br>");
document.write("Floor : " + floor + "<br>");
document.write("Ceil : " + ceil + "<br>");