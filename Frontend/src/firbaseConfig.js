import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-website-23003.firebaseapp.com",
  projectId: "blogging-website-23003",
  storageBucket: "blogging-website-23003.appspot.com",
  messagingSenderId: "315683293187",
  appId: "1:315683293187:web:e587041277b74fd9566636"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

