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
var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

const totals = bills.map(function (element) {
  const total = element + element * 0.15;
  const totalConverted = Number(total.toFixed(2));
  return totalConverted;
});

console.log(totals);
