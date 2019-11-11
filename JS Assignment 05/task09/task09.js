/* Q9. Write a function to add weeks in current date.  */

var newWeek = parseInt(prompt("Add Weeks in current Date"));

function addWeeks(weeks) {

    let now = new Date();
    now.setDate(now.getDate() + weeks * 7);
    alert(now); // Shown in Alert message!
    console.log(now); // Shown in console area.
}
addWeeks(newWeek);