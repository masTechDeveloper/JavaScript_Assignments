/* Q9. Write a function to add weeks in current date.  */

var currentDate = new Date();

console.log(currentDate);

var getWeeks = currentDate.getDate();

console.log(getWeeks);

var weeks = 2;

var update = getWeeks + weeks;

currentDate.setFullYear(update);



console.log(currentDate);


/*

var currentDate = new Date();

// Current Time
document.write("Current Date & Time : " + currentDate + "<br><br>");

var getCurrentHour = currentDate.getHours();

var agoTime = parseInt(prompt("_____ Hour ago time ?"));

var resetHour = getCurrentHour - agoTime;

currentDate.setHours(resetHour);

// Updated Hour Time is. 
document.write(agoTime + " hour ago, it was " + currentDate);

*/