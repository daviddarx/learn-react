import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // here we would log the error to Sentry, Azure Monitor, New Relic, TrackJS
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>This listing has an error.</h2>
                    <p>
                        <Link to="/">Click here</Link> to go back on the
                        homepage.
                    </p>
                </div>
            );
        }

        return this.props.children; // default props for the children of a component
    }
}

export default ErrorBoundary;
