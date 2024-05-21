// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL7odv0S3UFURgnJ3zh7DJiK4S5dnGlto",
  authDomain: "restrurentmanagement.firebaseapp.com",
  projectId: "restrurentmanagement",
  storageBucket: "restrurentmanagement.appspot.com",
  messagingSenderId: "554317304106",
  appId: "1:554317304106:web:55e5f9f887c32a1e99ce53",
  measurementId: "G-K7N1S33ZD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);