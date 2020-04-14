import Firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
require("dotenv").config();

console.log(process.env);
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

console.log("Firebase Config", config);
Firebase.initializeApp(config);

// Database references
const databaseRef = Firebase.database().ref();

export const blogRef = databaseRef.child("blog");
export const compsRef = databaseRef.child("comps");
export const quotesRef = databaseRef.child("quotes");
export const recordsRef = databaseRef.child("records");
export const seasonssRef = databaseRef.child("seasons");

// Storage references
const storageRef = Firebase.storage().ref();

export const headshotsRef = storageRef.child("headshots");
