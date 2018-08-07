import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div><h1>Oh no! Something went wrong. Please try again or come back later. Thank you.</h1>;</div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;