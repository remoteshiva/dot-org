import React, { Component } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('😬', error, errorInfo);
  }

  render() {
    const {
      state: { hasError },
      props: { children },
    } = this;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}
