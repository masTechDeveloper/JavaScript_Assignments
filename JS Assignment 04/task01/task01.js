/* -----------------------  JavaScript Assignment 04 | Task 01 ----------------------- */


/*  Q1. Write a program to replace the “Hyder” to “Islam” in the word
        “Hyderabad” and display the result in your browser. */



var actualWord = "Hyderabad";

var replaceWord = actualWord.replace(/Hyder/g, "Islam");

document.write("Actual Word is :- " +
    actualWord +
    "<br>" +
    "Replace Word is :- " +
    replaceWord);