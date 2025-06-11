import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ScaleDetail from "./ScaleDetail";
import ScalesOverview from "./ScalesOverview";
import ScaleCreator from "./ScaleCreator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route name="creator" path="/creator" element={<ScaleCreator />} />
        <Route name="fretboard" path="/fretboard" element={<ScaleDetail />} />
        <Route
          name="fretboard"
          path="/creator/fretboard"
          element={<ScaleDetail />}
        />
        <Route name="landing" path="/" element={<ScalesOverview />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
