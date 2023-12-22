// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHok5-TGr29SRV8TQgb8-w2Ssf_qzxpYQ",
  authDomain: "gift-genius-c1f18.firebaseapp.com",
  projectId: "gift-genius-c1f18",
  storageBucket: "gift-genius-c1f18.appspot.com",
  messagingSenderId: "657434421820",
  appId: "1:657434421820:web:ad86aefe086b0aa5abf139",
  measurementId: "G-B7PZRJ52B4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
