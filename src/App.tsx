// import { useState } from 'react'

import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar.tsx";
import ProjectsPage from "./pages/ProjectsPage";
import { SectionProvider } from "./context/SectionContext.tsx";

function App() {
  const [theme, setTheme] = useState("normal");

  // the lines below 👇🏻are temp to stop error of unused blah blah blah
  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <SectionProvider>
      <div className="app" data-theme={theme}>
        <BrowserRouter>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            {/*<Route path="/about" element={<About />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </BrowserRouter>
      </div>
    </SectionProvider>
  );
}

export default App;
