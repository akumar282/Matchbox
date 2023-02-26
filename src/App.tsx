import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import ForgotPassword from './Pages/ForgotPasswordPage'
import DiscoverPage from './Pages/DiscoverPage'

import SettingsPage from './Pages/Settings'
import CreateProject from './Pages/CreateProject'
import UserPreferencesPage from './Pages/UserPreferencesPage'

function App () {
  
  return (
    //create a saved state that can be updated by the user
    <BrowserRouter>
      <Routes>
        <Route path='/create-project' element={<CreateProject />} />
        <Route path='/discover' element={<DiscoverPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/preferences' element={<UserPreferencesPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
