/* Q5. A cashier has currency notes of denominations 10, 50 and 100. If the
        amount to be withdrawn is input through the keyboard in hundreds,
        find the total number of currency notes of each denomination the
        cashier will have to give to the withdrawer.
*/


var val = parseInt(prompt("Enter Value"));

var denominationArray = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];

function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        } else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}

console.log(amountTocoins(val, denominationArray));