// JuliaJames (Fizzbuzz)
var x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 !== 0) {
    console.log("Julia");
  } else if (x % 5 === 0 && x % 3 !== 0) {
    console.log("James");
  } else if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else {
    console.log(x);
  }
  x += 1;
}

//Ternary

var x = 1;

while (x <= 20) {
  x % 3 === 0 && x % 5 !== 0
    ? console.log("Julia")
    : x % 5 === 0 && x % 3 !== 0
    ? console.log("James")
    : x % 3 === 0 && x % 5 === 0
    ? console.log("JuliaJames")
    : console.log(x);
  x += 1;
}

//Bottles of juice

var num = 99;

while (num > 0) {
  console.log(
    String(num) +
      (num === 1 ? " bottle" : " bottles") +
      " of juice on the wall! " +
      String(num) +
      (num === 1 ? " bottle" : " bottles") +
      " of juice! Take one down, pass it around... " +
      String(num - 1) +
      (num - 1 === 1 ? " bottle" : " bottles") +
      " of juice on the wall!"
  );
  num -= 1;
}

//Udacity Solution:Bottles of juice

var num = 99;

while (num >= 1) {
  // Last iteration. Note occurances of bottle, bottle, bottleS
  if (num === 1) {
    console.log(
      num +
        " bottle of juice on the wall! " +
        num +
        " bottle of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  }
  // Second-last iteration. Note occurances of bottleS, bottleS, bottle
  else if (num === 2) {
    console.log(
      num +
        " bottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottle of juice on the wall!"
    );
  }
  // All other iterations. Note occurances of bottleS, bottleS, bottleS
  else {
    console.log(
      num +
        " bottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  }
  num = num - 1;
}
