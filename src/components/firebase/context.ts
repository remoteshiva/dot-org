// Firebase integration
// Andrew Ash
// Inspired by https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#firebase-in-react-setup
import React from 'react';

interface InitialContextProps {
  dispatch: ({ type }: { type: string }) => void;
}

const FirebaseContext = React.createContext({} as InitialContextProps);

export default FirebaseContext;
