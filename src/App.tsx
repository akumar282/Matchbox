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
const globalAuthState = {
  isAuthenticated: false,
  username: null,
  email: null,
  token: null,
  isLoggedin: false,
  // firstAccount: true,

}
  
const AuthContext = React.createContext(globalAuthState)
const DispacthContext = React.createContext(undefined)
const AuthProvider = ({ children }) => { 
  const [authState, dispatch] = React.useReducer( 
    (state, action) => ({...state, ...action}),
    globalAuthState
  );
  return (
    <AuthContext.Provider value={authState}>
      <DispacthContext.Provider value={dispatch}>
        {children}
      </DispacthContext.Provider>
    </AuthContext.Provider>
  );

  }
function App () {
  
  return (
    //create a saved state that can be updated by the user
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App
