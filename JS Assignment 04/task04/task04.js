/* -----------------------  JavaScript Assignment 04 | Task 04 ----------------------- */


/*  Q4. Write a program to validate email address with following evaluation
            a. This string must contain @
            b. Ths string must contact chars
            c. The @ must have at least 1 char in front
            d. The string must contain .(dot) after @ and at least 1 char. */


function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.form1.text1.focus();
        alert("Accepted!");
        return true;

    } else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}