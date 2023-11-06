import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TempHomePage from './Pages/TempHomePage'

function App () {
  
  return (
    //create a saved state that can be updated by the user
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TempHomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
