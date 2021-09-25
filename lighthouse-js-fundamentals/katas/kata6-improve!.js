// SmartParking

const whereCanIPark = function (spots, vehicle) {
  let coordinates = [];
  if (vehicle === "regular") {
    for (let row = 0; row < spots.length; row++) {
      for (let column = 0; column < spots[row].length; column++) {
        if (spots[row][column] === "R") {
          coordinates = [row, column];
          break;
        }
      }
    }
  }
  if (vehicle === "small") {
    for (let row = 0; row < spots.length; row++) {
      for (let column = 0; column < spots[row].length; column++) {
        if (spots[row][column] === "R" || spots[row][column] === "S") {
          coordinates = [row, column];
          break;
        }
      }
    }
  }
  if (vehicle === "motorcycle") {
    for (let row = 0; row < spots.length; row++) {
      for (let column = 0; column < spots[row].length; column++) {
        if (
          spots[row][column] === "R" ||
          spots[row][column] === "S" ||
          spots[row][column] === "M"
        ) {
          coordinates = [row, column];
          break;
        }
      }
    }
  }
  if (coordinates.length === 0) {
    return false;
  } else {
    return coordinates;
  }
};

//array- availabile parking spots
//string-type of car that wants a spot

//uppercase-available
//lowercase-unavailable

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
