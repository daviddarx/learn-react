import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./components/SearchParams.js";
import Details from "./components/Details.js";
import ThemeContext from "./components/ThemeContext.js";

const App = () => {
    const theme = useState("darkblue"); // this is a hook (array)

    return (
        // warp the full app in the context provider so that the full app can access to the context
        <ThemeContext.Provider value={theme}>
            <div>
                <Router>
                    <header>
                        <Link to="/">
                            <h1>Adopt me</h1>
                        </Link>
                    </header>
                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
