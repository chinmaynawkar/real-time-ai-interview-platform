// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDesZGqzJXd3eM1k6rQezMN7yjqo8i2e5w",
  authDomain: "ai-interview-prep-df019.firebaseapp.com",
  projectId: "ai-interview-prep-df019",
  storageBucket: "ai-interview-prep-df019.firebasestorage.app",
  messagingSenderId: "585850962045",
  appId: "1:585850962045:web:bde40340ad8d8d7b77b114",
  measurementId: "G-HH7MHRXNGS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);