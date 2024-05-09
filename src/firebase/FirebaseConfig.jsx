// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCgP4lc6Spk3nrd_nj8EkgKB3CWKjluEpY",
  authDomain: "basic-ecom-a6d53.firebaseapp.com",
  projectId: "basic-ecom-a6d53",
  storageBucket: "basic-ecom-a6d53.appspot.com",
  messagingSenderId: "746766944307",
  appId: "1:746766944307:web:3022ceddbaca2c63953b46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
