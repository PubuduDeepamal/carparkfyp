import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBANo6uLaoGsboc9ex5R2HAOh1xHP3r9RI",
  authDomain: "angelhaven-a68a5.firebaseapp.com",
  databaseURL: "https://angelhaven-a68a5-default-rtdb.firebaseio.com",
  projectId: "angelhaven-a68a5",
  storageBucket: "angelhaven-a68a5.appspot.com",
  messagingSenderId: "129958052805",
  appId: "1:129958052805:web:a225b7f40d21fedb30c1ac"
};

const firbaseApp = initializeApp(firebaseConfig);

// export default firbaseApp

// init firestore service
const db = getFirestore()
export default db
