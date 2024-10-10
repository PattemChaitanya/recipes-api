const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recipe API",
      description: "API for managing recipes",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3099/api/v1",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: {
      bearerAuth: [],
    },
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/recipes": {
        get: {
          summary: "Get all recipes",
          description: "Retrieve all recipes for the authenticated user",
          tags: ["Recipes"],
          responses: {
            200: {
              description: "A list of recipes",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
      "/recipe": {
        get: {
          summary: "Get recipe by recipeName",
          description:
            "Retrieve details of a single recipe for the authenticated user",
          tags: ["Recipes"],
          parameters: [
            {
              in: "query",
              name: "recipeName",
              schema: {
                type: "string",
              },
              description: "recipe name",
              example: "Crunchy Raw Banana Cutlets",
            },
          ],
          responses: {
            200: {
              description: "recipe details",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        post: {
          summary: "Adding a recipe.",
          description: "Create a new recipe for the authenticated user",
          tags: ["Recipes"],
          security: [
            {
              bearerAuth: [],
            },
          ],
          required: true,
          requestBody: {
            description: "The recipe to be added",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    recipeCard: {
                      type: "object",
                      properties: {
                        authorId: {
                          type: "string",
                          example: "string",
                        },
                        authorName: {
                          type: "string",
                          example: "string",
                        },
                        authorThumbnailUrl: {
                          type: "string",
                          example: "string",
                        },
                        title: {
                          type: "string",
                          example: "string",
                        },
                        recipeDescription: {
                          type: "string",
                          example: "string",
                        },
                        servings: {
                          type: "integer",
                          example: 4,
                        },
                        difficultyLevel: {
                          type: "string",
                          example: "Easy",
                        },
                        isVerifiedByKlynk: {
                          type: "boolean",
                          example: true,
                        },
                        prepTimeInMins: {
                          type: "integer",
                          example: 30,
                        },
                        cookTimeInMins: {
                          type: "integer",
                          example: 60,
                        },
                        restTimeInMins: {
                          type: "integer",
                          example: 10,
                        },
                        totalTimeInMins: {
                          type: "integer",
                          example: 100,
                        },
                        productReleases: {
                          type: "object",
                          example: {},
                        },
                        courses: {
                          type: "object",
                          example: {},
                        },
                        tools: {
                          type: "object",
                          example: {},
                        },
                        diets: {
                          type: "object",
                          example: {},
                        },
                        cuisines: {
                          type: "object",
                          example: {},
                        },
                        tags: {
                          type: "object",
                          example: {},
                        },
                        allergies: {
                          type: "object",
                          example: {},
                        },
                        prepImage: {
                          type: "string",
                          example: "string",
                        },
                        notes: {
                          type: "string",
                          example: "string",
                        },
                        recipeUrl: {
                          type: "string",
                          example: "string",
                        },
                        recipeServeDescription: {
                          type: "string",
                          example: "string",
                        },
                        recipeIngredientsLength: {
                          type: "integer",
                          example: 10,
                        },
                        thumbnailUrl: {
                          type: "string",
                          example: "string",
                        },
                        sourceUrl: {
                          type: "string",
                          example: "string",
                        },
                        categories: {
                          type: "object",
                          example: {},
                        },
                        recipeIngredientNames: {
                          type: "object",
                          example: {},
                        },
                        smartFilters: {
                          type: "object",
                          example: {},
                        },
                        scheduledTime: {
                          type: "string",
                          example: "2024-07-03T10:00:00Z",
                        },
                        createdAt: {
                          type: "string",
                          example: "2024-07-03T10:00:00Z",
                        },
                        updatedAt: {
                          type: "string",
                          example: "2024-07-03T10:00:00Z",
                        },
                        isPublished: {
                          type: "boolean",
                          example: true,
                        },
                        isPublic: {
                          type: "boolean",
                          example: true,
                        },
                        isCreatedByKlynk: {
                          type: "boolean",
                          example: false,
                        },
                        id: {
                          type: "string",
                          example: "string",
                        },
                        recipeId: {
                          type: "string",
                          example: "string",
                        },
                        isRecipeStatus: {
                          type: "boolean",
                          example: true,
                        },
                        isRecipeProSelected: {
                          type: "boolean",
                          example: false,
                        },
                        isRikuSelected: {
                          type: "boolean",
                          example: false,
                        },
                        isSemiSelected: {
                          type: "boolean",
                          example: false,
                        },
                      },
                    },
                    recipeIngredients: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            example: "string",
                          },
                          ingredientId: {
                            type: "string",
                            example: "string",
                          },
                          isScaleIngredient: {
                            type: "boolean",
                            example: true,
                          },
                          name: {
                            type: "string",
                            example: "string",
                          },
                          quantity: {
                            type: "number",
                            example: 100,
                          },
                          quantityPerStep: {
                            type: "number",
                            example: 10,
                          },
                          ingredient: {
                            type: "string",
                            example: "string",
                          },
                          ingredientType: {
                            type: "string",
                            example: "string",
                          },
                          ingredientImage: {
                            type: "string",
                            example: "string",
                          },
                          prepStyle: {
                            type: "string",
                            example: "string",
                          },
                          units: {
                            type: "string",
                            example: "grams",
                          },
                          unitPerStep: {
                            type: "string",
                            example: "grams",
                          },
                          loopingUnit: {
                            type: "string",
                            example: "grams",
                          },
                          loopingQuantity: {
                            type: "number",
                            example: 10,
                          },
                          schedulingLimit: {
                            type: "number",
                            example: 5,
                          },
                          isOutput: {
                            type: "boolean",
                            example: false,
                          },
                          isRecipeGenerated: {
                            type: "boolean",
                            example: true,
                          },
                          isUserGenerated: {
                            type: "boolean",
                            example: false,
                          },
                          loadingPosition: {
                            type: "string",
                            example: "top",
                          },
                          podType: {
                            type: "string",
                            example: "type1",
                          },
                          podPosition: {
                            type: "object",
                            example: {},
                          },
                          categoryInContextOfRiku: {
                            type: "string",
                            example: "category1",
                          },
                          recipeId: {
                            type: "string",
                            example: "recipe1",
                          },
                          sectionId: {
                            type: "string",
                            example: "section1",
                          },
                          instructionId: {
                            type: "string",
                            example: "instruction1",
                          },
                        },
                      },
                    },
                    recipeSections: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            example: "string",
                          },
                          title: {
                            type: "string",
                            example: "Section Title",
                          },
                          sectionType: {
                            type: "string",
                            example: "Preparation",
                          },
                          sectionIndex: {
                            type: "number",
                            example: 1,
                          },
                          isLoopSection: {
                            type: "boolean",
                            example: false,
                          },
                          loopInstruction: {
                            type: "string",
                            example: "Stir continuously",
                          },
                          recipeId: {
                            type: "string",
                            example: "recipe123",
                          },
                          isProbeRequired: {
                            type: "boolean",
                            example: true,
                          },
                        },
                      },
                    },
                    recipeInstructions: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            example: "string",
                          },
                          mentionsTitle: {
                            type: "string",
                            example: "Mix ingredients",
                          },
                          recipeId: {
                            type: "string",
                            example: "recipe123",
                          },
                          sectionId: {
                            type: "string",
                            example: "section123",
                          },
                          tip: {
                            type: "string",
                            example: "Stir slowly to avoid splashing",
                          },
                          title: {
                            type: "string",
                            example: "Mixing",
                          },
                          tools: {
                            type: "object",
                            example: {},
                          },
                          instructionIndex: {
                            type: "number",
                            example: 1,
                          },
                          stepImageUrl: {
                            type: "string",
                            example: "http://example.com/image.jpg",
                          },
                        },
                      },
                    },
                    cookingParameters: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          example: "string",
                        },
                        sectionId: {
                          type: "string",
                          example: "section123",
                        },
                        instructionId: {
                          type: "string",
                          example: "instruction123",
                        },
                        recipeId: {
                          type: "string",
                          example: "recipe123",
                        },
                        stirring: {
                          type: "string",
                          example: "medium",
                        },
                        isLidOpen: {
                          type: "boolean",
                          example: true,
                        },
                        action: {
                          type: "string",
                          example: "stir",
                        },
                        actionId: {
                          type: "string",
                          example: "action123",
                        },
                        powerInLevel: {
                          type: "number",
                          example: 5,
                        },
                        centralTemperatureInC: {
                          type: "number",
                          example: 70,
                        },
                        externalTemperatureInC: {
                          type: "number",
                          example: 25,
                        },
                        weightInGrams: {
                          type: "number",
                          example: 100,
                        },
                        durationInMins: {
                          type: "number",
                          example: 15,
                        },
                        instructionIndex: {
                          type: "number",
                          example: 1,
                        },
                        manualHeatLevel: {
                          type: "string",
                          example: "medium",
                        },
                        presetId: {
                          type: "string",
                          example: "preset123",
                        },
                        presetName: {
                          type: "string",
                          example: "Slow Cook",
                        },
                        controlModeId: {
                          type: "string",
                          example: "control123",
                        },
                        controlModeFirmwareName: {
                          type: "string",
                          example: "Firmware v1.2",
                        },
                        controlModeFirmwareId: {
                          type: "string",
                          example: "firmware123",
                        },
                        semiScreenId: {
                          type: "number",
                          example: 1,
                        },
                        isCentralProbeTemperatureRequired: {
                          type: "boolean",
                          example: true,
                        },
                        isExternalProbeTemperatureRequired: {
                          type: "boolean",
                          example: false,
                        },
                        isPowerRequired: {
                          type: "boolean",
                          example: true,
                        },
                        isTimeRequired: {
                          type: "boolean",
                          example: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "recipe added successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
      "/recipe/{recipeId}": {
        get: {
          summary: "Get single recipe",
          description:
            "Retrieve details of a single recipe for the authenticated user",
          tags: ["Recipes"],
          parameters: [
            {
              in: "path",
              name: "recipeId",
              required: true,
              description: "The ID of the recipe to retrieve",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "recipe details",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        put: {
          summary: "Update a recipe",
          description: "Update an existing recipe for the authenticated user",
          tags: ["Recipes"],
          security: [
            {
              bearerAuth: [],
            },
          ],
          required: true,
          parameters: [
            {
              in: "path",
              name: "recipeId",
              required: true,
              description: "The ID of the recipe to retrieve",
              schema: {
                type: "string",
              },
            },
          ],
          requestBody: {
            description: "The recipe to be added",
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    recipeCard: {
                      type: "object",
                      properties: {
                        authorId: {
                          type: "string",
                          example: "string",
                        },
                        authorName: {
                          type: "string",
                          example: "string",
                        },
                        authorThumbnailUrl: {
                          type: "string",
                          example: "string",
                        },
                        title: {
                          type: "string",
                          example: "string",
                        },
                        recipeDescription: {
                          type: "string",
                          example: "string",
                        },
                        servings: {
                          type: "integer",
                          example: 4,
                        },
                        difficultyLevel: {
                          type: "string",
                          example: "Easy",
                        },
                        isVerifiedByKlynk: {
                          type: "boolean",
                          example: true,
                        },
                        prepTimeInMins: {
                          type: "integer",
                          example: 30,
                        },
                        cookTimeInMins: {
                          type: "integer",
                          example: 60,
                        },
                        restTimeInMins: {
                          type: "integer",
                          example: 10,
                        },
                        totalTimeInMins: {
                          type: "integer",
                          example: 100,
                        },
                        productReleases: {
                          type: "object",
                          example: {},
                        },
                        courses: {
                          type: "object",
                          example: {},
                        },
                        tools: {
                          type: "object",
                          example: {},
                        },
                        diets: {
                          type: "object",
                          example: {},
                        },
                        cuisines: {
                          type: "object",
                          example: {},
                        },
                        tags: {
                          type: "object",
                          example: {},
                        },
                        allergies: {
                          type: "object",
                          example: {},
                        },
                        prepImage: {
                          type: "string",
                          example: "string",
                        },
                        notes: {
                          type: "string",
                          example: "string",
                        },
                        recipeUrl: {
                          type: "string",
                          example: "string",
                        },
                        recipeServeDescription: {
                          type: "string",
                          example: "string",
                        },
                        recipeIngredientsLength: {
                          type: "integer",
                          example: 10,
                        },
                        thumbnailUrl: {
                          type: "string",
                          example: "string",
                        },
                        sourceUrl: {
                          type: "string",
                          example: "string",
                        },
                        categories: {
                          type: "object",
                          example: {},
                        },
                        recipeIngredientNames: {
                          type: "object",
                          example: {},
                        },
                        smartFilters: {
                          type: "object",
                          example: {},
                        },
                        scheduledTime: {
                          type: "string",
                          example: "2024-07-03T10:00:00Z",
                        },
                        createdAt: {
                          type: "string",
                          example: "2024-07-03T10:00:00Z",
                        },
                        updatedAt: {
                          type: "string",
                          example: "2024-07-03T10:00:00Z",
                        },
                        isPublished: {
                          type: "boolean",
                          example: true,
                        },
                        isPublic: {
                          type: "boolean",
                          example: true,
                        },
                        isCreatedByKlynk: {
                          type: "boolean",
                          example: false,
                        },
                        id: {
                          type: "string",
                          example: "string",
                        },
                        recipeId: {
                          type: "string",
                          example: "string",
                        },
                        isRecipeStatus: {
                          type: "boolean",
                          example: true,
                        },
                        isRecipeProSelected: {
                          type: "boolean",
                          example: false,
                        },
                        isRikuSelected: {
                          type: "boolean",
                          example: false,
                        },
                        isSemiSelected: {
                          type: "boolean",
                          example: false,
                        },
                      },
                    },
                    recipeIngredients: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            example: "string",
                          },
                          ingredientId: {
                            type: "string",
                            example: "string",
                          },
                          isScaleIngredient: {
                            type: "boolean",
                            example: true,
                          },
                          name: {
                            type: "string",
                            example: "string",
                          },
                          quantity: {
                            type: "number",
                            example: 100,
                          },
                          quantityPerStep: {
                            type: "number",
                            example: 10,
                          },
                          ingredient: {
                            type: "string",
                            example: "string",
                          },
                          ingredientType: {
                            type: "string",
                            example: "string",
                          },
                          ingredientImage: {
                            type: "string",
                            example: "string",
                          },
                          prepStyle: {
                            type: "string",
                            example: "string",
                          },
                          units: {
                            type: "string",
                            example: "grams",
                          },
                          unitPerStep: {
                            type: "string",
                            example: "grams",
                          },
                          loopingUnit: {
                            type: "string",
                            example: "grams",
                          },
                          loopingQuantity: {
                            type: "number",
                            example: 10,
                          },
                          schedulingLimit: {
                            type: "number",
                            example: 5,
                          },
                          isOutput: {
                            type: "boolean",
                            example: false,
                          },
                          isRecipeGenerated: {
                            type: "boolean",
                            example: true,
                          },
                          isUserGenerated: {
                            type: "boolean",
                            example: false,
                          },
                          loadingPosition: {
                            type: "string",
                            example: "top",
                          },
                          podType: {
                            type: "string",
                            example: "type1",
                          },
                          podPosition: {
                            type: "object",
                            example: {},
                          },
                          categoryInContextOfRiku: {
                            type: "string",
                            example: "category1",
                          },
                          recipeId: {
                            type: "string",
                            example: "recipe1",
                          },
                          sectionId: {
                            type: "string",
                            example: "section1",
                          },
                          instructionId: {
                            type: "string",
                            example: "instruction1",
                          },
                        },
                      },
                    },
                    recipeSections: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            example: "string",
                          },
                          title: {
                            type: "string",
                            example: "Section Title",
                          },
                          sectionType: {
                            type: "string",
                            example: "Preparation",
                          },
                          sectionIndex: {
                            type: "number",
                            example: 1,
                          },
                          isLoopSection: {
                            type: "boolean",
                            example: false,
                          },
                          loopInstruction: {
                            type: "string",
                            example: "Stir continuously",
                          },
                          recipeId: {
                            type: "string",
                            example: "recipe123",
                          },
                          isProbeRequired: {
                            type: "boolean",
                            example: true,
                          },
                        },
                      },
                    },
                    recipeInstructions: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            example: "string",
                          },
                          mentionsTitle: {
                            type: "string",
                            example: "Mix ingredients",
                          },
                          recipeId: {
                            type: "string",
                            example: "recipe123",
                          },
                          sectionId: {
                            type: "string",
                            example: "section123",
                          },
                          tip: {
                            type: "string",
                            example: "Stir slowly to avoid splashing",
                          },
                          title: {
                            type: "string",
                            example: "Mixing",
                          },
                          tools: {
                            type: "object",
                            example: {},
                          },
                          instructionIndex: {
                            type: "number",
                            example: 1,
                          },
                          stepImageUrl: {
                            type: "string",
                            example: "http://example.com/image.jpg",
                          },
                        },
                      },
                    },
                    cookingParameters: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          example: "string",
                        },
                        sectionId: {
                          type: "string",
                          example: "section123",
                        },
                        instructionId: {
                          type: "string",
                          example: "instruction123",
                        },
                        recipeId: {
                          type: "string",
                          example: "recipe123",
                        },
                        stirring: {
                          type: "string",
                          example: "medium",
                        },
                        isLidOpen: {
                          type: "boolean",
                          example: true,
                        },
                        action: {
                          type: "string",
                          example: "stir",
                        },
                        actionId: {
                          type: "string",
                          example: "action123",
                        },
                        powerInLevel: {
                          type: "number",
                          example: 5,
                        },
                        centralTemperatureInC: {
                          type: "number",
                          example: 70,
                        },
                        externalTemperatureInC: {
                          type: "number",
                          example: 25,
                        },
                        weightInGrams: {
                          type: "number",
                          example: 100,
                        },
                        durationInMins: {
                          type: "number",
                          example: 15,
                        },
                        instructionIndex: {
                          type: "number",
                          example: 1,
                        },
                        manualHeatLevel: {
                          type: "string",
                          example: "medium",
                        },
                        presetId: {
                          type: "string",
                          example: "preset123",
                        },
                        presetName: {
                          type: "string",
                          example: "Slow Cook",
                        },
                        controlModeId: {
                          type: "string",
                          example: "control123",
                        },
                        controlModeFirmwareName: {
                          type: "string",
                          example: "Firmware v1.2",
                        },
                        controlModeFirmwareId: {
                          type: "string",
                          example: "firmware123",
                        },
                        semiScreenId: {
                          type: "number",
                          example: 1,
                        },
                        isCentralProbeTemperatureRequired: {
                          type: "boolean",
                          example: true,
                        },
                        isExternalProbeTemperatureRequired: {
                          type: "boolean",
                          example: false,
                        },
                        isPowerRequired: {
                          type: "boolean",
                          example: true,
                        },
                        isTimeRequired: {
                          type: "boolean",
                          example: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "recipe updated successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        delete: {
          summary: "Delete a recipe",
          description: "Delete a recipe for the authenticated user",
          tags: ["Recipes"],
          security: [
            {
              bearerAuth: [],
            },
          ],
          required: true,
          parameters: [
            {
              in: "path",
              name: "recipeId",
              required: true,
              description: "The ID of the recipe to delete",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "recipe deleted successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js", "index.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
