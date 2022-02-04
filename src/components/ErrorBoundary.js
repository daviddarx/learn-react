import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        redirect: false
    };

    static getDerivedStateFromError() {
        // this on automatically trigger the componentDidCatch
        return { hasError: true };
    }

    redirectIfError() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    componentDidCatch(error, info) {
        // here we would log the error to Sentry, Azure Monitor, New Relic, TrackJS
        console.error("ErrorBoundary caught an error", error, info);

        this.redirectIfError(); // if componenet throw error by mounting
    }

    componentDidUpdate() {
        this.redirectIfError();
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"></Redirect>;
        } else if (this.state.hasError) {
            return (
                <div>
                    <h2>This listing has an error.</h2>
                    <p>
                        <Link to="/">Click here</Link> to go back on the
                        homepage or wait five seconds
                    </p>
                </div>
            );
        }

        return this.props.children; // default props for the children of a component
    }
}

export default ErrorBoundary;
