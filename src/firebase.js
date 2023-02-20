import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLS-sIfo_Jfjn1iSbHLZ_r8uHky0Jhxr4",
  authDomain: "contact-page-3df3f.firebaseapp.com",
  projectId: "contact-page-3df3f",
  storageBucket: "contact-page-3df3f.appspot.com",
  messagingSenderId: "931311077978",
  appId: "1:931311077978:web:3f7e580c49c5e8cd10e663",
  measurementId: "G-QHB8LP56R7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);