import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectPrefPg from './Pages/CreatePrefrences'

// import SavedProjects from './Pages/SavedProjects'
// import { Tabs, Tab, AppBar } from '@material-ui/core'
import NavBar from './components/NavBar'
import LandingPage from './Pages/LandingPage'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-prefrences' element={<SelectPrefPg />} />
        <Route path='/a' element={<NavBar />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
