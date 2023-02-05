import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA18WbxO1V98CMW3CkxzPM9vh4WeLBwb6U",
  authDomain: "chat-app-b2351.firebaseapp.com",
  projectId: "chat-app-b2351",
  storageBucket: "chat-app-b2351.appspot.com",
  messagingSenderId: "566485741744",
  appId: "1:566485741744:web:e94499081810a8334c0b75",
  measurementId: "G-BNYQDC7YQZ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
