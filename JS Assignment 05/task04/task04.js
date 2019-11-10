/* Q4. The Geometrizer
        Create 2 functions that calculate properties of a circle, using the definitions here.
        Create a function called calcCircumference:
            a. Pass the radius to the function.
            b. Calculate the circumference based on the radius, and output
                "The circumference is NN".
        Create a function called calcArea:
            a. Pass the radius to the function.
            b. Calculate the area based on the radius, and output "The area is NN".
                Circumference of circle = 2πr
                Area of circle = πr 2
*/

var radius = parseInt(prompt("Enter Radius!"));

// Find Circumference
function findCircumference(findCircum) {
    var circumference = Math.PI * 2 * findCircum;
    console.log("Circumference of Circle = " + circumference);
}
findCircumference(radius);

// Find Area Of Circle
function findAreaOfCircle(findArea) {

    var area = Math.PI * findArea * findArea;
    console.log("Area of Circle = " + area);
}
findAreaOfCircle(radius);