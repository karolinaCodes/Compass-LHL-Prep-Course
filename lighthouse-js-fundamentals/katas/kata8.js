// Stretch- Repeating numbers

//nested array =nested loop= grid= 2D Array

//1st val in array= repeated value
//2nd val in array= how many times to repeat 1st val

const repeatNumbers = function (data) {
  let string = "";
  //gets access to each row
  for (let row = 0; row < data.length; row++) {
    //for each row, repeat 1st val 2nd val times
    for (let i = 1; i <= data[row][1]; i++) {
      string += data[row][0];
    }
    if (row !== data.length - 1) {
      string += ", ";
    }
  }
  //(another method to only have a ', '/ comma after each element but not if it's the last one-)after the last iteration, removes the ", " from the string
  // const slicedString = string.slice(0, -2);
  // return slicedString;
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
