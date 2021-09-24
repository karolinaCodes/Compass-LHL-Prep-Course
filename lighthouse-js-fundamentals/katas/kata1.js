//Sum the largest numbers

const sumLargestNumbers = function (data) {
  let sum = 0;
  for (let i = 1; i <= 2; i++) {
    let largest = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > largest) {
        largest = data[i];
      }
    }
    sum += largest;
    const index = data.indexOf(largest);
    data.splice(index, 1);
  }
  return sum;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
