// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3lomwmGNztFzAuYOwh-0OgmSxbdSElEU",
  authDomain: "my-app-8e9d7.firebaseapp.com",
  projectId: "my-app-8e9d7",
  storageBucket: "my-app-8e9d7.firebasestorage.app",
  messagingSenderId: "931210523429",
  appId: "1:931210523429:web:acc4d4487093e7a74e20cc"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export signInWithPopup and signInWithRedirect for flexible sign-in options
export { auth, provider, signInWithPopup, signInWithRedirect };
