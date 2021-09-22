//UdaciFamily Quiz

// var udaciFamily=["Julia", "James", "Karolina"];
// console.log(udaciFamily);

// Colors of the rainbow Quiz
// var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
// rainbow.splice(2, 1, "Yellow", "Green");
// rainbow.splice(5, 0, "Purple");

// //Quidditch Cup Quiz

// var team = [
//   "Oliver Wood",
//   "Angelina Johnson",
//   "Katie Bell",
//   "Alicia Spinnet",
//   "George Weasley",
//   "Fred Weasley",
//   "Harry Potter",
// ];

// function hasEnoughPlayers(team) {
//   if (team.length >= 7) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(hasEnoughPlayers(team));

// //Joining the Crew Quiz

// var captain = "Mal";
// var second = "Zoe";
// var pilot = "Wash";
// var companion = "Inara";
// var mercenary = "Jayne";
// var mechanic = "Kaylee";

// var crew = [captain, second, pilot, companion, mercenary, mechanic];

// var doctor = "Simon";
// var sister = "River";
// var shepherd = "Book";

// // your code goes here

// crew.push(doctor, sister, shepherd);

//Another Type of Loop

// var test = [
//   12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
//   169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
// ];

// test.forEach(function (element, index) {
//   if (element % 3 === 0) {
//     test[index] += 100;
//   }
// });

// console.log(test);

// I got bills quiz
// var bills = [
//   50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
//   100.1, 6.77, 2.22,
// ];

// const totals = bills.map(function (element) {
//   const total = element + element * 0.15;
//   const totalConverted = Number(total.toFixed(2));
//   return totalConverted;
// });

// console.log(totals);

//Nested Number Quiz

// var numbers = [
//   [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//   [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//   [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//   [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//   [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//   [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//   [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//   [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//   [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//   [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
// ];

// for (let outer = 0; outer < numbers.length; outer++) {
//   for (let inner = 0; inner < numbers[outer].length; inner++) {
//     if (numbers[outer][inner] % 2 === 0) {
//       numbers[outer][inner] = "even";
//     } else {
//       numbers[outer][inner] = "odd";
//     }
//   }
// }

// console.log(numbers);
