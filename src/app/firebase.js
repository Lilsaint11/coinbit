// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0v9OrZTvqCpjgBieYds-31xzly02fHQ",
  authDomain: "coinbit-6c2ec.firebaseapp.com",
  projectId: "coinbit-6c2ec",
  storageBucket: "coinbit-6c2ec.appspot.com",
  messagingSenderId: "912726066295",
  appId: "1:912726066295:web:ea94c41c4f7bfc0490f272"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()