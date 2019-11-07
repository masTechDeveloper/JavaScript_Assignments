/* Q11. Write a JavaScript function named isVowel that accept string character 
        and check using switch statement that character is a vowel or not. 
        Function should return true if its vowel and false if it's not vowel 
*/


var input = prompt("Check Vowel Or Not.").toString().toUpperCase();

function isVowel(str) {

    switch (str) {
        case "A":
            console.log("its Vowel");
            return true;
            break;
        case "E":
            console.log("its Vowel");
            return true;
            break;
        case "I":
            console.log("its Vowel");
            return true;
            break;
        case "O":
            console.log("its Vowel");
            return true;
            break;
        case "U":
            console.log("its Vowel");
            return true;
            break;
        default:
            console.log("its Not Vowel");
            return false;
    }
}

isVowel(input);