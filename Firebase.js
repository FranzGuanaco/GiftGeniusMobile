import { initializeApp } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "Votre clé API",
  authDomain: "Votre domaine d'authentification",
  projectId: "Votre ID de projet",
  storageBucket: "Votre bucket de stockage",
  messagingSenderId: "Votre ID d'envoi de messages",
  appId: "Votre ID d'application",
  measurementId: "Votre ID de mesure"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

export { firestore, auth };
