// Merge Arrays - Stretch Activity
//UNSOLVED!

function merge(arr1, arr2) {
  const concatenatedArr = arr1;
  for (let i = 0; i < arr2.length; i++) {
    concatenatedArr.push(arr2[i]);
  }

  let sortedArray = [];
  for (let i = 0; i < concatenatedArr.length; i++) {
    let smallest = concatenatedArr[0];
    for (let i = 1; i < concatenatedArr.length; i++) {
      if (concatenatedArr[i] < smallest || concatenatedArr[i] === smallest) {
        smallest = concatenatedArr[i];
        const index = concatenatedArr.indexOf(smallest);
        concatenatedArr.splice(index, 1);
        sortedArray.push(smallest);
      }
    }
  }
  return sortedArray;
}
//[4,5,6,1,2,3,4]
//[4,5,6,2,3,4]

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

//find smallest element, take it out of array, push to a new array.
//loop again,
