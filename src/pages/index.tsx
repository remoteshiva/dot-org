import React from 'react';
import firebase from 'firebase';
import amplitude from 'amplitude-js';
import Navigation from '../components/molecules/Navigation';
import { theme } from '../assets/theme';

export default function App() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  amplitude.getInstance().init(process.env.FIREBASE_AMPLITUDE_KEY);
  amplitude.getInstance().logEvent(`Site_Opened`);
  return <Navigation theme={theme} />;
}
