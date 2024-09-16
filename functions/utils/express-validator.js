const { checkSchema } = require("express-validator");

const metaDataValidationSchema = {
  authorId: {
    in: ["body.metadata.authorId"],
    isString: true,
    errorMessage: "authorId should be a string",
  },
  authorName: {
    in: ["body.metadata.authorName"],
    isString: true,
    errorMessage: "authorName should be a string",
  },
  authorThumbnailUrl: {
    in: ["body.metadata.authorThumbnailUrl"],
    isString: true,
    errorMessage: "authorThumbnailUrl should be a string",
  },
  title: {
    in: ["body.metadata.title"],
    isString: true,
    errorMessage: "title should be a string",
  },
  recipeDescription: {
    in: ["body.metadata.recipeDescription"],
    isString: true,
    errorMessage: "recipeDescription should be a string",
  },
  servings: {
    in: ["body.metadata.servings"],
    isNumeric: true,
    errorMessage: "servings should be a number",
  },
  difficultyLevel: {
    in: ["body.metadata.difficultyLevel"],
    isString: true,
    errorMessage: "difficultyLevel should be a string",
  },
  isVerifiedByKlynk: {
    in: ["body.metadata.isVerifiedByKlynk"],
    isBoolean: true,
    errorMessage: "isVerifiedByKlynk should be a boolean",
  },
  prepTimeInMins: {
    in: ["body.metadata.prepTimeInMins"],
    isNumeric: true,
    errorMessage: "prepTimeInMins should be a number",
  },
  cookTimeInMins: {
    in: ["body.metadata.cookTimeInMins"],
    isNumeric: true,
    errorMessage: "cookTimeInMins should be a number",
  },
  restTimeInMins: {
    in: ["body.metadata.restTimeInMins"],
    isNumeric: true,
    errorMessage: "restTimeInMins should be a number",
  },
  totalTimeInMins: {
    in: ["body.metadata.totalTimeInMins"],
    isNumeric: true,
    errorMessage: "totalTimeInMins should be a number",
  },
  productReleases: {
    in: ["body.metadata.productReleases"],
    isObject: true,
    errorMessage: "productReleases should be an object",
  },
  courses: {
    in: ["body.metadata.courses"],
    isObject: true,
    errorMessage: "courses should be an object",
  },
  tools: {
    in: ["body.metadata.tools"],
    isObject: true,
    errorMessage: "tools should be an object",
  },
  diets: {
    in: ["body.metadata.diets"],
    isObject: true,
    errorMessage: "diets should be an object",
  },
  cuisines: {
    in: ["body.metadata.cuisines"],
    isObject: true,
    errorMessage: "cuisines should be an object",
  },
  tags: {
    in: ["body.metadata.tags"],
    isObject: true,
    errorMessage: "tags should be an object",
  },
  allergies: {
    in: ["body.metadata.allergies"],
    isObject: true,
    errorMessage: "allergies should be an object",
  },
  prepImage: {
    in: ["body.metadata.prepImage"],
    isString: true,
    errorMessage: "prepImage should be a string",
  },
  notes: {
    in: ["body.metadata.notes"],
    isString: true,
    errorMessage: "notes should be a string",
  },
  recipeUrl: {
    in: ["body.metadata.recipeUrl"],
    isString: true,
    errorMessage: "recipeUrl should be a string",
  },
  recipeServeDescription: {
    in: ["body.metadata.recipeServeDescription"],
    isString: true,
    errorMessage: "recipeServeDescription should be a string",
  },
  recipeIngredientsLength: {
    in: ["body.metadata.recipeIngredientsLength"],
    isNumeric: true,
    errorMessage: "recipeIngredientsLength should be a number",
  },
  thumbnailUrl: {
    in: ["body.metadata.thumbnailUrl"],
    isString: true,
    errorMessage: "thumbnailUrl should be a string",
  },
  sourceUrl: {
    in: ["body.metadata.sourceUrl"],
    isString: true,
    errorMessage: "sourceUrl should be a string",
  },
  categories: {
    in: ["body.metadata.categories"],
    isObject: true,
    errorMessage: "categories should be an object",
  },
  recipeIngredientNames: {
    in: ["body.metadata.recipeIngredientNames"],
    isObject: true,
    errorMessage: "recipeIngredientNames should be an object",
  },
  smartFilters: {
    in: ["body.metadata.smartFilters"],
    isObject: true,
    errorMessage: "smartFilters should be an object",
  },
  scheduledTime: {
    in: ["body.metadata.scheduledTime"],
    isString: true,
    errorMessage: "scheduledTime should be a string",
  },
  createdAt: {
    in: ["body.metadata.createdAt"],
    isString: true,
    errorMessage: "createdAt should be a string",
  },
  updatedAt: {
    in: ["body.metadata.updatedAt"],
    isString: true,
    errorMessage: "updatedAt should be a string",
  },
  isPublished: {
    in: ["body.metadata.isPublished"],
    isBoolean: true,
    errorMessage: "isPublished should be a boolean",
  },
  isPublic: {
    in: ["body.metadata.isPublic"],
    isBoolean: true,
    errorMessage: "isPublic should be a boolean",
  },
  isCreatedByKlynk: {
    in: ["body.metadata.isCreatedByKlynk"],
    isBoolean: true,
    errorMessage: "isCreatedByKlynk should be a boolean",
  },
  id: {
    in: ["body.metadata.id"],
    isString: true,
    errorMessage: "id should be a string",
  },
  recipeId: {
    in: ["body.metadata.recipeId"],
    isString: true,
    errorMessage: "recipeId should be a string",
  },
  isRecipeStatus: {
    in: ["body.metadata.isRecipeStatus"],
    isBoolean: true,
    errorMessage: "isRecipeStatus should be a boolean",
  },
  isRecipeProSelected: {
    in: ["body.metadata.isRecipeProSelected"],
    isBoolean: true,
    errorMessage: "isRecipeProSelected should be a boolean",
  },
  isRikuSelected: {
    in: ["body.metadata.isRikuSelected"],
    isBoolean: true,
    errorMessage: "isRikuSelected should be a boolean",
  },
  isSemiSelected: {
    in: ["body.metadata.isSemiSelected"],
    isBoolean: true,
    errorMessage: "isSemiSelected should be a boolean",
  },
};

