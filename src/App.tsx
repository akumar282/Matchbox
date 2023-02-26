import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import ForgotPassword from './Pages/ForgotPasswordPage'
import DiscoverPage from './Pages/DiscoverPage'
import DetailedLandingPage from './Pages/DetailedLandingPage'
import SettingsPage from './Pages/Settings'
import CreateProject from './Pages/CreateProject'
import UserPreferencesPage from './Pages/UserPreferencesPage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-project' element={<CreateProject />} />
        <Route path='/discover' element={<DiscoverPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/*' element={<NotFound />} />
        <Route path='/landing' element={<DetailedLandingPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/preferences' element={<UserPreferencesPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
