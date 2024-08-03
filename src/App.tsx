import "./App.css";
// import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar.tsx";
import ProjectsPage from "./pages/ProjectsPage";
import { SectionProvider } from "./context/SectionContext.tsx";
import { useThemeContext } from "./hooks/useThemeContext.tsx";
import AboutPage from "./pages/AboutPage.tsx";

function App() {
  const { theme } = useThemeContext();

  return (
    <SectionProvider>
      <div className="app" data-theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about-me" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </SectionProvider>
  );
}

export default App;
