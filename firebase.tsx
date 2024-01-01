// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4I1N9Bl8hE0IAIrxqqxxObBhId_zuKU8",
  authDomain: "portfolio-website-4d0db.firebaseapp.com",
  databaseURL: "https://portfolio-website-4d0db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-website-4d0db",
  storageBucket: "portfolio-website-4d0db.appspot.com",
  messagingSenderId: "122271264806",
  appId: "1:122271264806:web:8fc4ae978691d54134f6e7",
  measurementId: "G-5ZM3F75BCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)