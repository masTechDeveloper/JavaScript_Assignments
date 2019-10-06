// Array Example 01

// var cities = [];
// cities[0] = "Karachi";
// cities[1] = "Multan";
// cities[2] = "Lahor";
// cities[3] = "Islamabad";

// alert(cities);

// cities.push("Rawalpindi");

// alert(cities);

// cities.pop("Karachi");

// alert(cities);

// var nameArray = [];

// var name = prompt("Enter value!");

// nameArray.push(name);

// alert("Your Name is : " + nameArray);

// pets.splice(2, 2, "pig", "duck", "emu");

// var arrayShift = ["Karachi", "Lahor", "Multan"];

// alert(arrayShift);

// arrayShift.shift();

// alert(arrayShift);

// arrayShift.unshift("Islamabad", "Karachi");

// alert(arrayShift);

// arrayShift.splice(2, 0, "Sindh");

// alert(arrayShift);

// var arrayName = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (i = 0; i <= 4; i++) {

//     var
// }

// alert(arrayName);

// For Loop Table Example

// var table = 5;

// for (var a = 1; a < 11; a++) {
//   console.log(table + " * " + a + " = " + table * a);
// }

// Example 02

// var tableNumber = prompt("Table ");

// tableNumber = parseInt(tableNumber);

// for (var i = 1; i < 11; i++) {
//   console.log(tableNumber + " * " + i + " = " + tableNumber * i);
// }

// Example 03

// let check = false;

// var findNumber = prompt("find number");

// var number = [10, 29, 30, 45, 38, 109, 230];

// for (var i = 0; i < number.length; i++) {
//   if (number[i] == findNumber) {
//     check = true;
//     console.log("Number Found! " + findNumber);
//   }
// }

// if (!check) {
//   console.log("Not Found you enter a wrong number " + findNumber);
// }

// Nested for loop Example

var firstName = ["Kashif", "Muzammil", "Kamran"];
var lastName = ["Khan", "Ali", "Ayaz"];
// example for push array

firstName.push("M", "K", "H");
lastName.push("I", "N", "V");

for (var i = 0; i < firstName.length; i++) {
  for (var z = 0; z < lastName.length; z++) {
    console.log(firstName[i] + " " + lastName[z]);
  }
}

// Array & for loop example

// var sortArray = [10, 8, 203, 20, 09, 44];
