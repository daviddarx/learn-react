import { createContext } from "react";

// create a context with a hook as parameter
// array because useState return an Array with a function for the second element
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
