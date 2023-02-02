import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectPrefPg from './Pages/CreatePreferences'

// import SavedProjects from './Pages/SavedProjects'
// import { Tabs, Tab, AppBar } from '@material-ui/core'
import NotFound from './Pages/NotFound'
import Settings from './Pages/SettingsPage'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import ForgotPassword from './Pages/ForgotPasswordPage'
import DiscoverPage from './Pages/DiscoverPage'
import AboutPage from './Pages/AboutPage'
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
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/' element={<AboutPage />} />
        <Route path='/settings' element={<Settings />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
