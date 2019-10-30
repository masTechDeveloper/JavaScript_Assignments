/* -----------------------  JavaScript Assignment 04 | Task 08 ----------------------- */


/*  Q8. Convert number in words. Example
            Input
                23
                123
                1234
            Output
                Twenty Three
                One Hundred and Twenty Three
                One Thousand Two Hundred and Thirty Four. */


/* -----------------------  Solution 01. ----------------------- */


var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

document.getElementById('number').onkeyup = function() {
    document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
};


/* -----------------------  Solution 02. ----------------------- */



var input = prompt("Enter any number From 1 to 10000");
var unitMap = {
    "0": '',
    "1": 'one',
    "2": 'two',
    "3": 'three',
    "4": 'four',
    "5": 'five',
    "6": 'six',
    "7": 'seven',
    "8": 'eight',
    "9": 'nine',
    "10": "ten",
    "11": 'eleven',
    "12": 'twelve',
    "13": 'thirteen',
    "14": 'fourteen',
    "15": 'fifteen',
    "16": 'sixteen',
    "17": 'seventeen',
    "18": 'eighteen',
    "19": 'nineteen'
};
var tenUnit = {
    "1": 'ten',
    "2": 'twenty',
    "3": 'thirty',
    "4": 'fourty',
    "5": 'fifty',
    "6": 'sixty',
    "7": 'seventy',
    "8": 'eighty',
    "9": 'ninety'
};
var hunUnit = {
    "1": ' hundred '
};
var thousUnit = {
    "1": ' thousand '
};


var answer;
var length = input.length;


if (parseInt(input) <= 19) {
    answer = unitMap[input]

} else if (input.length == 2) {
    answer = tenUnit[input[0]] + " " + unitMap[input[1]];

} else if (input.length == 3) {
    answer = unitMap[input[0]] + hunUnit[1];

    if (input.length == 3) {
        answer = unitMap[input[0]] + hunUnit[1] + " & " + tenUnit[input[1]]
    }
    if (input.length == 3) {
        answer = unitMap[input[0]] + hunUnit[1] + " & " + tenUnit[input[1]] + " " + unitMap[input[2]]
    }
} else if (input.length == 4) {
    answer = unitMap[input[0]] + thousUnit[1]

    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + "& " +
            unitMap[input[1]] + hunUnit[1]
    }
    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + unitMap[input[1]] +
            hunUnit[1] + "& " + tenUnit[input[2]]
    }
    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + unitMap[input[1]] +
            hunUnit[1] + "& " + unitMap[input[3]]
    }
    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + unitMap[input[1]] +
            hunUnit[1] + " & " + tenUnit[input[2]] + " " + unitMap[input[3]]
    }
} else if (input.length == 5) {
    answer = tenUnit[input[0]] + thousUnit[1]
}

document.write("<br><br>Your input number is :- " + input + "<br>" + "Your integer inwords is :- " + answer);