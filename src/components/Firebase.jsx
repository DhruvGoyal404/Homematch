// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3h4xLuSWVYj9uNEFQ3a7IVBFweh_jGUw",
    authDomain: "mlsc-bc6ee.firebaseapp.com",
    projectId: "mlsc-bc6ee",
    storageBucket: "mlsc-bc6ee.appspot.com",
    messagingSenderId: "855425847910",
    appId: "1:855425847910:web:c71a8947691a0da35953a7",
    measurementId: "G-17J0K5D7YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;