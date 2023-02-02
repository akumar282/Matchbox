import * as React from 'react'
import './CSS/LandingPage.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import illustration from '../img/landing-img.svg' // matchstick illustration 
import { createTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import LandingPopupLogin from '../components/LandingPopupLogin';
import LandingPopupCreate from '../components/LandingPopupCreate';
const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } })

import Aos from 'aos';
import 'aos/dist/aos.css';

import { about } from './AboutPageData'
import { TextField } from '@mui/material'

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    status: {
      anger: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status?: {
      anger?: React.CSSProperties['color']
    }
  }
}

function submitEmail(){
  console.log("nice");
}

export default function LandingPage() {


  Aos.init({
    duration: 2500,
    delay: 400,
  });

  const { title, subtext } = about;

  return (
    <div >
    <div className='top-container'>

      <div className='navHome'>
        {/* logo */}
        <div className='logobox'>
          <span className='logo'>Matchbox</span>
          {/* about us link */}
        </div>

        <Stack className='LandingStack' direction='row'>
{/* 
          <Button
            sx={{
              color: '#000000',
              fontSize: 'max(20px, 10px);',
            }}
          >
            {' '}
            About Us
          </Button> */}

          {/* sign up link */}
          
          <Button
            // component={Link}
            // to='/home'
            sx={{
              color: '#000000',
              fontSize: 'max(20px, 10px);',
            }}
            
          >
            {' '}
            <Link to="#about" />
            About Us
          </Button>
        </Stack>
      </div>
      <div className='BoxStack'>
        <Stack
          className='textStack'
          direction='column'
          sx={{
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* landing title & description */}
          <p 
            className='leadingtext'          
            data-aos='fade-down'
            data-aos-delay='600'
          > 
            Bridge between ideas and execution 
          </p>

          <p 
          className='subtext'           
          data-aos='fade-down'
          data-aos-delay='800'
          >
            Matchbox is a project collaboration platform that curates
            countless open source projects in seconds.
          </p>
        </Stack>
        {/* matchstick illustration */}
        <img className='firestick' src={illustration}         
            data-aos='fade-right'
            data-aos-delay='900'></img>
      </div>
      {/* stack together */}

     
      
      </div>
     
      <div className='about'>
        
        <div className="about-container">

        <div className='signupStack' 
                // data-aos='fade-down'
                // data-aos-delay='600'
                >
          <p className='signText'>
          Sign up to get free access to preview upon release.
      
      </p>
      <div className='signupEntry'>
      <TextField variant="filled" color="#FFFFFF" sx={{ backgroundColor: '#FFFFFF', height : '6vh', width:'30em'}}/>
      
      <Button onClick={() => submitEmail()}
        sx={{
          backgroundColor: '#F68084',
        //   marginLeft: '5%',
          // mt: '1%',
          width: '15%',
          height : '6.5vh',
          fontSize: 'max(14px, 5px);',
          '&:hover': {
            backgroundColor: '#f59da0',
          },
          mx: '10px',
        }}
        variant='contained'

      > 
        Sign Up
      </Button>
      </div>
      </div>
      


        
              
              {/* <div className="about-text-container">
              <a href="#about"> </a>
              
            <p className='about-lead-text' 
            data-aos='fade-up'
            data-aos-delay='100'>About us</p>
              <p className='about-sub-text'
                      data-aos='fade-up'
                      data-aos-delay='200'>
                        {subtext} 

                        Matchbox is a platform connecting developers to open source projects and connecting project owners and organizations to qualified developers. 
                        Our mission is to empower developers and project owners by streamlining the process of finding and collaborating on open source projects. 
                        </p>
            </div> */}
 
             
            </div>
           
        </div>
        

       
    </div>
  );
}
