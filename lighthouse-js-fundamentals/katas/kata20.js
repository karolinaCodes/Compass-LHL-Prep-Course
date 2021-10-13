//Kata 20 - Taxicab Geometry

let coordinates = {
  east: 0,
  north: 0,
};

const blocksAway = function (directions) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "right" && right === 0) {
      oneRight(directions[i + 1]);
      right++;
    }
  }

  return coordinates;
};

function oneRight(num) {
  coordinates.east += num;
}

function twoRights(num) {
  coordinates.north -= num;
}

function threeRights(num) {
  coordinates.east -= num;
}

function fourRights(num) {
  coordinates.east -= num;
  coordinates.north -= num;
}

//Left
function oneLeft(num) {
  coordinates.north += num;
}

function twoLefts(num) {
  coordinates.east -= num;
}

function threeLefts(num) {
  coordinates.north += num;
}

function fourLefts(num) {
  coordinates.east -= num;
  coordinates.north -= num;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
