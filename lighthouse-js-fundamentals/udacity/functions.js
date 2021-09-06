// Function that reverses a string

// const string = "karolina";

// function reverseString(reverseMe) {
//   var reversed = "";
//   for (let i = reverseMe.length - 1; i >= 0; i--) {
//     reversed += reverseMe[i];
//   }
//   return reversed;
// }

// Laugh it off Quiz

// function laugh() {
//   return "hahahahahahahahahaha!";
// }

// console.log(laugh());

// Laugh it off 2 Quiz

// function laugh(num) {
//   var sound = "";
//   for (var i = 1; i <= num; i++) {
//     sound += "ha";
//   }
//   return sound + "!";
// }

// console.log(laugh(6));

// function isThisWorking(input) {
//   console.log(
//     "Printing: isThisWorking was called and " +
//       input +
//       " was passed in as an argument."
//   );
//   return "Returning: I am returning this string!";
// }

// isThisWorking(3);

// Build a triangle Quiz (Scope)
/*What the code should do:
1-take in the widest lenth(max)
2-have a loop that ouputs a string up to max times
3-have a ftn that creates a string the # of times you input 
4-for loop 
5-holder/accumulator variable that holds the string and return that variable.*/

// creates a line of * for a given length
// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* ";
//   }
//   return line + "\n";
// }

// function buildTriangle(widestWidth) {
//   var triangle = "";
//   for (var i = 1; i <= widestWidth; i++) {
//     triangle += makeLine(i);
//   }
//   return triangle;
// }

// console.log(buildTriangle(14));

// //udacity solution was the same

// // Laugh Quiz

// var laugh = function (numberOfHas) {
//   var hahaString = "";
//   for (var i = 1; i <= numberOfHas; i++) {
//     hahaString += "ha";
//   }
//   return hahaString + "!";
// };

// console.log(laugh(10));

// // Cry Quiz

// var cry = function Boohoo() {
//   var sound = "boohoo!";
//   return sound;
// };
// console.log(cry());

// Inline Quiz
// function emotions(myString, myFunc) {
//   console.log("I am " + myString + ", " + myFunc(2));
// }

// emotions("happy", function (numberOfHas) {
//   var hahaString = "";
//   for (var i = 1; i <= numberOfHas; i++) {
//     hahaString += "ha";
//   }
//   return hahaString + "!";
// });
