import TempNavBar from '../components/TempNavBar'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import GitBranches from '../components/Branches'
import branchborder from '../img/branchborder.png'
import bodytxt from '../img/bodytxt.png'
import largetxt from '../img/largetxt.png'
import NewLogo from '../img/NewLogo.png'
import linkedin from '../img/linkedin.svg'
import instagram from '../img/instagram.svg'
import discord from '../img/discord.svg'
import tiktok from '../img/tiktok.svg'
import Aos from "aos";
import "aos/dist/aos.css";

export default function TempHomePage() {

  Aos.init({
    duration: 2500,
    delay: 400,
  })

  return (
    <div>
      <TempNavBar />
      <GitBranches/>
      <div className='flex flex-col items-center justify-center lg:flex-row'>
        <div className='lg:pb-4 lg:pl-4 py-4'>
          <img data-aos='fade-down' src={largetxt} className='md:pl-4 md:pb-4 py-4 px-4'></img>
          <img data-aos='fade-right' src={bodytxt} className='md:pl-4 md:pb-4 pt-3 px-4'></img>
        </div>
        <div className='lg:pt-16 lg:pl-4 lg:pr-4 py-2 px-2'>
          <img data-aos='fade-left' src={NewLogo}></img>
        </div>
      </div>
      <div className='flex items-center justify-center px-8 space-x-4'>
        <button className='bg-blue py-2 px-4 rounded-full text-white font-primary hover:bg-indigo-400'>Get Started</button>
        <button className='bg-light-purple py-2 px-4 rounded-full text-black font-primary hover:bg-indigo-400'>Learn More</button>
      </div>
      <div className='bg-blue mt-8 pb-14 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-primary mx-8 mt-8 mb-10 text-white text-4xl'>Build. Execute. Deliver.</h1>
          <h3 className='font-primary text-lg mx-8 text-white w-7/12'>
            <p className='mb-4'>
              Pursuing software engineering as a career is challenging and requires finding experience and projects to work on for your resume.
            </p>
            <p className='mb-4'>
              We aim to help solve that problem by providing a platform where you can learn and grow your abilities as a developer.
            </p>
          </h3>
          <h1 className='font-primary mx-8 mt-16 mb-8 text-white text-4xl'>
            How It Works.
          </h1>
        </div>
        <div className='flex flex-col sm:flex-row items-start justify-center lg:space-x-10'> {/* <-- This div */}
          <div className='mb-8 sm:mb-0 sm:mx-4 flex-col justify-center'> {/* Add sm: classes for small screens */}
            <span className='mx-24 inline-flex items-center justify-center rounded-full bg-purple w-16 h-16 text-center font-semibold text-2xl text-blue border-2 border-white'>
              1
            </span>
            <h3 className='text-center text-white font-primary text-xl pt-3'>Join</h3>
            <h3 className='text-center text-white font-primary text-base break-words w-64 mt-3'>Create your account and fill out your project preferences</h3>
          </div>
          <div className='mb-8 sm:mb-0 sm:mx-4 flex-col justify-center'> {/* Add sm: classes for small screens */}
            <span className='mx-24 inline-flex items-center justify-center rounded-full bg-purple w-16 h-16 text-center font-semibold text-2xl text-blue border-2 border-white'>
              2
            </span>
            <h3 className='text-center text-white font-primary text-xl pt-3'>Get Matched</h3>
            <h3 className='text-center text-white font-primary text-base w-64 mt-3'>Our Algorithm matches you with software projects that you want to work on based on your interests</h3>
          </div>
          <div className='mb-8 sm:mb-0 sm:mx-4 flex-col justify-center'> {/* Add sm: classes for small screens */}
            <span className='mx-24 inline-flex items-center justify-center rounded-full bg-purple w-16 h-16 text-center font-semibold text-2xl text-blue border-2 border-white'>
              3
            </span>
            <h3 className='text-center text-white font-primary text-xl pt-3'>Start Developing</h3>
            <h3 className='text-center text-white font-primary text-base w-64 mt-3'>Join any projects you've matched with and start contributing</h3>
          </div>
        </div>
      </div>
      <div className='bg-purple flex flex-col items-center text-center'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-primary mx-8 mt-8 mb-4 text-black text-4xl text-center'>Stay Updated With Us.</h1>
          <h3 className='text-black font-primary text-lg pt-2 text-center w-8/12'>We're currently building this platform for you and partnering with others to bring you projects that you are passionate about</h3>
          <h3 className='text-black font-primary text-lg pt-10 text-center w-8/12'>Follow us on social media and join our community to stay updated and be notified when we launch</h3>
        </div>
        <div className='flex mt-10 flex-row justify-center'>
          <input className='rounded-l-full lg:w-[36rem] pl-4 w-80 h-8 focus:outline-none focus:ring text-start focus:blue' type='email' name='email' id='email' placeholder='Sign-up to be notified!'></input>
          <button type='submit' className='font-primary bg-blue hover:bg-indigo-400 text-white rounded-r-full -ml-12 px-4'>Register</button>
        </div>
        <div className='flex mt-10 mb-12 flex-row items-center lg:space-x-7'>
          <button className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12' src={linkedin} />linkedin</button>
          <button className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12' src={discord} />discord</button>
          <button className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12' src={instagram} />instagram</button>
          <button className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12' src={tiktok} />tiktok</button>
        </div>
        <GitBranches/>
      </div>
      <div className='bg-blue flex flex-col items-center justify-center'>
        <div>
          <h1 className='text-base font-primary text-center text-white py-4 px-5'>Copyright © 2023 GitMatch</h1>
        </div>
      </div>
    </div>

  )
}