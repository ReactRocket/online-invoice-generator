import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIMT__MQwPBEnEPsnwpppNBCbuIj2Y56k",
  authDomain: "kiran-nagin-patil---bill-book.firebaseapp.com",
  projectId: "kiran-nagin-patil---bill-book",
  storageBucket: "kiran-nagin-patil---bill-book.appspot.com",
  messagingSenderId: "361509896668",
  appId: "1:361509896668:web:b99ef202d7eaca1f39cf19",
  measurementId: "G-6BK95WEN9Q"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth, signInWithGoogle ,db};