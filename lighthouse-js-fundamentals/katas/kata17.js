const urlDecode = function (text) {
  // seperates the key value pairs into elements in an array. if there is only one key value pair it is made into an array of one element
  const textArray = text.split("&");

  //instanties an empty object to fill in with key-value pairs
  const dataObj = {};

  //loops through the array of encoded key-value pairs, finds the index of the "=" in order the seperate the key and value to store them in a key and value variable. the string "%20" that occurs in the value string is replaced by a space " ". the key-value pair is added to the final data object and returned
  for (let i = 0; i < textArray.length; i++) {
    const indexOfEqual = textArray[i].indexOf("=");
    console.log(indexOfEqual);

    const key = textArray[i].slice(0, indexOfEqual);
    const value = textArray[i].slice(indexOfEqual + 1).replaceAll("%20", " ");

    //replaceAll() does not work in node runtime but works in browser runtime therefore, below is a solution to replace all instances of the string "%20" if replaceAll() cannot be used
    // const value = textArray[i].slice(indexOfEqual + 1);
    // let finalValue = "";
    // for (let i = 0; i < value.length; i++) {
    //   if (value[i] === "%") {
    //     finalValue += " ";
    //   } else if (value[i - 1] === "%" && value[i] === "2") {
    //     continue;
    //   } else if (value[i] === "0") {
    //     continue;
    //   } else {
    //     finalValue += value[i];
    //   }
    // }
    //dataObj[key] = finalValue;

    dataObj[key] = value;
  }

  return dataObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// const string = "duck=rubber";
// const test = string.split("&");

// console.log(test);

// console.log(string.indexOf("="));
