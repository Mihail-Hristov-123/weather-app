import React from "react";
import { Link } from "react-router";
import { Routes } from "@/routes";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary component caught an error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="wrapper flex flex-col items-center">
          <h1 className="main-title">Something went wrong.</h1>
          <Link to={Routes.HOME} replace>
            Go to home page
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
