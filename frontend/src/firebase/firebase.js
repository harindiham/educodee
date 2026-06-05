import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn5Am3E3eXGzwZbO2RQuJiw7CzDaeBWsg",
  authDomain: "educode-9fdf9.firebaseapp.com",
  projectId: "educode-9fdf9",
  storageBucket: "educode-9fdf9.firebasestorage.app",
  messagingSenderId: "478839085122",
  appId: "1:478839085122:web:477506f002d75dbc9675db",
  measurementId: "G-NFXLFHW5NC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



