
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDW4_bynlEOj8ul3Q9aRdZ57SE35ybtu6E",
  authDomain: "techzzi-app.firebaseapp.com",
  projectId: "techzzi-app",
  storageBucket: "techzzi-app.appspot.com",
  messagingSenderId: "552770416291",
  appId: "1:552770416291:web:3bad84b6d1bfb3749d9916"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);