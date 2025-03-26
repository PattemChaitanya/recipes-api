const { firestore: db } = require("../config/firebase-config");
const { logger } = require("firebase-functions");
const cheerio = require("cheerio");
const axios = require("axios");

const checkingRobots = (url) => {
  const addingRobots = url + "robots.txt";
  try {
    axios
      .get(addingRobots)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e, "error in robots.txt");
  }
};

const recipeScrapping = (url) => {
  const { body } = url;
  const isSucceded = checkingRobots(body);
  if (isSucceded) {
    axios
      .get(body)
      .then((response) => {
        // Load the HTML into cheerio
        const $ = cheerio.load(response.data);
        const html = $('script[type="application/ld+json"]').html();
        const parsedHTML = JSON.parse(html)["@graph"];
        const filterRecipes = parsedHTML.filter(
          (item) => item["@type"] === "Recipe"
        );
        if (filterRecipes.length === 1) {
          console.log(typeof html, filterRecipes, "yes recipe");
        } else {
          console.log(
            filterRecipes.length,
            parsedHTML.map((item) => item["@type"], "no recipe")
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching the webpage:", error);
      });
  }
};

module.exports = recipeScrapping;
