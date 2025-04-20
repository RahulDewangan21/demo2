// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBtK2qcMXIZmFq_CDHOk0xtzUXF3vS1EA",
  authDomain: "react-firechat-58a89.firebaseapp.com",
  databaseURL: "https://react-firechat-58a89-default-rtdb.firebaseio.com",
  projectId: "react-firechat-58a89",
  storageBucket: "react-firechat-58a89.appspot.com",
  messagingSenderId: "677504731082",
  appId: "1:677504731082:web:c0491665ab0f6408243133",
  measurementId: "G-1DDGXKRTM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { database, auth, provider };
