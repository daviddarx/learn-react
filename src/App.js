import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchParams from "./components/SearchParams.js";
import Details from "./components/Details.js";

const App = () => {
    return (
        <div>
            <h1>Adopt me</h1>

            <Router>
                <Route path="/details/:id">
                    <Details />
                </Route>
                <Route path="/">
                    <SearchParams />
                </Route>
            </Router>
        </div>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
