/* Q3. Write a JavaScript function that checks whether a passed string is a
    palindrome or not ? A palindrome is the word, phrase, or sequence
    that reads the same backward as forward, e.g., madam, Tibit. */

var str = prompt("Enter some words.");

function isPalindrome(inStr) {

    for (let a = 0; a < inStr.length; a += 1) {
        if (inStr[a] !== inStr[inStr.length - 1 - a]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(str));