const recipes = require("./recipes-id.json");
const fs = require("node:fs");
const { sendToFirebase } = require("./sentToFirebase");

let recipesImages = {};

const newRecipes = {
  "389c3b6f-2782-40ea-82f9-e8a051d33c39": "Tawa Chicken",
  "bcc965cd-2dea-486c-8a9f-30828b544d7e": "Caramel popcorn",
  "fe34ae23-4790-4830-b98f-a614658cd544": "Chilli Chaap",
  "4b8a78fc-d0fe-4674-957e-2f9741f125fe": "Banana Walnut Cake",
  "14ef7a67-546c-4f72-aba9-12d9fdbda142": "Aloo Palak Fry",
  "67bccd55-c42a-413f-8647-50e07a2484d7": "Sweet Gingered Chicken Wings",
  "d66a24b7-0aa5-4c91-9e03-9b72ca323f1c": "Grilled Paneer Tikka",
  "45715b0c-2717-417e-8c13-138318249991": "Fried Brown Rice",
  "3da25add-9f94-421b-8203-032d8fb35b06": "Dal Tadka",
  "1b80f9a7-a6f1-41de-8b12-436951fa8f43": "Radish Cake",
  "ac0def93-a1f9-43d9-bc51-b1ff56618a2f": "Badaam Milk",
  "859a7eae-0784-4160-9fc8-424fa219709e": "Golgappe",
  "8f318da9-74bb-4ce7-be72-fe7118a6ddd0": "Matar Paneer",
  "87040bdd-9449-4fb0-8067-ef116277a2bd": "Cheese Pakora",
  "1f1f7d2e-12b1-45b5-8789-2cfdb2d889e6": "Chole Bhature",
  "4e59a5d4-6061-48b0-8595-766052bdfb23": "Mango and Mint Kheer",
  "d4473528-d9bc-4f33-9dc8-9bf1c933093d": "Roast Lamb Salad",
  "35e5790a-5e38-4056-9573-d3cea5b9807b": "Chocolate Peda",
  "c7d227fe-9a35-49ac-b9bd-77d7c7b3e464": "Tandoori Chicken",
  "0c498f32-1795-4471-9486-2f6e914ba917": "Rava Upma",
  "45d1178b-75c6-4d16-b807-ce507da1d2ac": "Egg Manchurian",
  "143c9415-1c71-4e12-af27-701ca298c830": "Carrot Halwa",
  "259541d9-3aeb-4792-aaf0-f40a4383acb8": "Tomato Onion Gravy",
  "44d9afc1-f39e-4b41-a394-5f257418b8db": "Chicken and Egg Rice Bowl",
  "3856066b-677f-416d-9088-6ad08b8aef13": "Plum Cake",
  "f147c9ed-dfbd-4937-91a3-d0285e33d7cb": "Lemon Chicken",
  "aa13d334-144b-475c-ab0f-b9d764eaad5d": "Kulcha",
  "79f3c65c-3b7d-47d7-be86-02858697ef2c": "Sesame Chicken Bites",
  "a9165fd6-22c2-4318-8b0c-e0564ec69963": "Andhra Paneer",
  "c6c08551-35e2-475b-9a9b-74bae2feedb5": "Mango Lassi Ice Cream",
};

const checkingRecipes = () => {
  Object.keys(recipes)
    .slice(1)
    .forEach((item) => {
      // recipesImages[item] = { ...recipes[item], title: newRecipes[item] };
      sendToFirebase("modified-recipes", item, recipes[item]);
    });

  // try {
  //   fs.writeFile(
  //     "scripts/recipes-id.json",
  //     JSON.stringify(recipesImages),
  //     function (err) {
  //       if (err) {
  //         return console.log(err);
  //       }
  //     }
  //   );
  // } catch (e) {
  //   console.log("error in file creation", e);
  // }
};

checkingRecipes();
