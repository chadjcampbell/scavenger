// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcDaZtbPwZY4lnU0VvwH1qDdxypc9ML5k",
  authDomain: "scavenger-daf42.firebaseapp.com",
  projectId: "scavenger-daf42",
  storageBucket: "scavenger-daf42.appspot.com",
  messagingSenderId: "293245412897",
  appId: "1:293245412897:web:6e3f81ec6abab9e96a2560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
