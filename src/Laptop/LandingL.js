import React from 'react'
import Herosection from './Lcomponents/Herosection'
import DashBoard from './Pages/DashBoard'
import Main from './Pages/Main'
import Worker from './Pages/Worker'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const LandingL = () => {
  return (
    <div>
        <Herosection />
        <Router>
        <Routes>
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path='/Worker' element={<Worker />} />
       <Route path="/" element={<Main />} />
       </Routes>
       </Router>

    </div>
  )
}

export default LandingL
