import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectPrefPg from './Pages/CreatePreferences'

// import SavedProjects from './Pages/SavedProjects'
// import { Tabs, Tab, AppBar } from '@material-ui/core'
import NotFound from './Pages/NotFound'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import ForgotPassword from './Pages/ForgotPasswordPage'
import DiscoverPage from './Pages/DiscoverPage'
import DetailedLandingPage from './Pages/DetailedLandingPage'
import SettingsPage from './Pages/SettingsPage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/settings' element={<Settings />} /> */}
        <Route path='/create-preferences' element={<SelectPrefPg/>} />
        <Route path='/discover' element={<DiscoverPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/*' element={<NotFound />} />
        <Route path='/landing' element={<DetailedLandingPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/settings' element={<SettingsPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
