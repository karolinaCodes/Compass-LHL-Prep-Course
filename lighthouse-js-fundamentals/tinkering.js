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
