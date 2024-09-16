const { error } = require("firebase-functions/logger");
const { admin } = require("../config/firebase-config");

const isLoggedIn = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).send({ error: "please provide access token" });
    }
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).send({ error: "Unauthorized" });
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    // console.log(decodedToken, "decodedToken");
    req.user = decodedToken;
    // console.log(req.user);
    next();
  } catch (error) {
    console.error("Error verifying token:", error);

    if (error.errorInfo.code === "auth/id-token-expired") {
      return res.status(401).send({ error: "Access token expired" });
    } else if (error.errorInfo.code === "auth/argument-error") {
      return res.status(401).send({ error: "Token tampering detected" });
    } else if (error.errorInfo.code === "auth/id-token-revoked") {
      return res.status(401).send({ error: "Access token is revoked" });
    } else {
      return res.status(401).send({ error: "Unauthorized" });
    }
  }
};

module.exports = isLoggedIn;
