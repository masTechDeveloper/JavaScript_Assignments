// /* ------------------------------------------ ASSIGNMENT NO 5 ------------------------------------------------- */

// // Q# 1 :- Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// // Q# 2 :- Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = 10;

document.write(
  "Addition of " + num1 + " and 5 is ",
  (num1 += 5),
  "<br>" + "Subtraction of " + num1 + " and 5 is ",
  (num1 -= 5),
  "<br>" + "Multiplication of " + num1 + " and 5 is ",
  (num1 *= 5),
  "<br>" + "Divide of " + num1 + " and 5 is ",
  (num1 /= 5),
  "<br>"
);

// // Q# 3 :- Do the following using JS Mathematic Expressions
//             // a. Declare a variable.
//             // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//             // c. Initialize the variable with some number.
//             // d. Show the value of variable in your browser like “Initial value: 5”.
//             // e. Increment the variable.
//             // f. Show the value of variable in your browser like “Value after increment is: 6”.
//             // g. Add 7 to the variable.
//             // h. Show the value of variable in your browser like “Value after addition is: 13”.
//             // i. Decrement the variable.
//             // j. Show the value of variable in your browser like “Value after decrement is: 12”.
//             // k. Show the remainder after dividing the variable’s value by 3.
//             // l. Output : “The remainder is : 0”. */

var Count,
  Initial = 30;

document.write(
  "Value After Variable Declaration is :- " + Count + "<br>",
  "Initial Value :- " + Initial + "<br>",
  "Value After Increment is :- ",
  ++Initial + "<br>",
  "Value After Addition 10 Is :- ",
  10 + Initial + "<br>",
  "Value After Decrement is :- ",
  --Initial + "<br>",
  "The Remainder Is :- ",
  Initial % 5
);

// /* Q# 4 :- Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a
//            variable & calculate the cost of buying 5 tickets to a movie. Example output: */

var tickets = 600;
document.write("Total cost to buy 5 tickets to a movie  is :- ", tickets * 5);

/* Q# 5 :- Write a script to display multiplication table of any number in your browser. E.g */

var numtb1 = 1,
  numtable = 5;
for (numtb1 = 1; numtb1 <= 10; numtb1++) {
  table = numtb1 * numtable;
  document.write(table + "<br>");
}

/* Q# 6 :- The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
            a. Store a Celsius temperature into a variable.
            b. Convert it to Fahrenheit & output “NN o C is NN o F”.
            c. Now store a Fahrenheit temperature into a variable.
            d. Convert it to Celsius & output “NN o F is NN o C”. */

var celciusTemp = 31,
  fahrenheitTemp = 88;
document.write(
  ((fahrenheitTemp - 32) * 5) / 9 + "<br>" + (celciusTemp * 9) / 5 + 32
);

/* Q# 7 :- Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
            the following in variables 
            a. Price of item 1
            b. Price of item 2
            c. Ordered quantity of item 1
            d. Ordered Quantity of item 2
            e. Shipping charges
            Compute the total cost & show the receipt in your browser.*/

document.write("<h3> Shopping Cart </h3>");

var Price1 = 300,
  Quantity1 = 5,
  Price2 = 100,
  Quantity2 = 10;
shippingCharges = 100;

result = Price1 * Quantity1 + Price2 * Quantity2 + shippingCharges;
document.write(
  "Price of item 1 is " + Price1 + "<br>",
  "Quantity of item 1 is " + Quantity1 + "<br>",
  "Price of item 2 is " + Price2 + "<br>",
  "Qualtity of item 2 is " +
    Quantity2 +
    "<br>" +
    "<br>" +
    "Total cost of your order is " +
    result
);

/* Q# 8 :- Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
        your browser */

document.write("<h3>Student Marks</h3>" + "<br>");

var totalMarks = "500",
  obtainedMarks = "359",
  percentage = (obtainedMarks * 100) / totalMarks;

document.write(
  "Total Marks :- " +
    totalMarks +
    "<br>" +
    "Student obtained marks :- " +
    obtainedMarks +
    "<br>" +
    "Student Percentage :- " +
    percentage +
    "%"
);

/* Q# 9 :- Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
      Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
      and 1 Saudi Riyal = 28 Pakistani Rupee) */

document.write("<h3> Currency In PKR </h3>");

var OneDollar_Inpakistan = 104,
  OneSaudiRiyal_Inpakistan = 28,
  totalDollars = 10,
  totalSaudiRiyal = 25;

result =
  totalDollars * OneDollar_Inpakistan +
  totalSaudiRiyal * OneSaudiRiyal_Inpakistan;

document.write("Total currency in PKR :- " + result);

/* Q# 10 :-  Write a program to initialize a variable with some number and do arithmetic in following sequence:
        a. Add 5
        b. Multiply by 10
        c. Divide the result by 2
    Perform all calculations in a single expression */

var InitialIze_Num = 25;

document.write(
  (InitialIze_Num += 5),
  "<br>" + (InitialIze_Num *= 10) + "<br>" + InitialIze_Num / 2 + "<br>"
);

/* Q# 11 :- The Age Calculator: Forgot how old someone is? Calculate it!
                a. Store the current year in a variable.
                b. Store their birth year in a variable.
                c. Calculate their 2 possible ages based on the stored values.
            Output them to the screen like so: “They are either NN or NN years old”. */

document.write("<h3>Age Calculator</h3>");

var current_Year = 2019,
  birthDay = 1998,
  result_day = current_Year - birthDay;
document.write(
  "Current Year is " +
    current_Year +
    "<br>" +
    "Current Age is " +
    result_day +
    "<br>",
  "Your Birth year is " + birthDay
);

/* Q# 12 :-  The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
                b. Calculate the circumference based on the radius, and output “The circumference is NN”.
                    (Hint : Circumference of a circle = 2 π r , π = 3.142)
                    Calculate the area based on the radius, and output “The
                    area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)*/

document.write("<h3>The Geometrizer</h3>");
var radius = 3;
var circumference = Math.PI * 2 * radius;
var area = Math.PI * radius * radius;
document.write(
  "The radius circle is :- " +
    radius +
    "<br>" +
    "The circumference is :- " +
    circumference +
    "<br>" +
    "The area is :- " +
    area
);

/* 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
Wonder no more.
        a. Store your favorite snack into a variable
        b. Store your current age into a variable.
        c. Store a maximum age into a variable.
        d. Store an estimated amount per day (as a number).
        e. Calculate how many would you eat total for the rest of your life.
Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. */

document.write("<h3>The Lifetime Supply Calculator</h3>");

var SncaksName = "chocolate chip",
  age = 15,
  estimatedAge = 65,
  numPerDay = 3;
var totalNeeded = (estimatedAge - age) * numPerDay;

document.write(
  "Favourite Snacks :- " +
    SncaksName +
    "<br>" +
    "Current Age :- " +
    age +
    "<br>" +
    "Estimated age :-" +
    estimatedAge +
    "<br>" +
    "Amount of snacks per day :- " +
    numPerDay +
    "<br>" +
    "Your will need " +
    totalNeeded +
    " chocolate chip to last you until the ripe old age of " +
    estimatedAge
);

// document.write("<h3>The Lifetime Supply Calculator</h3>")

// var SncaksName = "chocolate chip",
//     age = 15,
//     estimatedAge = 65,
//     numPerDay = 3;
//     // var totalNeeded = (estimatedAge - age) * numPerDay
// var totalNeeded = (numPerDay * 365) * (estimatedAge - age);
// var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
// document.write(totalNeeded);
