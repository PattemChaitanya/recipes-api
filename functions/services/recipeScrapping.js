const { firestore: db } = require("../config/firebase-config");
const { logger } = require("firebase-functions");
const cheerio = require("cheerio");
const axios = require("axios");

const recipeScrapping = (url) => {
  const { body } = url;
  axios
    .get(body)
    .then((response) => {
      // Load the HTML into cheerio
      const $ = cheerio.load(response.data);
      console.log($, "recipes");
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
};

module.exports = recipeScrapping;
