import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import GitBranches from '../components/Branches'
import ButtonMailto from '../components/ButtonMailto'
import instagram from '../img/instagram.svg'
import discord from '../img/discord.svg'
import {useNavigate} from 'react-router-dom'

export default function HelpPage() {

  const navigate = useNavigate()

  return (
    <div className='h-screen bg-gray-50'>
      <LandingPageNavBar/>
      <GitBranches/>
      <div id='register'
        className='bg-gray-50 text-black to-sky-600 flex flex-col items-center text-center'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-primary mx-8 mt-8 mb-4 text-black text-4xl text-center'>We&apos;re Here to Help!.</h1>
          <h3 className='font-primary text-lg pt-2 text-center w-8/12'>If you have any questions use one of the below
            methods to reach out!</h3>
          <h3 className='font-primary text-lg pt-10 text-center w-8/12'>We promise to get back to you quickly!</h3>
        </div>
        <div className='flex mt-10 mb-10 flex-row items-center lg:space-x-7'>
          <a href='https://discord.gg/kTCrcaDzpN'
            className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12'
              src={discord}/>discord</a>
          <a href='https://instagram.com/gitmatch.io?igshid=NGVhN2U2NjQ0Yg=='
            className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12'
              src={instagram}/>instagram</a>
        </div>
        <div className='flex-row mb-4'>
          <h1 className='font-primary text-center'>Further Questions? <ButtonMailto label='Contact Us!'
            mailto='mailto:info@gitmatch.io'/>
          </h1>
        </div>
        <div className='font-primary py-6 flex flex-row space-x-2'>
          <h1>Creator: Abhi Kumar </h1>
          <a className='text-blue-600 underline' href='https://www.linkedin.com/in/k-abhi/' target='_blank' rel='noreferrer'>LinkedIn</a>
        </div>
        <div className='items-center pt-4 pb-10'>
          <button onClick={() => navigate('/signup')}
            className='text-white text-2xl bg-[#8000FF] hover:bg-fuchsia-300 font-primary rounded-lg py-3 px-4 hover:text-white'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}