import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import PreferencesPage from './pages/PreferencesPage'

function App () {
  
  return (
    //create a saved state that can be updated by the user
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/setup' element={<PreferencesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
