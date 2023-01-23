import { Typography } from "@mui/material";
import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import "./NavBar.css"

export default function Navbar() {
    return (
        <nav className="nav"> 
        <h1 className="SiteTitle"> MatchBox </h1>
        <ul>
            {/* <img src={LogoImg} width={130} height={50} alt="passedImg"/>
                <CustomLink to= "/game"> Game </CustomLink>*/}
                
                <CustomLink className ="navElement" to= "/home"> <HomeIcon fontSize="large"/> Home </CustomLink>
                <CustomLink className ="navElement" to= "/discover"> <SearchIcon fontSize="large"/> Discover </CustomLink>
                <CustomLink className ="navElement" to= "/settings"> <SettingsIcon fontSize="large"/> Settings </CustomLink> 
        </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath =useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className ={isActive? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    );
}