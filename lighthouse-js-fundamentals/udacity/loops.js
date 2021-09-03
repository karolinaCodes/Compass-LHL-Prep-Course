// // JuliaJames (Fizzbuzz)
// var x = 1;

// while (x <= 20) {
//   if (x % 3 === 0 && x % 5 !== 0) {
//     console.log("Julia");
//   } else if (x % 5 === 0 && x % 3 !== 0) {
//     console.log("James");
//   } else if (x % 3 === 0 && x % 5 === 0) {
//     console.log("JuliaJames");
//   } else {
//     console.log(x);
//   }
//   x += 1;
// }

// //Ternary

// var x = 1;

// while (x <= 20) {
//   x % 3 === 0 && x % 5 !== 0
//     ? console.log("Julia")
//     : x % 5 === 0 && x % 3 !== 0
//     ? console.log("James")
//     : x % 3 === 0 && x % 5 === 0
//     ? console.log("JuliaJames")
//     : console.log(x);
//   x += 1;
// }

// //Bottles of juice

// var num = 99;

// while (num > 0) {
//   console.log(
//     String(num) +
//       (num === 1 ? " bottle" : " bottles") +
//       " of juice on the wall! " +
//       String(num) +
//       (num === 1 ? " bottle" : " bottles") +
//       " of juice! Take one down, pass it around... " +
//       String(num - 1) +
//       (num - 1 === 1 ? " bottle" : " bottles") +
//       " of juice on the wall!"
//   );
//   num -= 1;
// }

// //Udacity Solution:Bottles of juice

// var num = 99;

// while (num >= 1) {
//   // Last iteration. Note occurances of bottle, bottle, bottleS
//   if (num === 1) {
//     console.log(
//       num +
//         " bottle of juice on the wall! " +
//         num +
//         " bottle of juice! Take one down, pass it around... " +
//         (num - 1) +
//         " bottles of juice on the wall!"
//     );
//   }
//   // Second-last iteration. Note occurances of bottleS, bottleS, bottle
//   else if (num === 2) {
//     console.log(
//       num +
//         " bottles of juice on the wall! " +
//         num +
//         " bottles of juice! Take one down, pass it around... " +
//         (num - 1) +
//         " bottle of juice on the wall!"
//     );
//   }
//   // All other iterations. Note occurances of bottleS, bottleS, bottleS
//   else {
//     console.log(
//       num +
//         " bottles of juice on the wall! " +
//         num +
//         " bottles of juice! Take one down, pass it around... " +
//         (num - 1) +
//         " bottles of juice on the wall!"
//     );
//   }
//   num = num - 1;
// }

// //Countdown, liftoff!

// var x = 60;

// while (x >= 0) {
//   switch (x) {
//     case 50:
//       console.log("Orbiter transfers from ground to internal power");
//       break;
//     case 31:
//       console.log("Ground launch sequencer is go for auto sequence start");
//       break;
//     case 16:
//       console.log("Activate launch pad sound suppression system");
//       break;
//     case 10:
//       console.log("Activate main engine hydrogen burnoff system");
//       break;
//     case 6:
//       console.log("Main engine start");
//       break;
//     case 0:
//       console.log("Solid rocket booster ignition and liftoff!");
//       break;
//     default:
//       console.log("T-" + x + " seconds");
//   }
//   x -= 1;
// }

// // Changing the loop

// for (var x = 9; x >= 1; x--) {
//   console.log("hello " + x);
// }

// // Fix the Error

// for (var x = 5; x < 10; x++) {
//   console.log(x);
// }

// // Fix the Error 2
// for (var k = 0; k < 200; k++) {
//   console.log(k);
// }

// // Factorials

// var solution = 1;

// for (var x = 12; x > 0; x--) {
//   solution *= x;
// }
// console.log(solution);
