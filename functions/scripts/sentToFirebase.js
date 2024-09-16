const { setDoc, doc } = require("firebase/firestore");
const { firestore } = require("../config/firebase-config");
const recipes = require("../scripts/recipes.json");

const sendToFirebase = (to, id, object) => {
  let docID = id;
  setDoc(doc(firestore, to, id), object);
  return docID;
};

// const sendingRecipes = async () => {
//   for (let item in recipes) {
//     await sendToFirebase("recipes", item, recipes[item]);
//   }
// };

// sendingRecipes();
module.exports = { sendToFirebase };
