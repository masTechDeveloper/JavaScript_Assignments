// Task 01. Password Validation Practics 




// Task 02. Random Number insert in array.

// var arr = [];

// for (var i = 0; i < 10; i++) {
//     var duplicateValue = false;
//     var rand = Math.floor(Math.random() * 10 + 1);
//     console.log("Index = " + i + " Random Number is = " + rand);
//     for (var n = 0; n < arr.length; n++) {
//         if (arr[n] == rand) {
//             duplicateValue = true;
//             i--;
//             break;
//         }
//     }
//     if (!duplicateValue) {
//         arr[i] = rand;
//     }
// }

// console.log(arr);



// Task 03. Finding a prime number 

// function test_prime(num) {

//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     } else {
//         for (var x = 2; x < num; x++) {
//             if (num % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(test_prime(39));


// Task 04. Function Practice


// function simpleFn(numb) {
//     console.log("This is simple example for function practice." + numb);
//     console.log("This is simple example for function practice." + numb);
//     return numb * 4
// }

// var a = simpleFn(5);
// var b = simpleFn(6);

// console.log("value of a : " + a);
// console.log("value of b : " + b);


// Task 05 Digits to String

// var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
// var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var num = parseInt(prompt("Enter A Value !"));
var once = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
var ele = ['', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen', 'ninteen']
var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

var val = "";
if (num < 10) {
    val = once[num];
}

if (num >= 11 && num <= 19) {
    val = ele[num % 10];
}
if (num == 10 || num >= 20) {
    var div = Math.floor(num / 10);
    var mod = num % 10;

    val = tens[div] + " " + once[mod];
}

console.log("Number : " + num);
console.log("Value : " + val);