// // Solved these on own
// // Voting Station Calculation

// const stations = [
//   ["Big Bear Donair", 10, "restaurant"],
//   ["Bright Lights Elementary", 50, "school"],
//   ["Moose Mountain Community Centre", 45, "community centre"],
// ];

// function chooseStations(stations) {
//   let goodStations = [];
//   for (let station of stations) {
//     if (
//       station[1] >= 20 &&
//       (station[2] === "school" || station[2] === "community centre")
//     ) {
//       goodStations.push(station[0]);
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));

// // X Marks the Perfect Shot

// function finalPosition(moves) {
//   let x = 0;
//   let y = 0;
//   for (let move of moves) {
//     if (move === "north") {
//       y++;
//     } else if (move === "south") {
//       y--;
//     } else if (move === "west") {
//       x--;
//     } else if (move === "east") {
//       x++;
//     }
//   }
//   return [x, y];
// }
// const moves = ["north", "north", "west", "west", "north", "east", "north"];

// console.log(finalPosition(moves));

// // Age calculator

// function ageCalculator(name, yearOfBirth, currentYear) {
//   const age = currentYear - yearOfBirth;
//   return name + " is " + age + " years old.";
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));

// // howManyHundreds

// function howManyHundreds(num) {
//   const numberOfHundreds = Math.floor(num / 100);
//   return numberOfHundreds;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

///////////////////////////////////////////////////////////You may want to make use of the modulo operator (%). For reference:- WHY??

////and change an answer to ternary operator!!!!!!!!

// Are Calculators

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return;
  }
  const area = length * width;
  return area;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return;
  }
  const area = (base * height) / 2;
  return area;
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return;
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
