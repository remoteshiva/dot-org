import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Navigation from '../components/molecules/Navigation';
import { theme } from '../assets/theme';

export default function App() {
  return (
    <ErrorBoundary>
      <Navigation theme={theme} />
    </ErrorBoundary>
  );
}
