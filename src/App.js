import "./App.css";


import React from "react";

import { BrowserRouter, Routes, Outlet } from "react-router-dom";
import SelectPrefPg from "./Pages/CreatePrefrences";
import CreateProjectPg from "./Pages/CreateProjectPg";
import DiscoverProjectPg from "./Pages/DiscoverProjectPg";
//import SavedProjects from "./Pages/SavedProjects";

//import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, Switch, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./Pages/LandingPage";


function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        {/* <Route element={<PageLayout> <Outlet /> </PageLayout>}> */}
        <Route path="/create-prefrences" element={<SelectPrefPg />} />
        <Route path="/create-project" element={<CreateProjectPg />} />
        <Route path="/discover" element={<DiscoverProjectPg />} />
        <Route path="/a" element={<NavBar />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
