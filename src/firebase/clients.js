// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBVKise0iHUlVp_PDipnivNDnrFbyqqkwo",
//   authDomain: "e-commerce-coder-martin-conte.firebaseapp.com",
//   projectId: "e-commerce-coder-martin-conte",
//   storageBucket: "e-commerce-coder-martin-conte.appspot.com",
//   messagingSenderId: "385924200962",
//   appId: "1:385924200962:web:be57f5357a879b9f92051b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import {initializeApp} from "firebase/app"
// import {getFirestore} from 'firebase/firestore'

// const firebaseConfig = {
    
//   };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

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