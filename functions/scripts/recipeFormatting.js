const recipeData = require("../scripts/recipe-data.json");
const { v4 } = require("uuid");
const uuidv4 = v4;
const fs = require("node:fs");

const recipeCollectionToSent = {};
const author = { "@type": "Person", name: "John Doe" };

const instructionParsing = (instruction, ingredients, name) => {
  try {
    const allInstructions = [];
    let instructions = instruction.split("\n");
    let recipeIngredient = ingredients.map(
      (item) =>
        item?.name?.toLowerCase() ||
        item?.ingredient?.toLowerCase() ||
        item.toLowerCase().trim()
    );
    let ingredientReExp = new RegExp(
      "\\b(" + recipeIngredient.join("|") + ")\\b",
      "g"
    );
    instructions.map((item, index) => {
      let matches = item.match(ingredientReExp);
      let textIngredient = [...new Set(matches)];
      const object = {
        title: item,
        ingredients: textIngredient ?? [],
        instructionIndex: index + 1,
      };
      allInstructions.push(object);
    });
    return allInstructions;
  } catch (e) {
    console.error(e, name);
  }
};

const ingredientParsing = (ingredients) => {
  const allIngredients = [];
  ingredients.map((item) => {
    const name = item["ingredient"] || item["name"] || "";
    const unit = item["unitt"] || item["unit"] || "";
    const prepStyle =
      item["prepStyle"]?.trim() || item["prepStyles"]?.trim() || "";
    const quantity = item["quantity"] || "";
    const ingredient = `${quantity} ${unit}, ${name} ${prepStyle}`;
    allIngredients.push(ingredient);
  });
  return allIngredients;
};

Object.values(recipeData).map((item, index) => {
  let id = uuidv4();
  let instruction =
    item["TranslatedInstructions"] ||
    item["recipeInstructions"] ||
    item["recipeInstruction"];
  let ingredient = item["TranslatedIngredients"].split(",");
  let cleanedIngredients = item["Cleaned-Ingredients"].split(",");
  let ingredients = cleanedIngredients.map((item) => item.split("(")[0]);
  const object = {
    id,
    author,
    title: item["TranslatedRecipeName"] || item["name"],
    description: item["recipeDescription"] || item["description"] || "",
    totalTime: item["TotalTimeInMins"] || 0,
    prepTime: item["prepTime"] || 0,
    cookTime: item["cookTime"] || 0,
    servings: item["servings"] || item["recipeYields"] || 4,
    recipeImage: item["image-url"] || Object.values(item["images"])[0] || "",
    recipeIngredients: ingredient,
    recipeInstructions: instructionParsing(
      instruction,
      ingredients,
      item["TranslatedRecipeName"]
    ),
  };
  recipeCollectionToSent[id] = object;
});

try {
  fs.writeFile(
    "./recipes-2.json",
    JSON.stringify(recipeCollectionToSent),
    function (err) {
      if (err) {
        return console.log(err);
      }
    }
  );
} catch (e) {
  console.log("error in file creation", e);
}
