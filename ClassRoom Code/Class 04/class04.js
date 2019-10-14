/* ---------------- Slice Method ---------------- */

// let name = "Muhammad Ashir Ansari";

// let firstName = name.slice(0, 8);
// let midName = name.slice(8, 14);
// let lastName = name.slice(14);

// console.log(name);

// console.log(firstName);
// console.log(midName);
// console.log(lastName);

// console.log(firstName + midName + lastName);

/* ---------- Upercase & LowerCase Method ---------- */

// let name = "Muhammad Ashir Ansari";
// console.log("Sentance Case : " + name);

// // UperCase
// let uperCase = name.toUpperCase();
// console.log("Upper Case : " + uperCase);

// // LowerCase
// let lowerCase = name.toLowerCase();
// console.log("Lower Case : " + lowerCase);

/* ---------- String Replace using slice method ---------- */

// let text =
//   "A paragraph is a series of related sentences developing a central idea,called the topic.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.Paragraphs add one idea at a time to your broader argument.";
// // console.log(text);"
// let searchText = prompt("What do you want to search in paragraph!");
// let replaceWith = prompt("What do you want replace with!");

// var indexOfOr = text.indexOf(searchText); // Find Index
// // console.log(indexOfOr);

// var leftText = text.slice(0, indexOfOr); // cut of left side
// // console.log(leftText);

// var rightText = text.slice(searchText.length + indexOfOr); // cut of right side
// // console.log(rightText);

// var stringreplace = leftText + replaceWith + rightText; // Merge left + replace text + right side
// console.log(stringreplace);

/* ---------- Find value on string variables Example ---------- */

// var text = "to be their fellow or not to be friend";

// var search = prompt("Enter value");
// var textIndex = -1;
// var count = 0;

// for (var i = 0; i < text.length; i++) {
//   textIndex = text.indexOf(search, textIndex + 1);
//   if (textIndex >= 0) {
//     count++;
//   } else {
//     if (count == 0) {
//       console.log("Not Found! ");
//     }
//     break;
//   }
//   console.log("index = " + textIndex);
// }
// console.log("Counter = " + count);

/* ---------- Round Number Method ---------- */

// let num = prompt("Enter a Number?"); // Enter some number

// console.log("Number -> " + num);

// console.log("Round Number -> " + Math.round(num)); // Result is 235

// console.log("Floor Number -> " + Math.floor(num)); // Result is 234

// console.log("Ceil Number -> " + Math.ceil(num)); // Result is 235

/* ---------- Random Numbers Method ---------- */

// let rand = Math.floor(Math.random() * 6 + 1);

// console.log(rand);

// // Balloting for PrizeBond

// var prizeBond = [2, 4, 3, 6, 5];

// for (var a = 0; a < prizeBond.length; a++) {
//   if (rand == prizeBond[a]) {
//     console.log("You Win");
//     break;
//   } else {
//     console.log("Try Again");
//     break;
//   }
// }

/* ---------- parseInt() Method ---------- */

// var numb = 233.4826;

// console.log(parseInt(numb)); // Change DataType into Integer
// console.log(parseFloat(numb)); // Change DataType into Floating Point Number
// console.log(Number(numb)); // Change DataType into Number

/* ---------- toFixed() Method ---------- */

// var rate = 237.33;
// var qty = 20.4;
// var total = rate * qty;

// console.log("Total Amount : " + total.toFixed(2));

/* ---------- Date Method ---------- */

// var dates = new Date();
// var mydate = new Date("10/10/2019 21:34:00");
// console.log(dates);
// console.log(mydate.getDate());
// console.log(mydate.getTime());
// console.log(mydate.getTimezoneOffset());

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = dates - mydate;
// console.log("Days " + Math.floor(a / (1000 * 60 * 60 * 24)));
// var mydateyear = mydate.setFullYear(2008);
// console.log(mydateyear);
// console.log(days[mydate.getDay()]);
