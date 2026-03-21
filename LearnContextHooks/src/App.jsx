import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./Componets/ChildA";

// ✅ create context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="container"
        style={{
          backgroundColor: theme === "light" ? "pink" : "black",
          height: "100vh",
        }}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };