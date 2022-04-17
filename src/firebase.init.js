// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjaOODH9azDUcoBIqtl6P4qKeirLJyvuE",
  authDomain: "sheba-725ac.firebaseapp.com",
  projectId: "sheba-725ac",
  storageBucket: "sheba-725ac.appspot.com",
  messagingSenderId: "178812414508",
  appId: "1:178812414508:web:53e36c4d0964925792bf89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;