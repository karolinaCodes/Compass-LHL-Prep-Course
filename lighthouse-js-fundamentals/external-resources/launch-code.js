//1.
//a.
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

//b.
// for (let i = 3; i < 30; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

//c.
// for (let i = 12; i > -15; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//d.
// for (let i = 50; i > 19; i--) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

//2.
//a.
// const string = "LaunchCode";
// const array = [1, 5, "LC101", "blue", 42];

// for (let i = 0; i < array.length - 1; i++) {
//   console.log(array[i]);
// }

//b.
// for (let i = string.length - 1; i >= 0; i--) {
//   console.log(string[i]);
// }

//3.
//a.
const array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

let evens = [];
let odds = [];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    evens.push(array[i]);
  } else {
    odds.push(array[i]);
  }
}

console.log(evens, odds);
