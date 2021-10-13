//Kata 20 - Taxicab Geometry
//note: solution in based on the assumption that when the taxi cab is at position (0,0) it is pointing north-east/ 45 degrees.

//note: (not included in my github gist)- if the input has more than 4 consecutive left/right turns the function wouldn't work, didn't determine that calculation or a calculation pattern for more than 4 consecutive turns

const blocksAway = function (directions) {
  let coordinates = {
    east: 0,
    north: 0,
  };

  //keeps track of how many consecutive left or rights turns the cab has made since the calculation for the coordintaes is depedant on whether the cab has made previous left/ right turns
  let left = 0;
  let right = 0;
  let previousDirection;

  //loops through directions array, if the element is a number skip it, if the previous direction is not the same as the current direction that taxi cab must go then reset that counters so that the next calculation for which ever direction will be for one(left)/ one (right)
  for (let i = 0; i < directions.length; i++) {
    if (typeof directions[i] === "number") {
      continue;
    }

    if (directions[i] !== previousDirection) {
      left = 0;
      right = 0;
    }
    //calls the respective function that calculates the coordinates dependning on the direction and whether the same direction was previously driven (consecutively).
    //increase the counter for left/ right direction and saves the current direction in previousDirection variable
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

//Right
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
  coordinates.north += num;
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
  coordinates.east += num;
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

// console.log(
//   blocksAway(["left", 3, "right", 1, "right", 3, "right", 1, "left", 4])
// );
//extra testing input
