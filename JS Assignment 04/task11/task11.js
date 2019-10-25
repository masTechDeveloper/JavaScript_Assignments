/* -----------------------  JavaScript Assignment 04 | Task 11 ----------------------- */


/*  Q11. Write a program to take input of a Number and find a Mean of All Digits. 
    
        E.g: 666 = 6 + 6 + 6 = 18 /3 = 6
            1246 = 1 + 2 + 4 + 5 = 12 / 4 = 3 
*/
var number = parseInt(prompt("Enter Some Value !")),
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

for (var a = 0; a < sNumber.length; a++) {

    var sum = output.reduce((a, b) => a + b, 0),
        result = sum / sNumber.length;
}


console.log(output);

console.log(sum);

console.log(result);





/* Example

input 
123
    
Output
    
123 = 1 + 2 + 3 = 6 / 3 = 2 
    
    
*/