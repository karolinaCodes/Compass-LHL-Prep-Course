// Kata 21 - Number Guesser
let prompt = require("prompt-sync")();

//initialize stopping condition varaible for the while loop, when changes to true, loop exits
let answered;

//create a random number from 0-100
let secretNumber = Math.floor(Math.random() * 100) + 1;

//initialize an array to hold and keep track of the valid attempts
let attempts = [];

//while loop so program doesn't exit and the user is prompted to guess again after each guess- (and so that the program state isn't erased)
while (!answered) {
  //function defines the terminal prompt and returns the user input
  let answer = prompt(
    "Welcome to NUMBER GUESSER! (Type 'quit' to quit at any time.) Guess a number: "
  );

  //if user types "quit" the loop is terminated by the stopping condition variable
  if (answer === "quit") {
    console.log("Bye!");
    answered = true;
    continue;
  }

  //converts the user input to a number (the input is originally a string)- if input is a string or character converts to NaN
  answer = Number(answer);

  //checks whether after the explicit type conversion, the number was succesfully convert to a number or an illegal number- isNaN() is a function that checks whether a value is an illegal number
  if (isNaN(answer)) {
    console.log("Not a number!");
    continue;
  }

  //checks whether the user has input the same answer between by looping through the attempts array
  if (attempts.includes(answer)) {
    console.log("Already Guessed!");
    continue;
  }

  //if answer clears the preceding if statements, the answer is added to the attempts array
  attempts.push(answer);

  //checks if the user guessed the secret number, or if the user guess a number that's too high or too low
  if (secretNumber === answer) {
    const numOfAttempts = attempts.length;
    attempts = [];
    console.log(`You got it! You took ${numOfAttempts} attempts!`);
    answered = true;
  } else if (secretNumber < answer) {
    console.log("Too High");
  } else if (secretNumber > answer) {
    console.log("Too Low");
  }
}
