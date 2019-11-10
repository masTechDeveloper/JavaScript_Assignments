/* Q6. Write a function that will take an array and generate a mirror array of it. */

var arr = [0, 5, 6, 7];

console.log("Main Array : " + arr);

function reverseArray(arr) {

    var newArray = [];

    for (var a = 0; a < arr.length; a++) {
        newArray.push(arr[a]);
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }

    console.log("Mirror Of Array : " + arr);

    return newArray;

}

reverseArray(arr);