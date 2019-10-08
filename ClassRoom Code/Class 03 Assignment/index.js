// var arr = [[10, 8, 203, 20, 09, 44][33, 44, 57, 100]];

// function largerofFour(arr) {
//   var maxes = [];

//   for (var i = 0; i < arr.length; i++) {
//     var tempMax = arr[i][0];
//     for (var j = 0; j < arr[i].length; j++) {
//       var currentStatus = arr[i][j];
//       if (currentStatus >= tempMax) {
//         tempMax = currentStatus;
//       }
//     }
//     maxes.push(tempMax);
//   }
//   return maxes;
//   //   console.log(maxes);
// }
// largerofFour([[10, 8, 203, 20, 09, 44][(33, 44, 57, 100)]]);

var maxes = [];

for (var i = 0; i < arr.length; i++) {
  var tempMax = arr[i][0];
  for (var j = 0; j < arr[i].length; j++) {
    var currentStatus = arr[i][j];
    if (currentStatus >= tempMax) {
      tempMax = currentStatus;
    }
  }
  maxes.push(tempMax);
}
