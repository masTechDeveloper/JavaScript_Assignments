/* -----------------------  JavaScript Assignment 04 | Task 09 ----------------------- */


/*  Q9. Remove all available HTML tags from given string */

var valueStr = "<p><strong><em>Only print this</em></strong></p>";

console.log(valueStr);

var removeTags = valueStr.replace(/<\/?[^>]+(>|$)/g, "");

console.log(removeTags);