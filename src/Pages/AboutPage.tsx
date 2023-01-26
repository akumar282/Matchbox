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
export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)
  const [isCreateOpen, setIsCreateOpen] = React.useState(false)
  function NoAccount() {
    setIsLoginOpen(false)
    setIsCreateOpen(true)
  }
  return (
    <div className='land-header'>
    <header className='container'>
      <LandingPopupLogin trigger={isLoginOpen} setTrigger={setIsLoginOpen} setCreateOpen = {NoAccount}/>
      <LandingPopupCreate trigger={isCreateOpen} setTrigger={setIsCreateOpen} />
      <div className='navHome'>
        {/* logo */}
        <div className='logobox'>
          <span className='logo'>Matchbox</span>
          {/* about us link */}
        </div>

        <Stack className='LandingStack' direction='row'>
          <Button
            sx={{
              color: '#000000',
              fontSize: 'max(20px, 10px);',
            }}
          >
            {' '}
            About Us
          </Button>
          {/* sign up link */}
          <Button
            component={Link}
            to='/create-profile'
            sx={{
              color: '#000000',
              fontSize: 'max(20px, 10px);',
            }}
          >
            {' '}
            Sign Up
          </Button>
          {/* login button */}
          {/* <Button
            variant='contained'
            sx={{
              backgroundColor: '#312C51',
              color: 'white',
              fontSize: 'max(20px, 10px);',
              '&:hover': {
                backgroundColor: '#716ab4',
              },
            }}
            onClick={() => setIsLoginOpen(true)}
          >
            {' '}
            Login
          </Button> */}
        </Stack>
      </div>
      <div className='BoxStack'>
        <Stack
          className='textStack'
          direction='column'
          spacing={1}
          sx={{
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* landing title & description */}
          <p className='subtext'> Welcome to Matchbox </p>
          <p className='leadingtext'> Discover a project you'll love</p>
          {/* <p className='leadingtext'> you'll love.</p> */}
          <p className='subtext'>Get instantly matched with open source projects with a straight-forward process </p>
        </Stack>
        {/* matchstick illustration */}
        <img className='firestick' src={illustration}></img>
      </div>

      <Button onClick={() => setIsCreateOpen(true)}
        sx={{
          backgroundColor: '#312C51',
        //   marginLeft: '5%',
          mt: '1%',
          width:'20%',
          height : '8vh',
          fontSize: 'max(28px, 10px);',
          '&:hover': {
            backgroundColor: '#716ab4',
          },
        }}
        variant='contained'
      > 
        Learn More
      </Button>
      <div className='header-padding'>

      </div>
      </header>
        <div className="about-container">
            <div className="container">
                hello world    
            </div>
        </div>
    </div>
  );
}
