// Firebase integration
// Andrew Ash
// Inspiration
// https://github.com/briandesousa/firebase-with-react-hooks/blob/logrocket-blog/src/services/firestore.js
// Data-layer: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#firebase-in-react-setup
// Controller-layer: https://github.com/briandesousa/firebase-with-react-hooks/blob/logrocket-blog/src/App.js

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};

export const createEarlyAdopter = (email, fullName, isRabbiOrLeader) => {
  return db.collection('earlyadopters').doc(email).set({
    fullName,
    isRabbiOrLeader,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
