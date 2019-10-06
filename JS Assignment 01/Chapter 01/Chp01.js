// Assignment N0 :1

// Q# 1 :- Write a script to greet your website visitor using JS alert box.

var num = "15";
alert(num);

var dailyDate_s = new Date();
var hrs = dailyDate_s.getHours();
var greet;
if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
alert(greet + "\n" + "This is my first website ");

// Q# 2 :- Write a script to display following message on your web page:

let message;
message = "This is my first website";
document.write(message);

// Q# 3 :- Write a script to display following message on your web page: (Hint : Use line break)

var myName = "Hello i am Muhammad Ashir Ansari";
var myMessage = "Still I Don't Know";
document.write(myName + "<br>" + myMessage);

// Q# 4 :- Write a script to display following messages in sequence:

var myName = "Hello i am Muhammad Ashir Ansari";
var myMeaning = "Still i don't know";
alert(myName);
alert(myMeaning);

// Q# 5 :- Generate the following message through browser’s developer console:

var myName = "Hello i am Muhammad Ashir Ansari";
console.log(myName + " This is my first website");

// Q# 6 : ans is in html File.
