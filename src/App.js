import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams.js";

const App = () => {
    return (
        <div>
            <h1>Adopt me</h1>
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
