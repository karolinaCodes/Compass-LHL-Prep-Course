// The Great Codeville Bake-off

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  //arrays of recipe matches for each bakery
  const bakeryAMatches = [];
  const bakeryBMatches = [];
  let recipeMatch = "No recipes matched";

  //loops through recipes and calls ingredientCheck helper ftn. ingredientCheck checks whether the bakery has the ingredient for that recipe, if it does, it adds it to the respective bakeryXMatches array
  for (let i = 0; i < recipes.length; i++) {
    if (ingredientCheck(bakeryA, recipes[i].ingredients)) {
      bakeryAMatches.push(recipes[i].name);
    }
    if (ingredientCheck(bakeryB, recipes[i].ingredients)) {
      bakeryBMatches.push(recipes[i].name);
    }
  }
  //compares the recipe matches of bakery A and bakery B to find which recipe they have in common and returns that recipe name
  for (let i = 0; i < bakeryAMatches.length; i++) {
    for (let j = 0; j < bakeryBMatches.length; j++) {
      if (bakeryAMatches[i] === bakeryBMatches[j]) {
        recipeMatch = bakeryAMatches[i];
      }
    }
  }
  return recipeMatch;
};

//compares (using nested loop) ingredients from the recipe to the ingredients the bakery has and returns true if it does (so then the recipe name is added to the respective bakeryXMatches array)
const ingredientCheck = function (bakeryIngredients, recipeIngredients) {
  for (let i = 0; i < recipeIngredients.length; i++) {
    for (let j = 0; j < bakeryIngredients.length; j++) {
      if (recipeIngredients[i] === bakeryIngredients[j]) {
        return true;
      }
    }
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
