// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5slSDJL1-JW4QGd2Op4m0a8wZKeXL0YI",
  authDomain: "web-nextjs01.firebaseapp.com",
  projectId: "web-nextjs01",
  storageBucket: "web-nextjs01.firebasestorage.app",
  messagingSenderId: "653927244593",
  appId: "1:653927244593:web:49ee30ebe94aae602f4610",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };