import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CreateProfilePg from './Pages/CreateProfilePg';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route element={<PageLayout> <Outlet /> </PageLayout>}> */}
      <Route path="/" element={<CreateProfilePg/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
