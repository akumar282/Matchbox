import './App.css';


import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import CreateProfilePg from './Pages/CreateProfilePg';
import CreateProjectPg from './Pages/CreateProjectPg';
import DiscoverProjectPg from './Pages/DiscoverProjectPg';
import SavedProjects from './Pages/SavedProjects';

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
      <Route path="/" element={<CreateProfilePg/>}/>
      <Route path="/create-project" element={<CreateProjectPg/>}/>
      <Route path="/discover" element={<DiscoverProjectPg/>}/>
      <Route path="/saved-project" element={<SavedProjects/>}/>
      <Route path="/a" element={<NavBar/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
