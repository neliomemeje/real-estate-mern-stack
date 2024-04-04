// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-20189.firebaseapp.com",
  projectId: "mern-estate-20189",
  storageBucket: "mern-estate-20189.appspot.com",
  messagingSenderId: "270098479235",
  appId: "1:270098479235:web:9a8e1214726fbbe96d43b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);