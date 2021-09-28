// Case Maker

const camelCase = function (input) {
  let camelString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      //if it's not a space, add the character
      if (input[i - 1] === " ") {
        //if the character before was a space, upper case it, if it wasn't dont upper case just add it
        camelString += input[i].toUpperCase();
      } else {
        camelString += input[i];
      }
    }
  }
  return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//Another solution

// skip the element if we already uppercased it so it doesnt repeat it in lower case

const camelCase = function (input) {
  let camelString = "";
  let i = 0;

  while (i < input.length) {
    if (input[i] === " ") {
      camelString += input[i + 1].toUpperCase();
      i += 2;
    } else {
      camelString += input[i];
      i++;
    }
  }
  return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
