/* -----------------------  JavaScript Assignment 04 | Task 12 ----------------------- */


/* Q12. Write a program that shows the message “First fifteen days of the
        month” if the date is less than the 16th of the month else shows “Last
        days of the month”.
*/


var date = new Date();

console.log(date);

var getDayofMonth = date.getDate();

console.log(getDayofMonth);

if (getDayofMonth < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}