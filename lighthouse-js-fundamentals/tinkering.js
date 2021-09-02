function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

const my_string = "Udacity";

for (let i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

// Mablid Quiz- (tinkering with the code myself)
const adjectives = ["amazing", "fun", "entertaining"];

const madLib = `The Intro to JavaScript course is ${
  adjectives[Math.floor(Math.random() * 3)]
}. James and Julia are so ${
  adjectives[Math.floor(Math.random() * 3)]
}. I cannot wait to work through the rest of this ${
  adjectives[Math.floor(Math.random() * 3)]
} content!`;

console.log(madLib);

//String about yourself quiz

var firstName = "Karolina";
var interest = "coding";
var hobby = "read";

var awesomeMessage =
  "Hi, my name is " +
  firstName +
  ". I love " +
  interest +
  ". In my spare time, I like to " +
  hobby +
  ".";

console.log(awesomeMessage);

9 + "3"; // ("93");
9 + "three"; // ("9three");
4 * "5"; // 20;
4 + "5"; // ("45");
"four" / 5; // nan;

//Murder mystery game Quiz

var weapon = "";
var solved = false;

var room = "billiards room";
var suspect = "Mr. Parkes";

if (room === "dining room") {
  solved = true;
  weapon = "knife";
} else if (room === "billiards room") {
  solved = true;
  weapon = "pool stick";
} else if (room === "gallery") {
  solved = true;
  weapon = "trophy";
} else if (room === "ballroom") {
  solved = true;
  weapon = "poison";
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

//Check balance at ATM Quiz

var balance = 325.0;
var checkBalance = false;
var isActive = false;

if (checkBalance && isActive && balance > 0) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance && !isActive) {
  console.log("Your account is no longer active.");
} else if (checkBalance && isActive && balance === 0) {
  console.log("Your account is empty.");
} else if (checkBalance && isActive && balance < 0) {
  ("Your balance is negative. Please contact bank.");
} else {
  console.log("Thank you. Have a nice day!");
}

//Ice cream Quiz
var flavor;
var vessel;
var toppings;

if (
  (flavor === "vanilla" || flavor === "chocolate") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "sprinkles" || toppings === "peanuts")
) {
  console.log(
    "I'd like two scoops of " +
      flavor +
      " ice cream in a " +
      vessel +
      " with " +
      toppings +
      "."
  );
}

//What do I wear?- T-shirt sizing

var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.33 &&
  shirtSleeve < 8.63
) {
  console.log("M");
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 24 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log("L");
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 26 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log("XL");
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("NA");
}
