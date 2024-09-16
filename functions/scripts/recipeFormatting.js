const recipeData = require("../data.json");
const { v4 } = require("uuid");
const uuidv4 = v4;
const fs = require("node:fs");

const recipeCollectionToSent = {};
const author = { "@type": "Person", name: "John Doe" };

const instructionParsing = (instructions, ingredients) => {
  const allInstructions = [];
  let recipeIngredient = ingredients.map(
    (item) => item?.name?.toLowerCase() || item?.ingredient?.toLowerCase()
  );
  let ingredientReExp = new RegExp(
    "\\b(" + recipeIngredient.join("|") + ")\\b",
    "gi"
  );
  instructions.map((item) => {
    item.itemListElement &&
      item.itemListElement.map((item1, index) => {
        const instructionText = item1.title || item1.text;
        let textIngredient = instructionText.match(ingredientReExp);
        const object = {
          title: instructionText,
          ingredients: textIngredient ?? [],
          instructionIndex: index + 1,
        };
        allInstructions.push(object);
      });
  });
  return allInstructions;
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

Object.values(recipeData).map((item) => {
  let id = uuidv4();
  let instruction = item["recipeInstructions"] || item["recipeInstruction"];
  let ingredient = item["recipeIngredient"] || item["recipeIngredients"];
  const object = {
    id,
    author,
    title: item["title"] || item["name"],
    description: item["recipeDescription"] || item["description"] || "",
    prepTime: item["prepTime"] || 0,
    cookTime: item["cookTime"] || 0,
    servings: item["servings"] || item["recipeYields"] || 0,
    recipeImage: Object.values(item["images"])[0] || "",
    recipeIngredients: ingredientParsing(ingredient),
    recipeInstructions: instructionParsing(instruction, ingredient),
  };
  recipeCollectionToSent[id] = object;
});

try {
  fs.writeFile(
    "scripts/recipes.json",
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
