import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDWfil-cgu_bPr3BkXW0wzJKDecF6VbaTI",
  // authDomain: "smart-parking-system-acf8a.firebaseapp.com",
  // databaseURL: "https://smart-parking-system-acf8a-default-rtdb.firebaseio.com",
  // projectId: "smart-parking-system-acf8a",
  // storageBucket: "smart-parking-system-acf8a.appspot.com",
  // messagingSenderId: "1012120949318",
  // appId: "1:1012120949318:web:08edd146ca80508aacf047",
  // measurementId: "G-FFPDVV50TN"

  apiKey: "AIzaSyBtzL-Aifu2LdRmQPWNPxejKkjGCn9hpm4",
  authDomain: "iot--smart-parking-system.firebaseapp.com",
  databaseURL: "https://iot--smart-parking-system-default-rtdb.firebaseio.com/",
  projectId: "iot--smart-parking-system",
  storageBucket: "iot--smart-parking-system.appspot.com",
  messagingSenderId: "624404537701",
  appId: "1:624404537701:web:6a391c702a8f3f8bcec18c",
  measurementId: "G-PG0QTJK728"
};

const firbaseApp = initializeApp(firebaseConfig);

// export default firbaseApp

// init firestore service
const db = getFirestore()
export default db
