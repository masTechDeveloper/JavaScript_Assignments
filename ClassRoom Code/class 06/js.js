// Password Validation Practics 




// Random Number

var arr = [];

for (var i = 0; i < 10; i++) {
    var duplicateValue = false;
    var rand = Math.floor(Math.random() * 10 + 1);
    console.log("Index = " + i + " Random Number is = " + rand);
    for (var n = 0; n < arr.length; n++) {
        if (arr[n] == rand) {
            duplicateValue = true;
            i--;
            break;
        }
    }
    if (!duplicateValue) {
        arr[i] = rand;
    }
}

console.log(arr);