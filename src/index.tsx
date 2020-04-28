import React from 'react';
import { render } from 'react-dom';

import './assets/main.css';
import Index from './pages';
import Firebase, { FirebaseContext } from './components/firebase';

// Firebase note:
// - <FirebaseContext /> ensures Firebase is only instantiated once and that is is injected via React's Context API to React's component tree.
// - Every component that is interested in using Firebase has access to the Firebase instance with a FirebaseContext.Consumer component

render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Index />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
