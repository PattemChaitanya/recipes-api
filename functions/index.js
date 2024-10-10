const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { specs, swaggerUi } = require("./utils/swagger");
const { restrictedApi, unRestrictedApi } = require("./routes");
const isLoggedIn = require("./services/authenticator");
const app = express();
const port = process.env.PORT || 3099;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", unRestrictedApi);
app.use("/api/v1", isLoggedIn, restrictedApi);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

exports.recipeApi = functions.https.onRequest(app);
// https://us-central1-fourth-way-435809-a7.cloudfunctions.net/recipeApi/api/v1/recipe/0585a914-81aa-42e0-9160-e356c7ae9ba5
