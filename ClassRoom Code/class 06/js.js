// Password Validation Practics 




// Random Number

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



// Finding a prime number 

function test_prime(num) {

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(2));