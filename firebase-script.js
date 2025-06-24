// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
    getFirestore,
    collection,
    do
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS6ywJB1su0wLCD4D17pA3L0JLC3QTA8c",
    authDomain: "example-ch-project.firebaseapp.com",
    projectId: "example-ch-project",
    storageBucket: "example-ch-project.firebasestorage.app",
    messagingSenderId: "111932431713",
    appId: "1:111932431713:web:4bf4df54a15aba069e7920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);