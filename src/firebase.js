// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGG7-PaFb2fdLYNgGGWr0ugm9mV7ImF_w",
  authDomain: "bhagirath-crm.firebaseapp.com",
  projectId: "bhagirath-crm",
  storageBucket: "bhagirath-crm.firebasestorage.app",
  messagingSenderId: "1065842518513",
  appId: "1:1065842518513:web:b916df73001d22080dfc50",
  measurementId: "G-B2TWKP7NG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);