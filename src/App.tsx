import './App.css'
import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import PreferencesPage from './pages/PreferencesPage'
import HomePage from './pages/HomePage'
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
import EditPost from './pages/EditPost'
import CreatePost from './pages/CreatePost'
import JoinedPosts from './pages/JoinedPosts'
import awsconfig from './aws-exports'
import {Amplify} from 'aws-amplify'
import HelpPage from './pages/HelpPage'

function App () {

  useEffect(() => {
    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    )

    const [localRedirectSignIn, productionRedirectSignIn] = awsconfig.oauth.redirectSignIn.split(',')
    const [localRedirectSignOut, productionRedirectSignOut] = awsconfig.oauth.redirectSignOut.split(',')

    const updatedAwsConfig = {
      ...awsconfig,
      oauth: {
        ...awsconfig.oauth,
        redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
        redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
      }
    }

    Amplify.configure(updatedAwsConfig)
  }, [])

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
        <Route path='/help' element={<HelpPage />} />
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/load' element={<LoadingScreen />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/setup' element={<PreferencesPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/create-project' element={<CreatePost />} />
          <Route path='/discover' element={<DiscoverPage />} />
          <Route path='/project/:id' element={<SingleView />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/saved' element={<SavedPosts />} />
          <Route path='/joined' element={<JoinedPosts />} />
          <Route path='/browse/:params' element={<Browse/>} />
          <Route path='/trending' element={<Browse/>} />
          <Route path='/view/profile/:id' element={<UserProfile />} />
          <Route path='/joined/project/:id' element={<ProjectJoined/>} />
          <Route path='/project/owner/:id' element={<SingleView />}/>
          <Route path='/profile/edit/:id' element={<UserProfile />} />
          <Route path='/project/edit/:id' element={<EditPost />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
