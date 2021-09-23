// Merge Arrays - Stretch Activity
//UNSOLVED!

function merge(arr1, arr2) {
  const concatenated = arr1;
  for (let i = 0; i < arr2.length; i++) {
    concatenated.push(arr2[i]);
  }

  for (let i = 0; i < concatenated.length; i++) {
    let first = concatenated[i];
    let second = concatenated[i + 1];
    if (first - second > 0) {
      concatenated[i] = second;
      concatenated[i + 1] = first;
    }
  }
  return concatenated;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
