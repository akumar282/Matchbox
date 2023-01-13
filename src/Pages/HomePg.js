import React from "react";
import NavBar from '../components/NavBar'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import LogoImg from '../img/Logo.svg';
import InvertLogoImg from '../img/InvertLogo.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const primTheme = createTheme({
  palette: {
    primary: {
      main: '#312C51'
    },
    secondary: {
      main: "#FOC38E"
    }
  },
});

function HomePg(){
    
    return(
        <div>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ p: 5 }}
            >
                <img src={LogoImg} width={450} height={300} alt="passedImg"/>
                <h3> Ignite Innovation </h3>    
                <Button  size="large" style={{
                    borderRadius: 25,
                    backgroundColor: "#F4D35E",
                    fontSize: "18",
                    fontWeight: "bold"
                }} 
                
                component = {Link} to = "../create-profile"  
                color = 'primary'  
                variant="contained">Sign Up
                </Button>
            </Stack>
        </div>

    );
}

export default HomePg;