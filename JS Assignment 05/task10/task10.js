/* Q10. Write a JavaScript function that accept string and returns the count
        of vowel used within the string. 
*/

/* Note: Please run one solutioin at a time.*/

var input = prompt("Find Vowels in String!").toString().toUpperCase();

/* --------------- Solution 01. --------------- */

function findVowels(str) {

    let vowels = "AEIOU";
    var vCount = 0;

    for (var a = 0; a < str.length; a++) {
        if (vowels.indexOf(str[a]) !== -1) {
            vCount += 1;
        }
    }
    console.log(vCount);
    return vCount;

}
findVowels(input);

/* --------------- Solution 02. --------------- */

// function findVowels(str) {

//     var vCount = 0;

//     //loop through the string
//     for (var i = 0; i <= str.length - 1; i++) {

//         //if a vowel, add to vowel count
//         if (str.charAt(i) == "A" ||
//             str.charAt(i) == "E" ||
//             str.charAt(i) == "I" ||
//             str.charAt(i) == "O" ||
//             str.charAt(i) == "U") {
//             vCount += 1;
//         }
//     }
//     console.log(vCount);
//     return vCount;
// }
// findVowels(input);

/* --------------- Solution 03. --------------- */

// function findVowels(str) {
//     var m = str.match(/[AEIOU]/gi);
//     console.log(m);
//     return m === null ? 0 : m.length;
// }
// findVowels(input);