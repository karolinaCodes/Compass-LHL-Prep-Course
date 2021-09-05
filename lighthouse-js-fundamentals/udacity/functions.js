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

function laugh(num) {
  var sound = "";
  for (var i = 1; i <= num; i++) {
    sound += "ha";
  }
  return sound + "!";
}

console.log(laugh(6));

function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
  return "Returning: I am returning this string!";
}

isThisWorking(3);
