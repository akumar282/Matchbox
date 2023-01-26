import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectPrefPg from './Pages/CreatePreferences'

// import SavedProjects from './Pages/SavedProjects'
// import { Tabs, Tab, AppBar } from '@material-ui/core'
import NotFound from './Pages/NotFound'
import Settings from './Pages/Settings'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import ForgotPassword from './Pages/ForgotPasswordPage'
import DiscoverPage from './Pages/DiscoverPage'
import AboutPage from './Pages/AboutPage'
import SettingsPage from './Pages/SettingsPage'
import CreateProject from './Pages/CreateProject'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-project' element={<CreateProject />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/create-preferences' element={<SelectPrefPg/>} />
        <Route path='/discover' element={<DiscoverPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
