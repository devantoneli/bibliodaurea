// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOgbmvlWtDa1iP31wztYciJcW3dTpRE4g",
  authDomain: "bibliodaurea-8bbf8.firebaseapp.com",
  databaseURL: "https://bibliodaurea-8bbf8-default-rtdb.firebaseio.com",
  projectId: "bibliodaurea-8bbf8",
  storageBucket: "bibliodaurea-8bbf8.appspot.com",
  messagingSenderId: "85271706119",
  appId: "1:85271706119:web:1dda3461828eb1a6ae48a2",
  measurementId: "G-D8QQV06F0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;