/* ----------------------------------------- ASSIGNMENT NO 4 ---------------------------------------------- */

//  Q# 1 :- Declare 3 variables in one statement.

var Name = "Muhammad Ashir Ansari",
  Id = "BCC036550",
  Password = "<MuhammadAshir@nsari>";

//  Q# 2 :- Declare 5 legal & 5 illegal variable names.

// legal
var jsVariable = "@",
  clearTimeout = "5555",
  blow = "_",
  assign = "MAshirAnsari",
  alert = "&Ashir_Ansari";

// illegal
// var
// product cost = 3.45,
// P2_a%88$ = "#$*UUITG$&",
// >/;23e = "wiii3",
//  = "";
//  ಠ_ಠ% = "eferdwef";

/*  Q# 3 :- Display this in your browser
                a) A heading stating “Rules for naming JS variables”
                b) Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable
                c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
                d) Variable names are case _________
                e) Variable names should not be JS _________ */

var var01 = "M@";
var var02 = "5555";
var var03 = "_";
var var04 = "MuhammadAshirAnsari";
var var05 = "M_Ansari";
var var06 = "_M.Ansari";
var var07 = "I AM M. Ashir Ansari";

// a) A heading stating “Rules for naming JS variables”
document.write("<h1>Rules Of Naming JS Variables</h1>");
document.write(
  //b) Variable names can only contain ______, ______, ______ and ______.
  "Variable names can only contain " +
    "<u>" +
    var01 +
    var02 +
    var03 +
    var04 +
    "</u>  ..." +
    "<br>" +
    //c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
    "Variable must begin with a " +
    "<u>" +
    var05 +
    "</u>" +
    " , " +
    "<u>" +
    var06 +
    "</u>" +
    " , " +
    "<u>" +
    var07 +
    "</u> ... " +
    "<br>" +
    //d) Variable names are case _________
    "Variable names are case ",
  "<u> sensitive </u> ... " +
    "<br>" +
    //e) Variable names should not be JS _________ */
    "Variable names should not be JS",
  "<u> keywords </u> ..."
);
