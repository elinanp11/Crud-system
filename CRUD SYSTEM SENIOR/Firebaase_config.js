
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export {db, analytics, app};