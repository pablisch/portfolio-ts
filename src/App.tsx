// import { useState } from 'react'

import './App.css'
import {useState} from "react";
import {Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navbar from './features/Navbar';

function App() {
  const [theme, setTheme] = useState('normal')

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
