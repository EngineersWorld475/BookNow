// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'booknow-bb6ae.firebaseapp.com',
  projectId: 'booknow-bb6ae',
  storageBucket: 'booknow-bb6ae.appspot.com',
  messagingSenderId: '184783240193',
  appId: '1:184783240193:web:cbcf9d8e31579706c11400',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
