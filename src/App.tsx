import './App.css'
import React from 'react'
import {
  // ...
  type Dispatch,
} from 'react';
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
function setLocalStorage(key, value) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

export const AuthContext = React.createContext(globalAuthState)
export const DispatchContext = React.createContext((() => {}) as Dispatch<any>)
const AuthProvider = ({ children }) => { 
  const [state, dispatch] = React.useReducer( 
    (state, newValue) => ({...state, ...newValue}),
    globalAuthState
    
  );
  if (localStorage.getItem('authState') === null) {
    setLocalStorage('authState', globalAuthState);
  }

  React.useEffect(() => {
    const savedState = getLocalStorage('authState', globalAuthState);
    dispatch(savedState);
  }, []);
  React.useEffect(() => {
    setLocalStorage('authState', state);
    
  }, [state]);
  return (
    <AuthContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AuthContext.Provider>
  );

  
  }

function App () {
  
  return (
    //create a saved state that can be updated by the user
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/create-project' element={<CreateProject />} />
        <Route path='/discover' element={<DiscoverPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/preferences' element={<UserPreferencesPage/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
