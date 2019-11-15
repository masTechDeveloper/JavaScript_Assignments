/*  Q7. Write a function to test whether a given date is a weekend? If not how
        many days to weekend */


var currentDate = new Date();

function is_weekend(date) {
    var dt = new Date(date);

    if (dt.getDay() == 0) {
        return "Its Weekend";
    } else if (dt.getDay() == 1) {
        return "Sorry! wait for 6 more days!"
    } else if (dt.getDay() == 2) {
        return "Sorry! wait for 5 more days!"
    } else if (dt.getDay() == 3) {
        return "Sorry! wait for 4 more days!"
    } else if (dt.getDay() == 4) {
        return "Sorry! wait for 3 more days!"
    } else if (dt.getDay() == 5) {
        return "Sorry! wait for 2 more days!"
    } else if (dt.getDay() == 6) {
        return "Sorry! wait for 1 more days!"
    }
}

console.log(is_weekend(currentDate));