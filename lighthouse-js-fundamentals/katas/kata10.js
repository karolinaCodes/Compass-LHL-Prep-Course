// Multiplication Table
const multiplicationTable = function (maxValue) {
  let string = "";
  //creates the rows
  for (let i = 1; i <= maxValue; i++) {
    //creates the columns
    for (let j = i; j <= maxValue * i; j += i) {
      string += j + " ";
    }
    string += "\n";
  }
  return string;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

//input val is the value we multiply to, in multiplication table
//explanation:
//increases each el of each row by the first value
//each row increases by one (by the outer loop), then increase j by the i value each time but make the maxValue what the maxvalue is times the i value