const ingredientValidator = {
  id: {
    in: ["body.recipeIngredients.*.id"],
    isString: true,
    errorMessage: "id should be a string",
  },
  ingredientId: {
    in: ["body.recipeIngredients.*.ingredientId"],
    isString: true,
    errorMessage: "ingredientId should be a string",
  },
  isScaleIngredient: {
    in: ["body.recipeIngredients.*.isScaleIngredient"],
    isBoolean: true,
    errorMessage: "isScaleIngredient should be a boolean",
  },
  name: {
    in: ["body.recipeIngredients.*.name"],
    isString: true,
    errorMessage: "name should be a string",
  },
  quantity: {
    in: ["body.recipeIngredients.*.quantity"],
    isNumeric: true,
    errorMessage: "quantity should be a number",
  },
  quantityPerStep: {
    in: ["body.recipeIngredients.*.quantityPerStep"],
    isNumeric: true,
    errorMessage: "quantityPerStep should be a number",
  },
  ingredient: {
    in: ["body.recipeIngredients.*.ingredient"],
    isString: true,
    errorMessage: "ingredient should be a string",
  },
  ingredientType: {
    in: ["body.recipeIngredients.*.ingredientType"],
    isString: true,
    errorMessage: "ingredientType should be a string",
  },
  ingredientImage: {
    in: ["body.recipeIngredients.*.ingredientImage"],
    isString: true,
    errorMessage: "ingredientImage should be a string",
  },
  prepStyle: {
    in: ["body.recipeIngredients.*.prepStyle"],
    isString: true,
    errorMessage: "prepStyle should be a string",
  },
  units: {
    in: ["body.recipeIngredients.*.units"],
    isString: true,
    errorMessage: "units should be a string",
  },
  unitPerStep: {
    in: ["body.recipeIngredients.*.unitPerStep"],
    isString: true,
    errorMessage: "unitPerStep should be a string",
  },
  loopingUnit: {
    in: ["body.recipeIngredients.*.loopingUnit"],
    isString: true,
    errorMessage: "loopingUnit should be a string",
  },
  loopingQuantity: {
    in: ["body.recipeIngredients.*.loopingQuantity"],
    isNumeric: true,
    errorMessage: "loopingQuantity should be a number",
  },
  schedulingLimit: {
    in: ["body.recipeIngredients.*.schedulingLimit"],
    isNumeric: true,
    errorMessage: "schedulingLimit should be a number",
  },
  isOutput: {
    in: ["body.recipeIngredients.*.isOutput"],
    isBoolean: true,
    errorMessage: "isOutput should be a boolean",
  },
  isRecipeGenerated: {
    in: ["body.recipeIngredients.*.isRecipeGenerated"],
    isBoolean: true,
    errorMessage: "isRecipeGenerated should be a boolean",
  },
  isUserGenerated: {
    in: ["body.recipeIngredients.*.isUserGenerated"],
    isBoolean: true,
    errorMessage: "isUserGenerated should be a boolean",
  },
  loadingPosition: {
    in: ["body.recipeIngredients.*.loadingPosition"],
    isString: true,
    errorMessage: "loadingPosition should be a string",
  },
  podType: {
    in: ["body.recipeIngredients.*.podType"],
    isString: true,
    errorMessage: "podType should be a string",
  },
  podPosition: {
    in: ["body.recipeIngredients.*.podPosition"],
    isObject: true,
    errorMessage: "podPosition should be an object",
  },
  categoryInContextOfRiku: {
    in: ["body.recipeIngredients.*.categoryInContextOfRiku"],
    isString: true,
    errorMessage: "categoryInContextOfRiku should be a string",
  },
  recipeId: {
    in: ["body.recipeIngredients.*.recipeId"],
    isString: true,
    errorMessage: "recipeId should be a string",
  },
  sectionId: {
    in: ["body.recipeIngredients.*.sectionId"],
    isString: true,
    errorMessage: "sectionId should be a string",
  },
  instructionId: {
    in: ["body.recipeIngredients.*.instructionId"],
    isString: true,
    errorMessage: "instructionId should be a string",
  },
};

