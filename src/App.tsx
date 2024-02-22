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
import SavedPosts from './pages/SavedPosts'
import NotFound from './pages/NotFound'
import SingleView from './pages/SingleView'
// import AuthWrapper from './components/AuthWrapper'

function App () {

  return (
    //create a saved state that can be updated by the user
    <BrowserRouter>
      <Routes>
        <Route path="/setup" element={
          // <AuthWrapper>
          <PreferencesPage />
          // </AuthWrapper>
        } />
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/create-project' element={<Create />} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/project/:id' element={<SingleView />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/saved' element={<SavedPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
