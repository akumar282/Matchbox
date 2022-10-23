import './App.css';


import React from "react";
import { BrowserRouter, Routes, Outlet } from "react-router-dom";
import CreateProfilePg from './Pages/CreateProfilePg';
import CreateProjectPg from './Pages/CreateProjectPg';
import DiscoverProjectPg from './Pages/DiscoverProjectPg';
import SavedProjects from './Pages/SavedProjects';

import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, Switch, Link } from "react-router-dom";

import NavBar from './components/NavBar';

import * as mutation from './backend/mutations'
import * as query from './backend/queries'
import * as tags from './backend/tags'

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { UserModel } from './models';
import { queries } from '@testing-library/dom';
Amplify.configure(awsconfig)

async function addPosts() {
  mutation.createPost("abhi", "Cool Project", "It's like really cool", 
                      "https://github.com/author/repo.git/", 
                      "image.com/image.png", ["C++", "Communication", "Desktop Development", "BAD TAG"])
}

function App() {

  addPosts()

  const tagsInput = [tags.tags[0], tags.tags[1], tags.tags[6], tags.tags[4]]
  mutation.createUser("abhi", tagsInput)
  
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route element={<PageLayout> <Outlet /> </PageLayout>}> */}
      <Route path="/create-profile" element={<CreateProfilePg/>}/>
      <Route path="/create-project" element={<CreateProjectPg/>}/>
      <Route path="/discover" element={<DiscoverProjectPg/>}/>
      <Route path="/saved-project" element={<SavedProjects/>}/>
      <Route path="/" element={<NavBar/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
