/* -----------------------  JavaScript Assignment 04 | Task 10 ----------------------- */


/*  10. Write a program that round a number to a given decimal places. */

/* ------------ Soution with HTML UI ------------ */

// function manageDecimals() {

//     var entValue = parseFloat(document.getElementById("userInput").value),

//         decPoint = parseInt(document.getElementById("decimalPlaces").value);

//     var roundDec = entValue.toFixed(decPoint);

//     document.getElementById("result").innerHTML = roundDec;

// }


/* ------------ Soution print console.log() ------------ */

var input = parseFloat(prompt("Enter a Number. "));

var dec = parseInt(prompt("Enter which decimal point you want !"));

console.log("Value : " + input);

var fix = input.toFixed(dec);

console.log("Round Value : " + fix);