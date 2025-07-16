// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoBaMvAenO3PMR5EUfaWUIsFi_AYqAjwQ",
    authDomain: "my-proyects-b614c.firebaseapp.com",
    projectId: "my-proyects-b614c",
    storageBucket: "my-proyects-b614c.firebasestorage.app",
    messagingSenderId: "646388078931",
    appId: "1:646388078931:web:5aca4f1566effa92fee9a6",
    measurementId: "G-ZBWJ2TQ588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a new product
export async function addProduct(productData) {
    try {
        const docRef = await addDoc(collection(db, "products"), {
            name: productData.name,
            price: productData.price,
            originalPrice: productData.originalPrice,
            description: productData.description,
            imageUrl: productData.imageUrl,
            timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}
