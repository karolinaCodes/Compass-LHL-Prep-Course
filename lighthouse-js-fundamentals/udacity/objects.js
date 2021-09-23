// // Menu items

// const breakfast = {
//   name: "The Lumberjack",
//   price: 9.95,
//   ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
// };

// // Bank accounts

// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   },
//   printAccountSummary: function () {
//     return (
//       "Welcome!" +
//       "\n" +
//       "Your balance is currently $" +
//       this.balance +
//       " and your interest rate is " +
//       this.interestRatePercent +
//       "%."
//     );
//   },
// };

// console.log(savingsAccount.printAccountSummary());

// Faceboo friends Quiz

const facebookProfile = {
  name: "Karolina",
  friends: 1,
  messages: ["I like pizza", "I want to be a swe"],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1);
  },
  addFriend: function () {
    this.friends++;
  },
  removeFriend: function () {
    this.friends--;
  },
};

// Donuts Revisited
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

donuts.forEach(function (donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
