// --------------------------------------- ASSIGNMENT NO 3 ------------------------------------------ //

// Q# 1 :- Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = "25";
alert("I am " + age + " years old");

/* Q# 3 :- Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: */

const myBirthyear = 1995;
document.write("This is my Birth year " + myBirthyear);

/* Q# 4 :- A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
the following information:
    a. Visitor’s name
    b. Product title
    c. Quantity i.e. how many products a visitor wants to
    order
    Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

var VisitorsName = prompt("Visitor Name :-", "");
var productTitle = prompt("Visiter Product Title :-", "");
var quality_of_Product = prompt("Quantity Of Product :-", "");

if (
  confirm(VisitorsName + "\n" + productTitle + "\n" + quality_of_Product).then(
    document.write(
      "<h3>User Name :- </h3>",
      VisitorsName + "\n" + "<h3>User Product Title :- </h3>",
      productTitle + "\n" + "<h3>User Quantity Of Products :- </h3>",
      quality_of_Product
    )
  )
);
