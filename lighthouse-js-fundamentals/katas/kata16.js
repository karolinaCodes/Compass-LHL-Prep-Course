//Case Maker ||

const makeCase = function (input, casingOption) {
  //when had "case" written as parameter in lower casingOption, vscode gave an error warning (assumes it's case from switch statement)

  //convert casingOption input into an array if it isn't one
  if (typeof casingOption !== "object") {
    casingOption = [casingOption];
  }

  let casedString = "";

  //loop over casingOption array and apply each casing option passed in to the ftn to the input
  for (let i = 0; i < casingOption.length; i++) {
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
        console.log("pascal");
        break;
      case "snake":
        console.log("snake");
        break;
      case "kebab":
        console.log("kebab");
        break;
      case "title":
        console.log("title");
        break;
      case "vowel":
        console.log("vowel");
        break;
      case "consonant":
        console.log("consonant");
        break;
      case "upper":
        console.log("upper");
        break;
      case "lower":
        console.log("lower");
        break;
    }
  }
  return casedString;
};

console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));
