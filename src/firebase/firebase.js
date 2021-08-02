import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_API_DOMAIN}`,
  projectId: `${process.env.REACT_APP_API_ID}`,
  storageBucket: `${process.env.REACT_APP_API_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_API_SENDERID}`,
  appId: `${process.env.REACT_APP_API_APPID}`
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();