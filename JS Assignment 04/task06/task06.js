/* -----------------------  JavaScript Assignment 04 | Task 06 ----------------------- */


/*  Q6. Write a program that simulates a dice using random() method of JS
        Math class. Display the value of dice in your browser. */

let dice = Math.floor(Math.random() * 6 + 1);

document.write("Random dice value is : " + dice);