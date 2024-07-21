import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ScreenWidthProvider } from "./context/ScreenWidthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScreenWidthProvider>
      <App />
    </ScreenWidthProvider>
  </React.StrictMode>,
);
