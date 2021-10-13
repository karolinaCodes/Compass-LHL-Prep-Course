// Kata 19 - Queen Threat Detector

function generateBoard(queenW, queenB) {
  //create top level array to hold the nested arrays
  const outerArray = [];

  //destructure the row and column values from the two queen inputs
  const [rowW, columnW] = queenW;
  const [rowB, columnB] = queenB;

  //nestedArray creates an empty array into which the 1's and 0's are pushed to create a board
  //creates 8 rows/arrays (first loop) of 8 columns/elements (second loop), if the coordinates correspond to the coordinates of the two queens a 1 is added, otherwise a 0 is added to the array
  for (let i = 0; i < 8; i++) {
    let nestedArray = [];
    for (let j = 0; j < 8; j++) {
      if ((i === rowW && j === columnW) || (i === rowB && j === columnB)) {
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
  //checks if queen in same row

  let firstQueen;
  let secondQueen;

  //find the coordintaes of the queens
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {
      if (generatedBoard[i][j] === 1 && firstQueen === undefined) {
        firstQueen = [i, j];
      } else if (generatedBoard[i][j] === 1 && firstQueen !== undefined) {
        secondQueen = [i, j];
      }
    }
  }

  //check if both queens in same row
  if (firstQueen[0] === secondQueen[0]) {
    return true;
  }

  //check if both queens in same column
  if (firstQueen[1] === secondQueen[1]) {
    return true;
  }

  //check if queens intersect diagonally (right after)
  if (firstQueen[0] + firstQueen[1] === secondQueen[0] + secondQueen[1]) {
    return true;
  }

  //check if queens intersect diagonally (left before)

  if (firstQueen[1] - firstQueen[0] === secondQueen[1] - secondQueen[0]) {
    return true;
  }

  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

//test input
// console.log(
//   queenThreat([
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//   ])
// );
