/* -----------------------  JavaScript Assignment 04 | Task 15 ----------------------- */


/* Q15. Write a program to ask the user about his age. Calculate and show
        is birth year in your browser.
*/

function ageCalc() {

    var birthYear = document.getElementById("year").value;

    if (birthYear == "" || birthYear.match(/[A-Za-z]/g)) {
        alert("Please Enter a Birth Year!");
    } else {
        var currentdate = new Date(),
            currentYear = currentdate.getFullYear();

        var age = currentYear - birthYear;

        document.getElementById("result").innerHTML = age;

    }
}