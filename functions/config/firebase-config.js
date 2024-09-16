// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAvyiLMFV3dISTSFeYQqPmBIwC4AER4Cfg",
  authDomain: "portfolio-app-49a39.firebaseapp.com",
  projectId: "portfolio-app-49a39",
  storageBucket: "portfolio-app-49a39.appspot.com",
  messagingSenderId: "656589509515",
  appId: "1:656589509515:web:4ce4953488456e5b45558e",
  measurementId: "G-95J4QX920E",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

module.exports = { firestore };
