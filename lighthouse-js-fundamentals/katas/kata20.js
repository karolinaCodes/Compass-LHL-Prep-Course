//Kata 20 - Taxicab Geometry

// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
const blocksAway = function (directions) {
  let coordinates = {
    east: 0,
    north: 0,
  };

  let left = 0;
  let right = 0;

  let previousDirection;

  for (let i = 0; i < directions.length; i++) {
    if (
      directions[i] !== previousDirection &&
      typeof directions[i] !== "number"
    ) {
      left = 0;
      right = 0;
    }
    if (directions[i] === "right" && right === 0) {
      oneRight(directions[i + 1], coordinates);
      right++;
      previousDirection = "right";
    } else if (directions[i] === "right" && right === 1) {
      twoRights(directions[i + 1], coordinates);
      right++;
      previousDirection = "right";
    } else if (directions[i] === "right" && right === 2) {
      threeRights(directions[i + 1], coordinates);
      right++;
      previousDirection = "right";
    } else if (directions[i] === "right" && right === 3) {
      fourRights(directions[i + 1], coordinates);
      right++;
      previousDirection = "right";
    } else if (directions[i] === "left" && left === 0) {
      oneLeft(directions[i + 1], coordinates);
      left++;
      previousDirection = "left";
    } else if (directions[i] === "left" && left === 1) {
      twoLefts(directions[i + 1], coordinates);
      left++;
      previousDirection = "left";
    } else if (directions[i] === "left" && left === 2) {
      threeLefts(directions[i + 1], coordinates);
      left++;
      previousDirection = "left";
    } else if (directions[i] === "left" && left === 3) {
      fourLefts(directions[i + 1], coordinates);
      left++;
      previousDirection = "left";
    }
  }

  return coordinates;
};

function oneRight(num, coordinates) {
  coordinates.east += num;
}

function twoRights(num, coordinates) {
  coordinates.north -= num;
}

function threeRights(num, coordinates) {
  coordinates.east -= num;
}

function fourRights(num, coordinates) {
  coordinates.east -= num;
  coordinates.north -= num;
}

//Left
function oneLeft(num, coordinates) {
  coordinates.north += num;
}

function twoLefts(num, coordinates) {
  coordinates.east -= num;
}

function threeLefts(num, coordinates) {
  coordinates.north -= num;
}

function fourLefts(num, coordinates) {
  coordinates.east -= num;
  coordinates.north -= num;
}

//1,3
//3,3
//0,0

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
