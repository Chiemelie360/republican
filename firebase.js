// const firebaseConfig = {
//     apiKey: "AIzaSyB3KnwmIxCAITRwkAij7pMmXypdVkXMEvc",
//     authDomain: "republican-bf553.firebaseapp.com",
//     projectId: "republican-bf553",
//     storageBucket: "republican-bf553.appspot.com",
//     messagingSenderId: "254253357965",
//     appId: "1:254253357965:web:c0412337cde72d4aebfbc4"
//   };

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyB3KnwmIxCAITRwkAij7pMmXypdVkXMEvc",
        authDomain: "republican-bf553.firebaseapp.com",
        projectId: "republican-bf553",
        storageBucket: "republican-bf553.appspot.com",
        messagingSenderId: "254253357965",
        appId: "1:254253357965:web:c0412337cde72d4aebfbc4"
      
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };