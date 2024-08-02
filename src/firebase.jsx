// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04AUcCAYA06C72851244EFK4Xfvg2GYg",
  authDomain: "fir-auth-6b08e.firebaseapp.com",
  projectId: "fir-auth-6b08e",
  storageBucket: "fir-auth-6b08e.appspot.com",
  messagingSenderId: "215799870797",
  appId: "1:215799870797:web:f9f1275ca5a45d944bb304",
  measurementId: "G-MGEWLXWVDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};