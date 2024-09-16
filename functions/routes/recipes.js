const recipes = require("../services/recipes");
const express = require("express");
const {
  metaDataValidator,
  recipeIngredientValidator,
  recipeSectionValidator,
  recipeInstructionValidator,
  cookingParameterValidator,
} = require("../utils/express-validator");
const { body, validationResult } = require("express-validator");
const restrictedRecipeRouter = express.Router();
const unRestrictedRecipeRouter = express.Router();

unRestrictedRecipeRouter.get("/recipes", async (req, res, next) => {
  const result = await recipes.getAllRecipes();
  res.status(result.status).send(result.message);
});
unRestrictedRecipeRouter.get("/recipe/:recipeId", async (req, res, next) => {
  const result = await recipes.getRecipeDetailsById(req.params);
  res.status(result.status).send(result.message);
});
unRestrictedRecipeRouter.get("/recipe", async (req, res, next) => {
  const result = await recipes.getRecipeDetailsByName(req.query);
  res.status(result.status).send(result.message);
});
restrictedRecipeRouter.post(
  "/recipe",
  // [
  //   body("recipeIngredients").custom(recipeIngredientValidator),
  //   body("recipeInstructions").custom(recipeInstructionValidator),
  // ],
  async (req, res, next) => {
    // const error = validationResult(req);
    // if (!error.isEmpty()) {
    //   return res.status(400).json({ errors: error.array() });
    // }
    const result = await recipes.postRecipeDetails(req.body, req.user.uid);
    res.status(result.status).send(result.message);
  }
);
restrictedRecipeRouter.put(
  "/recipe/:id",
  // [
  //   body("recipeIngredients").custom(recipeIngredientValidator),
  //   body("recipeInstructions").custom(recipeInstructionValidator),
  // ],
  async (req, res, next) => {
    // const error = validationResult(req);
    // if (!error.isEmpty()) {
    //   return res.status(400).json({ errors: error.array() });
    // }
    const result = await recipes.patchRecipeDetails(req.body, req.user.uid);
    res.status(result.status).send(result.message);
  }
);
restrictedRecipeRouter.delete("/recipe/:id", async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const userId = await admin.auth().verifyIdToken(token);
  const result = await recipes.deleteSingleRecipe(req.params, userId.uid);
  res.status(result.status).send(result.message);
});

module.exports = { restrictedRecipeRouter, unRestrictedRecipeRouter };
