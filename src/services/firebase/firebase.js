import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeTYzD4qgsSaS62BwMS14EmP6pg4EPLp4",
  authDomain: "argentina360-b2b02.firebaseapp.com",
  projectId: "argentina360-b2b02",
  storageBucket: "argentina360-b2b02.appspot.com",
  messagingSenderId: "221605920175",
  appId: "1:221605920175:web:51603a39a5a938f18e435a",
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
