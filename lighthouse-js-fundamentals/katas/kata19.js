// Kata 19 - Queen Threat Detector

function generateBoard(queenOne, queenTwo) {
  const outerArray = [];
  const [rowOne, columnOne] = queenOne;
  const [rowTwo, columnTwo] = queenTwo;

  for (let i = 0; i < 8; i++) {
    nestedArray = [];
    for (let j = 0; j < 8; j++) {
      if (
        (i === rowOne && j === columnOne) ||
        (i === rowTwo && j === columnTwo)
      ) {
        nestedArray.push(1);
      } else {
        nestedArray.push(0);
      }
    }
    outerArray.push(nestedArray);
  }
  return outerArray;
}

function queenThreat(generatedBoard) {
  //nested for loop
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
