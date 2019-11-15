/* Q12. Write a JavaScript program act as number guessing game and
        give user chance to try 3 times if guess incorrect and then ask user if
        he/she wants to play game again

        a. Generate Random number between 1 to 100
        b. Ask user to guess number
        c. User will have 3 chances, if user enters incorrect number it
            should say that “Incorrect, Please try again”
        d. If user guess right on first, second or third try is should say “You
            are right, You won”
        e. Then it asks the user if he/she wants to play again, if user says
            yes, then the whole process starts from point (a) again
        f. If user says no then game end saying “Thank you for playing
            with use today”
        g. After point ( c ) if user failed 3 times then it should say “You
            Lose” and game should ask if user wants to play again, if user
            say yes then it should start from point (a) again.
        Note: You must use while or do while loop and functions for this game
*/

/* ------------- Solution 01 for loop ------------- */


function guessNumber() {

    var randNumber = parseInt(Math.floor(Math.random() * 100 * 1));
    console.log(randNumber);
    var count = 2;
    for (var a = 3; a > 0; a--) {
        var userInput = parseInt(prompt("Guess Number 01 to 100."));
        if (randNumber == userInput) {
            console.log("You are right, You won");
            playAgain();
            break;
        } else {
            if (count > 0) {
                console.log("Wrong Guess. & you have " + count + " chance left");
                count--;
            } else {
                console.log("You Loose!");
                playAgain();
            }
        }
    }
}

function playAgain() {
    var againOrNot = prompt("Do you want to Play Again | Y/N").toLowerCase().toString();

    if (againOrNot == "y") {
        guessNumber();
    } else if (againOrNot == "n") {
        alert("Thank you for playing with use today");
    } else {
        alert("Please Enter 'Y' Or 'N' characters Only.");
        playAgain();
    }
}

/* ------------- Solution 02 DoW While Loop ------------- */

// //function to check user guess
// function checkUserGuess(user_guess) {
//     switch (user_guess) {
//         case random_num:
//             alert("You are right, You won");
//             break;
//         default:
//             alert("Incorrect, Please try again");
//     }
// }



// // Ask user to guess the number

// function userGuess() {
//     var i = 0;
//     while (i < 4) {
//         switch (i) {
//             case 0:
//                 var user_guess = parseInt(prompt("Please guess a number between 1 to 100: "));
//                 checkUserGuess(user_guess);

//             case 1:
//                 var user_guess = parseInt(prompt("Please guess a number between 1 to 100: "));
//                 checkUserGuess(user_guess);

//             case 2:
//                 var user_guess = parseInt(prompt("Please guess a number between 1 to 100: "));
//                 checkUserGuess(user_guess);

//             default:
//                 alert("You lose!");
//                 var ask_again = prompt("Do you wish to play again? Yes/No");
//         }
//         i++;
//         if (ask_again.toLowerCase() === "yes") {
//             i = 0;
//         } else if (ask_again.toLowerCase() === "no") {
//             alert("Thank you for playing with us today.");
//         }
//     }
// }


// // generate a random number & call userGuess function
// var random_num = Math.random();
// random_num = (random_num * 100) + 1;
// random_num = Math.floor(random_num);
// userGuess();