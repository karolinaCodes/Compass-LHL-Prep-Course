//Case Maker ||

const makeCase = function (input, casingOption) {
  //when had "case" written as parameter in lower casingOption, vscode gave an error warning (assumes it's case from switch statement)

  //convert casingOption input into an array if it isn't one
  if (typeof casingOption !== "object") {
    casingOption = [casingOption];
  }

  let casedString = "";
  //loop over casingOption array and apply each casing option passed in to the ftn, to the input
  for (let i = 0; i < casingOption.length; i++) {
    //for cases where there are multiple casingOptions- if casedString already exists because the input has already loop through the options, set the original input to the already casedString and empty the cased string so that can build a new string into the casedString varaible from the newly assigned input
    if (casedString.length > 0) {
      input = casedString;
      casedString = "";
    }

    //change the casing based on the casingOptions passed
    switch (casingOption[i]) {
      case "camel":
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            continue;
          } else if (input[i - 1] === " ") {
            casedString += input[i].toUpperCase();
          } else {
            casedString += input[i];
          }
        }
        break;

      case "pascal":
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            continue;
          } else if (input[i - 1] === " " || i === 0) {
            casedString += input[i].toUpperCase();
          } else {
            casedString += input[i];
          }
        }
        break;

      case "snake":
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            casedString += "_";
          } else {
            casedString += input[i];
          }
        }
        break;

      case "kebab":
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            casedString += "-";
          } else {
            casedString += input[i];
          }
        }
        break;

      case "title":
        for (let i = 0; i < input.length; i++) {
          if (i === 0 || input[i - 1] === " ") {
            casedString += input[i].toUpperCase();
          } else {
            casedString += input[i];
          }
        }
        break;

      case "vowel":
        for (let i = 0; i < input.length; i++) {
          if (
            input[i] === "a" ||
            input[i] === "e" ||
            input[i] === "i" ||
            input[i] === "o" ||
            input[i] === "u"
          ) {
            casedString += input[i].toUpperCase();
          } else {
            casedString += input[i];
          }
        }
        break;

      case "consonant":
        for (let i = 0; i < input.length; i++) {
          if (
            input[i] === "a" ||
            input[i] === "e" ||
            input[i] === "i" ||
            input[i] === "o" ||
            input[i] === "u"
          ) {
            casedString += input[i];
          } else {
            casedString += input[i].toUpperCase();
          }
        }
        break;

      case "upper":
        for (let i = 0; i < input.length; i++) {
          if (input[i] !== " ") {
            casedString += input[i].toUpperCase();
          } else {
            casedString += input[i];
          }
        }
        break;

      case "lower":
        for (let i = 0; i < input.length; i++) {
          if (input[i] !== " ") {
            casedString += input[i].toLowerCase();
          } else {
            casedString += input[i];
          }
        }
        break;
    }
  }
  return casedString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
