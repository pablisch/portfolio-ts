import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar.tsx";
import { FocusTopicProvider } from "./context/FocusTopicContext.tsx";
import { useThemeContext } from "./hooks/useThemeContext.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  const { theme } = useThemeContext();

  return (
    <FocusTopicProvider>
      <div className="app" data-theme={theme}>
        <BrowserRouter>
          <Navbar />
          <div className="subnav">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </FocusTopicProvider>
  );
}

export default App;
