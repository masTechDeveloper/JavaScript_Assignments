/* 1. Write a function that computes the factorial of a number  */

var val = prompt("Enter a Number!");

function factorial(num) {

    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

alert("You are enter " + val + " & Factorial Number is " + factorial(val));