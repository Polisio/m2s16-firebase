// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZcBeYrTJlDV-sMWe2mMmJpIR7aGtWKm0",
    authDomain: "registo-restaurante.firebaseapp.com",
    projectId: "registo-restaurante",
    storageBucket: "registo-restaurante.appspot.com",
    messagingSenderId: "455987406962",
    appId: "1:455987406962:web:70c60dfcb671f49b1c7aeb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();