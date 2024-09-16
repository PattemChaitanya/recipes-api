const express = require("express");
const { restrictedRecipeRouter } = require("./recipes");
const restrictedRouter = express.Router();

restrictedRouter.use("/", restrictedRecipeRouter);

module.exports = restrictedRouter;
