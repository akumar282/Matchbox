import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import PreferencesPage from './pages/PreferencesPage'
import HomePage from './pages/HomePage'
import Create from './pages/Create'
import DiscoverPage from './pages/DiscoverPage'
import Inbox from './pages/Inbox'
import UserProfile from './pages/UserProfile'
import Settings from './pages/Settings'

function App () {
  
  return (
    //create a saved state that can be updated by the user
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/setup' element={<PreferencesPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/create-project' element={<Create />} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
