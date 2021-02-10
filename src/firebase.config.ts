import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  appId: process.env.FIREBASE_APP_APP_ID,
  measurementId: process.env.FIREBASE_APP_MEASUREMENT_ID,
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
  projectId: process.env.FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.analytics();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
