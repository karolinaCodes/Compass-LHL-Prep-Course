// Kata 19 - Queen Threat Detector

function generateBoard(queenW, queenB) {
  const outerArray = [];
  const [rowW, columnW] = queenW;
  const [rowB, columnB] = queenB;

  for (let i = 0; i < 8; i++) {
    nestedArray = [];
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

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
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

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
