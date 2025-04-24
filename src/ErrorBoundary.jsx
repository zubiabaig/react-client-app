import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component { 
    state = {
        hasError: false,
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // send to TrackJS/ Sentry/LogRocket
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Something went wrong.</h2>
                    <p>There was an error with this page. <Link to="/">Click Here</Link>
                     to return to the home page</p>
                </div>
            );
        }
        return this.props.children; 
    }
}

export default ErrorBoundary