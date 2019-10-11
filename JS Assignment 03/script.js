/* -------------------- JavaScript Assignment 03 | Array -------------------- */

/* Q1. Declare and Initialize an array and store available education qualifications in
    Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).Show the listed
    qualifications in your browser like: */

/* ---------- Solution ---------- */

// var eduArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// for (var a = 0; a < eduArr.length; a++) {
//   document.write(a + " ) " + eduArr[a] + "<br>");
// }

/* Q2. Write a program to store 3 student names in an array.Take another array to store
    score of these three students.Assume that total marks are 500 for each student,
    display the scores & percentages of students like: */

/* ---------- Solution ---------- */

// var studentName = ["Shabir", "Arbaz", "Maaz"];

// var marks = [320, 230, 480];

// for (var i = 0; i < studentName.length; i++) {
//   var perc = (marks[i] / 500) * 100;
//   document.write(
//     "Marks of " +
//       studentName[i] +
//       " is " +
//       marks[i] +
//       ". Percentage: " +
//       perc +
//       "%" +
//       "<br>"
//   );
// }

/* Q3. Initialize an array with color names.Display the array elements in your browser.
        A.  Ask the user what color he / she wants to add to the beginning & add that
            color to the beginning of the array.Display the updated array in your
            browser.
        B.  Ask the user what color he / she wants to add to the end & add that color to
            the end of the array.Display the updated array in your browser.
        C.  Add two more color to the beginning of the array.Display the updated
            array in your browser.
        D.  Delete the first color in the array.Display the updated array in your
            browser.
        E.  Delete the last color in the array.Display the updated array in your
            browser.
        F.  Ask the user at which index he / she wants to add a color & color name.
            Then add the color to desired position / index.Display the updated array in
            your browser.
        G.  Ask the user at which index he / she wants to delete color(s) & how many
            colors he / she wants to delete.Then remove the same number of color(s)
            from user - defined position / index. .Display the updated array in your
            browser. */

let colorName = ["Red", "Yellow", "Blue", "Green"];

document.write(colorName + "<br>");

// Section A.
var a = prompt("What color want to add a beginning!");

colorName.unshift(a);

document.write("Updated Array : " + colorName);

/* Q4.  Write a program to initialize an array with city names.Copy 3 array elements from cities
        array to selected cities array.*/

/* ---------- Solution ---------- */

// let citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write("<b> Cities List :</b> " + "<br>" + citiesList + "<br><br>");

// selectcity = citiesList.slice(2, 4);

// document.write("<b> Selected Cities List :</b> " + "<br>" + selectcity);

/* Q5.  Write a JavaScript program to remove all duplicate items from an array
        Sample array: var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
        Sample Output: [3, ‘a’, 2, 4, 9] */

/* ---------- Solution ---------- */

// let array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// document.write("Array Value : " + array + "<br>");

// let unique = [...new Set(array)];

// document.write("Remove all Duplicates : " + unique + "<br>");

// unique.sort();

// document.write("Value Sorted : " + unique);

/* Q6.  We have the following arrays:
            var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
            var o = ["th", "st", "nd", "rd"];
        Write a JavaScript program to display in the following way:
            1st choice is Karachi
            2nd choice is Lahore
            3rd choice is Islamabad 
*/

/* ---------- Solution ---------- */

// let cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// let obj = ["th", "st", "nd", "rd"];
// obj.splice(0, 1);

// // Counter
// var count = 0;

// for (let s = 0; s < obj.length; s++) {
//   count++;
//   document.write(count + obj[s] + " choice is " + cities[s] + "<br>");
// }

/* Q7.  Write a JavaScript program to compute the union of two arrays. (Merge two
        arrays by removing all duplicates)
            var a = [10, 20, 4, 40, 60, 70]
            var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        Output should be:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 40, 60, 70]
*/

/* ---------- Solution ---------- */

// var a = [10, 20, 4, 40, 60, 70];

// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// document.write("1st Array Value : " + a + "<br><br>");
// document.write("2st Array Value : " + b + "<br><br>");

// // Merge Two arrays
// var concatArray = a.concat(b);

// document.write("Merge 'A' & 'B' Array : " + concatArray + "<br><br>");

// // Remove duplicate values
// const unique = [...new Set(concatArray)];

// document.write("Remove All Duplicate Values  : " + unique + "<br><br>");

/* Q8.  Generate the following series in your browser. See example output.
            a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
            b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
            c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
            d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
            e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/

/* ---------- Solution 01 ---------- */

// Simple Array Numbers

// let count = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20
// ];

// document.write("Counting: " + count + "<br>");

// // Array Reverse Method
// let revArray = count.reverse();

// document.write("Reverse Counting: " + revArray + "<br>");

// // Let Even & Odd Numbers
// let evenNumber = [];
// let oddNumber = [];

// for (var a = 0; a < count.length; a++) {
//   if (a % 2 == 0) {
//     evenNumber.push(count[a]);
//   } else {
//     oddNumber.push(count[a]);
//   }
// }

// /*
// // if you want to show reverse values so uncomment this area.
// evenNumber.reverse();
// oddNumber.reverse();
// */

// document.write("Even Number : " + evenNumber + "<br>");
// document.write("Odd Number : " + oddNumber + "<br>");

// //   Section E. Incomplete

// // Series with K
// evenNumber.reverse();

// let series = [];

// let k = "k";

// for (var z = 0; z < evenNumber.length; z++) {
//   series.concat(k);
//   series.push(evenNumber[z], k);
// }
// document.write(series);

/* Q9.  Write a program to identify the largest number in the given array.
        A = [24, 53, 78, 91, 12].
*/

/* ---------- Solution 01 ---------- */

// var findlargeNumber = [24, 53, 98, 91, 12, 20];

// if (findlargeNumber[0] > 0) {
//   document.write("Array Items: " + findlargeNumber + "<br>");
//   let num = Math.max(...findlargeNumber);
//   document.write("The larger number is : " + num);
// } else {
//   document.write("Error!");
// }

/* Q10. Sort an array from smallest to largest value
            A = [20,53,78,4,91,12]
        Output should be​ : [4,12,20,53,78,91] */

/* ---------- Solution 01 ---------- */

// var arraySort = [20, 53, 78, 4, 91, 12];

// document.write("Array values : " + arraySort + "<br>");
// // Array Sort Method
// arraySort.sort(function(a, b) {
//   return a - b;
// });

// document.write("Sorted Array Values : " + arraySort);

/* ---------- Solution 02 | Incomplete ---------- */
/*
var findlargeNumber = [24, 53, 98, 91, 12, 20];

var sortedArray = [];

for (var i = 0; i < findlargeNumber.length; i++) {
  if (findlargeNumber[0] > 0) {
    let num = Math.max(...findlargeNumber);
    sortedArray.push(num);
    findlargeNumber.pop(num);
  } else {
    document.write("Error!");
  }
}
document.write(sortedArray);
*/
