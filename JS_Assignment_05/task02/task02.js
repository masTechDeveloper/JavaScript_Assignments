/* 02. Write a function that calculates the area of a rectangle */

var val01 = prompt("Please give the width of the rectangle:");
var val02 = prompt("Please give the length of the rectangle:");

function calcAreaOfRectange(wid, hei) {

    var area = wid * hei;
    document.write("Width is : " + wid + "<br>");
    document.write("Height is : " + hei + "<br>");
    document.write("The area of the Rectangle is : " + area);
}

// Pass width and height arguments in variable value. 
calcAreaOfRectange(val01, val02);