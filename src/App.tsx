// import { useState } from 'react'

import './App.css'
import {useState} from "react";
import {Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navbar from './features/Navbar/Navbar.tsx';
import { useSectionContext} from "./Hooks/useSectionContext.tsx";

function App() {
  const [theme, setTheme] = useState('normal')

    // the line below 👇🏻is temp to stop error of unused blah blah blah
    setTheme('normal')


  return (
      <div className="app" data-theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
