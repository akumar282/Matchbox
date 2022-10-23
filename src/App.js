import './App.css';

import React from "react";
import { BrowserRouter, Routes, Outlet } from "react-router-dom";
import CreateProfilePg from './Pages/CreateProfilePg';
import CreateProjectPg from './Pages/CreateProjectPg';
import DiscoverProjectPg from './Pages/DiscoverProjectPg';

import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, Switch, Link } from "react-router-dom";

import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route element={<PageLayout> <Outlet /> </PageLayout>}> */}
      <Route path="/" element={<CreateProfilePg/>}/>
      <Route path="/create-project" element={<CreateProjectPg/>}/>
      <Route path="/discover" element={<DiscoverProjectPg/>}/>
      <Route path="/a" element={<NavBar/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
