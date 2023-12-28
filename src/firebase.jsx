// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMARoHcixogqhXf7CaYmHxhwieTF68HI0",
  authDomain: "chai-or-code.firebaseapp.com",
  projectId: "chai-or-code",
  storageBucket: "chai-or-code.appspot.com",
  messagingSenderId: "772105210305",
  appId: "1:772105210305:web:e46d1151d6a1b85564c740",
  measurementId: "G-DGE0E30J53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider()
export default firebaseConfig
export const auth = getAuth(app)