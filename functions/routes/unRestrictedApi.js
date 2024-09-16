const express = require("express");
const unRestrictedRouter = express.Router();
const { unRestrictedRecipeRouter } = require("./recipes");

unRestrictedRouter.use("/", unRestrictedRecipeRouter);

module.exports = unRestrictedRouter;
