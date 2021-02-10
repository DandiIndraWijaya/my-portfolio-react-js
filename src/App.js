import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import color from "./styles/Colors";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="MyPortfolio">
      <ThemeProvider theme={color}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
