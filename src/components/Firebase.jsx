// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-8Nfp3r3qjeLe7Rtt-0qEPUFDwAGu1yw",
    authDomain: "hacktifyhomematch.firebaseapp.com",
    projectId: "hacktifyhomematch",
    storageBucket: "hacktifyhomematch.appspot.com",
    messagingSenderId: "603634017476",
    appId: "1:603634017476:web:d1052c18f689b3499f1591",
    measurementId: "G-1JJ2REXW7W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;