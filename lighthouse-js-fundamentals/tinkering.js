function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

const my_string = "Udacity";

for (let i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

const adjectives = ["amazing", "fun", "entertaining"];

const madLib = `The Intro to JavaScript course is ${
  adjectives[Math.floor(Math.random() * 3)]
}. James and Julia are so ${
  adjectives[Math.floor(Math.random() * 3)]
}. I cannot wait to work through the rest of this ${
  adjectives[Math.floor(Math.random() * 3)]
} content!`;

console.log(madLib);

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