const sectionValidator = {
  id: {
    in: ["body.recipeSections.*.id"],
    isString: true,
    errorMessage: "id should be a string",
  },
  title: {
    in: ["body.recipeSections.*.title"],
    isString: true,
    errorMessage: "title should be a string",
  },
  sectionType: {
    in: ["body.recipeSections.*.sectionType"],
    isString: true,
    errorMessage: "sectionType should be a string",
  },
  sectionIndex: {
    in: ["body.recipeSections.*.sectionIndex"],
    isNumeric: true,
    errorMessage: "sectionIndex should be a number",
  },
  isLoopSection: {
    in: ["body.recipeSections.*.isLoopSection"],
    isBoolean: true,
    errorMessage: "isLoopSection should be a boolean",
  },
  loopInstruction: {
    in: ["body.recipeSections.*.loopInstruction"],
    isString: true,
    errorMessage: "loopInstruction should be a string",
  },
  recipeId: {
    in: ["body.recipeSections.*.recipeId"],
    isString: true,
    errorMessage: "recipeId should be a string",
  },
  isProbeRequired: {
    in: ["body.recipeSections.*.isProbeRequired"],
    isBoolean: true,
    errorMessage: "isProbeRequired should be a boolean",
  },
};

const instructionValidator = {
  id: {
    in: ["body.recipeInstructions.*.id"],
    isString: true,
    errorMessage: "id should be a string",
  },
  mentionsTitle: {
    in: ["body.recipeInstructions.*.mentionsTitle"],
    isString: true,
    errorMessage: "mentionsTitle should be a string",
  },
  recipeId: {
    in: ["body.recipeInstructions.*.recipeId"],
    isString: true,
    errorMessage: "recipeId should be a string",
  },
  sectionId: {
    in: ["body.recipeInstructions.*.sectionId"],
    isString: true,
    errorMessage: "sectionId should be a string",
  },
  tip: {
    in: ["body.recipeInstructions.*.tip"],
    isString: true,
    errorMessage: "tip should be a string",
  },
  title: {
    in: ["body.recipeInstructions.*.title"],
    isString: true,
    errorMessage: "title should be a string",
  },
  tools: {
    in: ["body.recipeInstructions.*.tools"],
    isObject: true,
    errorMessage: "tools should be an object",
  },
  instructionIndex: {
    in: ["body.recipeInstructions.*.instructionIndex"],
    isNumeric: true,
    errorMessage: "instructionIndex should be a number",
  },
  stepImageUrl: {
    in: ["body.recipeInstructions.*.stepImageUrl"],
    isString: true,
    errorMessage: "stepImageUrl should be a string",
  },
};

