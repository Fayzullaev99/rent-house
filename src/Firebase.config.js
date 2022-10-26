import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA2Xtdao20T-k4yVieN-EC6kzW3255lmOc",
  authDomain: "rent-and-shop.firebaseapp.com",
  projectId: "rent-and-shop",
  storageBucket: "rent-and-shop.appspot.com",
  messagingSenderId: "444580278978",
  appId: "1:444580278978:web:6009d5888530a0734ec15b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore