import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
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
import LoadingScreen from './components/LoadingScreen'
import AuthWrapper from './components/AuthWrapper'
import Browse from './pages/Browse'
import ProjectJoined from './pages/ProjectJoined'

function App () {

  const ProtectedRoutes: React.FC = () => (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/load' element={<LoadingScreen />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/setup" element={<PreferencesPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/create-project' element={<Create />} />
          <Route path='/discover' element={<DiscoverPage />} />
          <Route path='/project/:id' element={<SingleView />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/saved' element={<SavedPosts />} />
          <Route path='/browse/:params' element={<Browse/>} />
          <Route path='/trending' element={<Browse/>} />
          <Route path='/view/profile/:id' element={<UserProfile />} />
          <Route path='/joined/project/:id' element={<ProjectJoined/>} />
          <Route path='/joined/project' element={<ProjectJoined/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
