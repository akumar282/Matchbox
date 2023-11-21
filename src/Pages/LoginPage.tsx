import React from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageNavBar from '../components/LandingPageNavBar'
import GitBranches from '../components/Branches'
import google from '../img/google.svg'
import github from '../img/github.svg'
import orline from '../img/orline.png'
import SingleInputs from '../components/Inputs'
import OAuthButtons from '../components/OAuthButtons'



export default function LoginPage() {

  const navigate = useNavigate()
  
  return (
    <div>
      <LandingPageNavBar />
      <GitBranches />
      <div className='flex flex-col items-center justify-center lg:flex-col'>
        <div className='pt-10 flex flex-col items-center justify-center'>
          <h1 className='text-center font-primary text-4xl font-semibold'>Welcome Back!</h1>
          <h2 className='text-center text-lg text-medium font-primary pt-4'>Login to your account</h2>
          <OAuthButtons label='Login with Google' src={google} />
          <OAuthButtons label='Login with GitHub' src={github} />
        </div>
        <div className='py-6 flex items-center'>
          <img className='w-20 sm:w-20 md:w-32 lg:w-40' src={orline} alt='or line' />
          <h1 className='px-4 font-primary text-lg'>or</h1>
          <img className='w-20 sm:w-20 md:w-32 lg:w-40' src={orline} alt='or line' />
        </div>
        <div className='flex flex-col items-center'>
          <SingleInputs placeholder='Email' />
          <SingleInputs placeholder='Password' />
        </div>
        <div className='pt-4'>
          <button className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-36 py-1'>
            Log In
          </button>
          <h1 className='font-primary text-start pt-5'>Don&apos;t have an account? <button onClick={() => navigate('/signup')} className='underline text-secondary-blue hover:text-indigo-400'>Sign-Up</button></h1>
        </div>
      </div>
    </div>
  )
}