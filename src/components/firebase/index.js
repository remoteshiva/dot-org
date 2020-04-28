// Firebase integration
// Andrew Ash
// Inspired by https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#firebase-in-react-setup
// The Firebase Context from the Firebase module (folder) is used to provide a Firebase instance to your entire application in the src/index.js file

import FirebaseContext from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext };
