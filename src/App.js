import './App.css';


import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import CreateProfilePg from './Pages/CreateProfilePg';
import CreateProjectPg from './Pages/CreateProjectPg';
import DiscoverProjectPg from './Pages/DiscoverProjectPg';
import SavedProjects from './Pages/SavedProjects';
import LoginPg from './Pages/LoginPg';
import HomePg from './Pages/HomePg';
import SuccessPg from './Pages/SuccessPg';

import { Route } from "react-router-dom";

import NavBar from './components/NavBar';

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route element={<PageLayout> <Outlet /> </PageLayout>}> */}
      
      <Route path="/" element={<HomePg/>}/>
      <Route path="/login" element={<LoginPg/>}/>
      <Route path="/create-Profile" element={<CreateProfilePg/>}/>
      <Route path="/create-project" element={<CreateProjectPg/>}/>
      <Route path="/discover" element={<DiscoverProjectPg/>}/>
      {/* <Route path="/saved-project" element={<SavedProjects/>}/> */}
      <Route path="/success" element={<SuccessPg/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
