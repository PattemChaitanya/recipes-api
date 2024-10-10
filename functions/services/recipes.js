const {
  getDocs,
  collection,
  getDoc,
  doc,
  where,
  query,
  setDoc,
  deleteDoc,
} = require("firebase/firestore");
const { firestore: db } = require("../config/firebase-config");
const { logger } = require("firebase-functions");
const recipeScrapping = require("./recipeScrapping");

const log = logger;

const recipesCollections = "modified-recipes";

const getAllRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, recipesCollections));
    const recipesList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return {
      status: 200,
      message: {
        data: recipesList.filter((item) => item.description.length !== 0),
      },
    };
  } catch (e) {
    log.error("error in fetching data", e);
  }
};

const getRecipeDetailsById = async (params) => {
  try {
    const recipeId = params.recipeId;
    const docRef = doc(db, recipesCollections, recipeId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { status: 200, message: { ...docSnap.data(), id: docSnap.id } };
    } else {
      return { status: 200, message: "No such document!" };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: { error: "internal server error" },
    };
  }
};

const getRecipeDetailsByName = async (params) => {
  try {
    const recipeName = params.recipeName || params.recipeTitle;
    const recipeQuery = query(collection(db, recipesCollections));
    const querySnapshot = await getDocs(recipeQuery);
    const matchedRecipes = [];
    const unMatchedRecipes = [];
    querySnapshot.forEach((item) => {
      const recipe = item.data();
      if (
        recipe.title.toLowerCase().localeCompare(recipeName.toLowerCase()) === 0
      ) {
        matchedRecipes.push({ ...recipe, id: item.id });
      } else if (
        recipe.title.toLowerCase().localeCompare(recipeName.toLowerCase()) === 1
      ) {
        unMatchedRecipes.push({ ...recipe, id: item.id });
      }
    });
    return {
      status: 200,
      message: { data: [...matchedRecipes, ...unMatchedRecipes] },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: { error: "internal server error" },
    };
  }
};

const postRecipeDetails = async (params) => {
  try {
    const recipeObject = params;
    await setDoc(doc(db, recipesCollections, recipeObject.id), recipeObject);
    log.info("recipe created successfully", params.id);
    return {
      status: 200,
      message: { data: "recipe created successfully" },
    };
  } catch (e) {
    console.error(e, "invalid in post recipe format");
    log.error("error in uploading data");
  }
};

const patchRecipeDetails = async (params) => {
  try {
    const recipeObject = params;
    await setDoc(doc(db, recipesCollections, recipeObject.id), recipeObject);
    log.info("recipe created successfully", params.id);
    return {
      status: 200,
      message: { data: "Recipe was successfully updated" },
    };
  } catch (e) {
    console.error(e, "invalid in post recipe format");
    log.error("error in uploading data");
  }
};

const deleteSingleRecipe = async (params, userId) => {
  try {
    const recipe = query(
      collection(db, recipesCollections),
      where("id", "==", params.id)
    );
    if (!recipe.exists) {
      return {
        status: 404,
        message: {
          error: `recipe with id ${params.id} not found`,
        },
      };
    }
    if (userId === recipe.data().authorId) {
      await deleteDoc(doc(db, recipesCollections, params.id));
      log.info("recipe deleted successfully", params.id);
      return {
        status: 200,
        message: {
          data: `recipe with id ${params.id} deleted successfully`,
        },
      };
    }
    return {
      status: 403,
      message: {
        error: `recipe with id ${params.id} not deleted successfully`,
      },
    };
  } catch (e) {
    console.error(e, "invalid in delete recipe format");
    log.error("error in deleting data");
  }
};

const parseFromRecipeFromUrl = async (params, body) => {
  try {
    recipeScrapping({
      body: "https://www.yummly.com/",
    });
  } catch (e) {
    log.error("error in scrapping data from url", e);
  }
};

parseFromRecipeFromUrl();
module.exports = {
  getAllRecipes,
  getRecipeDetailsById,
  postRecipeDetails,
  patchRecipeDetails,
  deleteSingleRecipe,
  getRecipeDetailsByName,
};
