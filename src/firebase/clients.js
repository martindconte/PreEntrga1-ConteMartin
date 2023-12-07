import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBVKise0iHUlVp_PDipnivNDnrFbyqqkwo",
    authDomain: "e-commerce-coder-martin-conte.firebaseapp.com",
    projectId: "e-commerce-coder-martin-conte",
    storageBucket: "e-commerce-coder-martin-conte.appspot.com",
    messagingSenderId: "385924200962",
    appId: "1:385924200962:web:be57f5357a879b9f92051b"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);