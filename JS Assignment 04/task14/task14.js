/* -----------------------  JavaScript Assignment 04 | Task 14 ----------------------- */


/* Q14. Create a Date object for the current date and time. Extract the
        hours, reset the date object an hour ahead and finally display the
        date object in your browser.
*/

var currentDate = new Date();

// Current Time
document.write("Current Date & Time : " + currentDate + "<br><br>");

var getCurrentHour = currentDate.getHours();

var agoTime = parseInt(prompt("_____ Hour ago time ?"));

var resetHour = getCurrentHour - agoTime;

currentDate.setHours(resetHour);

// Updated Hour Time is. 
document.write(agoTime + " hour ago, it was " + currentDate);