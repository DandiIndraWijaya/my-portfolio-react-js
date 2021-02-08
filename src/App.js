import React from "react";
import { ThemeProvider } from "@emotion/react";
import color from "./styles/Colors";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="MyPortfolio">
      <ThemeProvider theme={color}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
