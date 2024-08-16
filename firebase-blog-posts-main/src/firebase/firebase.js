// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoj2KSNcdQiea8j3VXYXScrmTzHpNSgaU",
  authDomain: "medium-app-a8491.firebaseapp.com",
  projectId: "medium-app-a8491",
  storageBucket: "medium-app-a8491.appspot.com",
  messagingSenderId: "149795606167",
  appId: "1:149795606167:web:4f2b5944073f39794be3d2",
  measurementId: "G-91ZVESM288"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
// export const storage = getStorage(app);
