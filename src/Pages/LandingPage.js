import { React, useState, useSyncExternalStore } from 'react';
import './LandingPage.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import illustration from './../img/landing-img.svg'; // matchstick illustration

export default function LandingPage(){
    return(
        <div>
            <head>
                <title>landing</title>
            </head>

            <Stack spacing={20} direction="row">
                {/* logo */}
                <span className='logo'>Matchbox</span>               
                {/* about us link */}
                <Button variant="text"> About Us</Button>
                {/* sign up link */}
                <Button variant="text"> Get Started</Button>
                {/* login button */}
                <Button variant="contained"> Login</Button>
            </Stack>
            <Stack spacing={2} direction="row" > 
                <Stack spacing={2} direction="column" sx={{ justifyContent: 'center' }}>
                    {/* landing title & description */}
                    <p className='subtext'> Welcome to Matchbox </p>
                    <p className='leadingtext'> Discover a project you'll love.</p>
                    <p className='subtext'> Get instantly matched with open source projects with a straight-forward process </p>
                    {/* <Button variant="contained"> Get Started</Button> */}
                </Stack>

                <img src={illustration}></img>

            </Stack>
            <Button variant="contained"> Get Started</Button>
            
           
            

            
            
        </div>
    );

}