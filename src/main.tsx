import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ScreenWidthProvider } from "./context/ScreenWidthContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScreenWidthProvider>
        <App />
      </ScreenWidthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
