import * as React from 'react'
import './CSS/LandingPage.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import illustration from '../img/landing-img.svg' // matchstick illustration 
import { createTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import LandingPopupLogin from '../components/LandingPopupLogin';
import LandingPopupConfirm from '../components/LandingPopupConfirm';
const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } })

// animation iabouts
import Aos from 'aos';
import 'aos/dist/aos.css';


import { about } from './LandingPageData' // data import 
import { TextField } from '@mui/material'


import awsconfig from '../aws-exports'
import {Amplify} from 'aws-amplify'
// import { CreateNewsletterEmailModelPayload } from "../backend/mutations/newsletterMutations";
import { CreateNewsletterEmailModelInput  } from "../API";
import { CreateNewsletterEmailModelPayload } from "../backend/types";
import { createNewsletterEmail } from "../../src/backend/mutations/newsletterMutations"




Amplify.configure(awsconfig)
const payload: CreateNewsletterEmailModelPayload = {
  input: {
    email: ''
  }
}

// TODO [] payload format? 
// const finalload: CreatePayload = {
//   input: frontload
// }

export default function LandingPage() {
  // email signup textfield handling
  const [userEmail, setUserEmail] = React.useState("");
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  }

  // email signup button handling
  function submitEmail(){
    console.log(userEmail);
    sendToDatabase();
    setUserEmail("");
    console.log(userEmail);
    console.log(userEmail);
    setIsConfirmOpen(true); // trigger confirmation popup
  }
  
  // email signup database mutation
  async function sendToDatabase() {
    payload.input.email = userEmail;
    const request = await createNewsletterEmail(payload);
  }

  
  // login popup handling
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  function NoAccount() {
    setIsLoginOpen(false);
    setIsConfirmOpen(false);
  }

  // page animations
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  // remake object for about section, TODO to improve code quality in the future
  const { title, subtext } = about;

  return (
    <div >
      <LandingPopupLogin trigger={isLoginOpen} setTrigger={setIsLoginOpen} setCreateOpen = {NoAccount}/>
      <LandingPopupConfirm trigger={isConfirmOpen} setTrigger={setIsConfirmOpen}/>
      <div className='top-container'>
        <div className='header-stack'>
          <div className='logobox'>
            <span className='logo'>Matchbox</span>
          </div>
          <Stack className='nav-stack' direction='row'>
            {/* TODO link scoll animation here later */}
            {/* <Button
              sx={{
                color: '#000000',
                fontSize: 'max(20px, 10px);',
              }}
            >
              {' '}            
              <Link to="#about" /> 
              About Us
            </Button> */}
            {/* login button */}
            <Button
              sx={{
                color: '#000000',
                fontSize: 'max(20px, 10px);',
              }}
              onClick={() => setIsLoginOpen(true)}
            >
              {' '}
              Login
            </Button>
          </Stack>
        </div>
        <div className='landing-container'>
          <Stack
            className='text-stack'
            direction='column'
            sx={{
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <h1 
              className='title-text'          
              data-aos='fade-down'
              data-aos-delay='600'
            > 
              Matchbox: Bridging between ideas and execution 
            </h1>
            <p
              className='sub-text'           
              data-aos='fade-down'
              data-aos-delay='800'
            >
              Matchbox is a project collaboration platform that curates
              countless relevant projects in seconds. 
            </p>
          </Stack>
          <img className='matchstick' src={illustration}         
              data-aos='fade-right'
              data-aos-delay='900'></img>
        </div>
      </div>     
      <div className='about-section'>
        <div className="about-container">
          <div className='signup-stack'>
          <h2 className='signText'>Sign up to get free access to preview upon release.</h2>
          <div className='signup-entry'>
            <TextField 
              variant="filled"  
              multiline color="#FFFFFF" 
              placeholder="Email" 
              sx={{ backgroundColor: '#FFFFFF', width:'35em'}}
              onChange = {handleEmailChange}  
            /> 
            <Button onClick={() => submitEmail()}
              sx={{
                backgroundColor: '#F68084',
                width:'15%',
                height :'55px',
                fontSize:'max(14px, 5px);', '&:hover': {
                backgroundColor:'#f59da0',
                },
                mx:'10px',
              }}
              variant='contained'
            > 
              Sign Up
            </Button>
          </div>
        </div>
        {/* TODO about information to add about section in the future */}
        {/* <div className="about-text-container">
        <a href="#about"> </a>

        <p className='about-title-text' 
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
