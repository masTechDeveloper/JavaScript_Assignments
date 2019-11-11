/* Q5 :- A cashier has currency notes of denominations 10, 50 and 100. If the
amount to be withdrawn is input through the keyboard in hundreds,
find the total number of currency notes of each denomination the
cashier will have to give to the withdrawer. */


var amount = parseInt(prompt("Please enter amount to be withdraw: "));
var h_notes = 0;
var f_notes = 0;
var t_notes = 0;
for (var i = amount; i > 0; i -= 100) {
    if (i >= 100) {
        h_notes++;
    }
}
var amount1 = amount - (h_notes * 100);
for (var i = amount1; i > 0; i -= 50) {
    if (i >= 50) {
        f_notes++;
    }
}
var amount2 = amount1 - (f_notes * 50);
for (var i = amount2; i > 0; i -= 10) {
    if (i >= 10) {
        t_notes++;
    }
}
document.write("<h2>You need " + h_notes + " hundred notes, " + f_notes + " fifty notes and " +
    t_notes + " ten notes.</h2><br>");