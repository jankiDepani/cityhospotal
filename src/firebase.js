// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMJnbPA1lIAyokeeiaz0hT1Ot6rm2q8w",
  authDomain: "cityhospital1-a6bd3.firebaseapp.com",
  projectId: "cityhospital1-a6bd3",
  storageBucket: "cityhospital1-a6bd3.appspot.com",
  messagingSenderId: "538619629716",
  appId: "1:538619629716:web:3ed01d7e3ba4e203a56481",
  measurementId: "G-LNJ32N6QNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