const cookingParametersValidator = {
  id: {
    in: ["body.cookingParameters.*.id"],
    isString: true,
    errorMessage: "id should be a string",
  },
  sectionId: {
    in: ["body.cookingParameters.*.sectionId"],
    isString: true,
    errorMessage: "sectionId should be a string",
  },
  instructionId: {
    in: ["body.cookingParameters.*.instructionId"],
    isString: true,
    errorMessage: "instructionId should be a string",
  },
  recipeId: {
    in: ["body.cookingParameters.*.recipeId"],
    isString: true,
    errorMessage: "recipeId should be a string",
  },
  stirring: {
    in: ["body.cookingParameters.*.stirring"],
    isString: true,
    errorMessage: "stirring should be a string",
  },
  isLidOpen: {
    in: ["body.cookingParameters.*.isLidOpen"],
    isBoolean: true,
    errorMessage: "isLidOpen should be a boolean",
  },
  action: {
    in: ["body.cookingParameters.*.action"],
    isString: true,
    errorMessage: "action should be a string",
  },
  actionId: {
    in: ["body.cookingParameters.*.actionId"],
    isString: true,
    errorMessage: "actionId should be a string",
  },
  powerInLevel: {
    in: ["body.cookingParameters.*.powerInLevel"],
    isNumeric: true,
    errorMessage: "powerInLevel should be a number",
  },
  centralTemperatureInC: {
    in: ["body.cookingParameters.*.centralTemperatureInC"],
    isNumeric: true,
    errorMessage: "centralTemperatureInC should be a number",
  },
  externalTemperatureInC: {
    in: ["body.cookingParameters.*.externalTemperatureInC"],
    isNumeric: true,
    errorMessage: "externalTemperatureInC should be a number",
  },
  weightInGrams: {
    in: ["body.cookingParameters.*.weightInGrams"],
    isNumeric: true,
    errorMessage: "weightInGrams should be a number",
  },
  durationInMins: {
    in: ["body.cookingParameters.*.durationInMins"],
    isNumeric: true,
    errorMessage: "durationInMins should be a number",
  },
  instructionIndex: {
    in: ["body.cookingParameters.*.instructionIndex"],
    isNumeric: true,
    errorMessage: "instructionIndex should be a number",
  },
  manualHeatLevel: {
    in: ["body.cookingParameters.*.manualHeatLevel"],
    isString: true,
    errorMessage: "manualHeatLevel should be a string",
  },
  presetId: {
    in: ["body.cookingParameters.*.presetId"],
    isString: true,
    errorMessage: "presetId should be a string",
  },
  presetName: {
    in: ["body.cookingParameters.*.presetName"],
    isString: true,
    errorMessage: "presetName should be a string",
  },
  controlModeId: {
    in: ["body.cookingParameters.*.controlModeId"],
    isString: true,
    errorMessage: "controlModeId should be a string",
  },
  controlModeFirmwareName: {
    in: ["body.cookingParameters.*.controlModeFirmwareName"],
    isString: true,
    errorMessage: "controlModeFirmwareName should be a string",
  },
  controlModeFirmwareId: {
    in: ["body.cookingParameters.*.controlModeFirmwareId"],
    isString: true,
    errorMessage: "controlModeFirmwareId should be a string",
  },
  semiScreenId: {
    in: ["body.cookingParameters.*.semiScreenId"],
    isNumeric: true,
    errorMessage: "semiScreenId should be a number",
  },
  isCentralProbeTemperatureRequired: {
    in: ["body.cookingParameters.*.isCentralProbeTemperatureRequired"],
    isBoolean: true,
    errorMessage: "isCentralProbeTemperatureRequired should be a boolean",
  },
  isExternalProbeTemperatureRequired: {
    in: ["body.cookingParameters.*.isExternalProbeTemperatureRequired"],
    isBoolean: true,
    errorMessage: "isExternalProbeTemperatureRequired should be a boolean",
  },
  isPowerRequired: {
    in: ["body.cookingParameters.*.isPowerRequired"],
    isBoolean: true,
    errorMessage: "isPowerRequired should be a boolean",
  },
  isTimeRequired: {
    in: ["body.cookingParameters.*.isTimeRequired"],
    isBoolean: true,
    errorMessage: "isTimeRequired should be a boolean",
  },
};

const metaDataValidator = checkSchema(metaDataValidationSchema);
const recipeIngredientValidator = checkSchema(ingredientValidator);
const recipeSectionValidator = checkSchema(sectionValidator);
const recipeInstructionValidator = checkSchema(instructionValidator);
const cookingParameterValidator = checkSchema(cookingParametersValidator);

module.exports = {
  metaDataValidator,
  recipeIngredientValidator,
  recipeSectionValidator,
  recipeInstructionValidator,
  cookingParameterValidator,
};
