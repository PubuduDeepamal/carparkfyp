import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWfil-cgu_bPr3BkXW0wzJKDecF6VbaTI",
  authDomain: "smart-parking-system-acf8a.firebaseapp.com",
  databaseURL: "https://smart-parking-system-acf8a-default-rtdb.firebaseio.com",
  projectId: "smart-parking-system-acf8a",
  storageBucket: "smart-parking-system-acf8a.appspot.com",
  messagingSenderId: "1012120949318",
  appId: "1:1012120949318:web:08edd146ca80508aacf047",
  measurementId: "G-FFPDVV50TN"
};

const firbaseApp = initializeApp(firebaseConfig);

const db = getFirestore()
export default db
