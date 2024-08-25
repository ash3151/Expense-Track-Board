// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMj67doS9eMb64goTXrGT8Qpo-netA6hc",
  authDomain: "expense-tracker-e2f2c.firebaseapp.com",
  projectId: "expense-tracker-e2f2c",
  storageBucket: "expense-tracker-e2f2c.appspot.com",
  messagingSenderId: "412041690922",
  appId: "1:412041690922:web:9a861e22b7b726c9996853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);