// Kata 18 - Square Code

const squareCode = function (message) {
  let removedSpacesString = message.replaceAll(" ", "");

  const numOfColumns = Math.ceil(Math.sqrt(removedSpacesString.length));

  //firstStepsStringArr is a temporary string created by the first loop which creates a nested loop of the message split up into groups of the numOfColumns
  const firstStepStringArr = [];
  const finalStringArr = [];

  for (let i = 0; i <= removedSpacesString.length; i++) {
    let subString = "";
    for (let j = 0; j < numOfColumns; j++) {
      if (removedSpacesString[j] === undefined) {
        continue;
      } else {
        subString += removedSpacesString[j];
      }
    }
    firstStepStringArr.push(subString);
    removedSpacesString = removedSpacesString.slice(numOfColumns);
  }

  //this loop takes the nested array in firstStepsArr and creates a new array in finalStringArr of strings. the loop goes through each element of firstStepsArr and takes the first character of each element in the firstStepsArr, creates a string out of those characters and then adds in to the finalStringArr, then the nested loop moves onto the second column and takes the second characters of each element and so on and so forth.
  for (let i = 0; i < numOfColumns; i++) {
    let stringHolder = "";
    for (let j = 0; j < firstStepStringArr.length; j++) {
      if (firstStepStringArr[j][i] === undefined) {
        continue;
      } else {
        stringHolder += firstStepStringArr[j][i];
      }
    }
    finalStringArr.push(stringHolder);
  }

  return finalStringArr;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
