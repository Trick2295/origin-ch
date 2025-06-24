// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    onSnapshot
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
const db = getFirestore(app);

// Taga Kuha ng mga elemento mula sa HTML
const studentForm = document.getElementById("student-form");
const id = document.getElementById("id");
const name = document.getElementById("name");
const program = document.getElementById("program");
const address = document.getElementById("address");
const cardsInfo = document.getElementById("student-cards-container");
const deleteBtn = document.getElementById("delete-btn");


studentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    addDoc(collection(db, "student"), {
        "id": id.value,
        "name": name.value,
        "program": program.value,
        "address": address.value 
    }).then(function(docRef) {
        alert("Success")
        studentForm.reset();
    }).catch(function(error) {
        alert("Halaaaa May Mali");
    });
});

onSnapshot(collection(db, "student"), function(e){
    cardsInfo.innerHTML = "";

    e.forEach( function(docRef) {
        const docId = docRef.id;

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <h3>${docRef.data().id}</h3>
            <p><strong>Name:</strong>${docRef.data().name}</p>
            <p><strong>Program:</strong> ${docRef.data().program}</p>
            <p><strong>Address:</strong> ${docRef.data().address}</p>
            <button id="delete-btn" data-id="${docId}.">X</button>
        `;

        cardsInfo.appendChild(cardElement);
    });
}, function(error){
    alert("Somethign Went Wrong")
});

deleteBtn.addEventListener("click", function(e) {
    console.log("Hello World");
});

