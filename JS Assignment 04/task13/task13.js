/* -----------------------  JavaScript Assignment 04 | Task 13 ----------------------- */


/* Q13. Write a program that determines the minutes since midnight, Jan 1, 1970 
        and assigns it to a variable that hasn't been declared beforehand. 
        Use any variable you like to represent the Date object.
*/


/* ---------- Get Current Date Example ---------- */

var date = new Date();
document.write("Current Date : " + date + "<br>");

var miliSecond = date.getTime();
document.write("Elapsed miliseconds since January 1, 1970 : " + miliSecond + "<br>");

var minute = (miliSecond / 6000) / 600;
document.write("Elapsed minutes since January 1, 1970 : " + minute + "<br>");




/* ---------- Assignment Example ---------- */

console.log("Assignment Example!");

var myDate = new Date("12/05/2015 22:32:23");
console.log("My Date : " + myDate);

var miliSeconds = myDate.getTime();
console.log("Elapsed miliseconds since January 1, 1970 : " + miliSeconds);

var minutes = (miliSeconds / 6000) / 600;
console.log("Elapsed minutes since January 1, 1970 : " + minutes);