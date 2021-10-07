// Change Calculator

const calculateChange = function (total, cash) {
  //initialize a new change denomination object
  let changeObj = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  //calculates the change and converts them to dollars
  let change = (cash - total) / 100;

  //finds which denomintion change can be divided by (going from highest to lowest), if can be divided, then change the respective obj property to the rounded down result of the division. then subtract that rounded down result of the division from change so that can find if change can be divided into another denomination. if change =0 loop ends
  while (change > 0) {
    if (Math.floor(change / 20) > 0) {
      changeObj.twentyDollar = Math.floor(change / 20);
      change -= 20 * changeObj.twentyDollar;
    } else if (Math.floor(change / 10) > 0) {
      changeObj.tenDollar = Math.floor(change / 10);
      change -= 10 * changeObj.tenDollar;
    } else if (Math.floor(change / 5) > 0) {
      changeObj.fiveDollar = Math.floor(change / 5);
      change -= 5 * changeObj.fiveDollar;
    } else if (Math.floor(change / 2) > 0) {
      changeObj.twoDollar = Math.floor(change / 2);
      change -= 2 * changeObj.twoDollar;
      change = change.toFixed(2);
    } else if (Math.floor(change / 1) > 0) {
      changeObj.oneDollar = Math.floor(change / 1);
      change -= 1 * changeObj.oneDollar;
    } else if (Math.floor(change / 0.25) > 0) {
      changeObj.quarter = Math.floor(change / 0.25);
      change -= 0.25 * changeObj.quarter;
    } else if (Math.floor(change / 0.1) > 0) {
      changeObj.dime = Math.floor(change / 0.1);
      change -= 0.1 * changeObj.dime;
      change = change.toFixed(2);
    } else if (Math.floor(change / 0.05) > 0) {
      changeObj.nickel = Math.floor(change / 0.05);
      change -= 0.05 * changeObj.nickel;
    } else if (Math.floor(change / 0.01) > 0) {
      changeObj.penny = Math.floor(change / 0.01);
      change -= 0.01 * changeObj.penny;
      change = change.toFixed(2);
    }
  }

  //loops through the changeObj and takes out the properties (denominations) that equal 0
  const finalChangeObj = {};
  for (denomination in changeObj) {
    if (changeObj[denomination])
      finalChangeObj[denomination] = changeObj[denomination];
  }
  return finalChangeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
