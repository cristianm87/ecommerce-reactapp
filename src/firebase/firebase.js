import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDx6kK-r4i1TkS-X7xgqFPxMldAhVhABJw",
  authDomain: "ecommerce-a8e44.firebaseapp.com",
  projectId: "ecommerce-a8e44",
  storageBucket: "ecommerce-a8e44.appspot.com",
  messagingSenderId: "763633539145",
  appId: "1:763633539145:web:2eccc45297e520a5928798"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();