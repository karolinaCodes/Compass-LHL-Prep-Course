// Looping -range

// const range = function (start, end, step) {
//   let arr = [];
//   for (let i = start; i <= end; i += step) {
//     if (
//       start === undefined ||
//       end === undefined ||
//       step === undefined ||
//       start > end ||
//       step === 0 ||
//       step < 0
//     ) {
//       return arr;
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

// Looping- lastIndexOf

// function lastIndexOf(arr, val) {
//   let lastInstance = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       lastInstance = i;
//     }
//   }
//   return lastInstance;
// }

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
// console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);
