// node judge-vegetable.js
// We're rooting for you!- Objects evaluation

function judgeVegetable(vegetables, metric) {
  let winner = vegetables[0];
  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i][metric] > winner[metric]) {
      winner = vegetables[i];
    }
  }
  return winner["submitter"];
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
