import TempNavBar from '../components/TempNavBar'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import branchborder from '../img/branchborder.png'
import bodytxt from '../img/bodytxt.png'
import largetxt from '../img/largetxt.png'
import NewLogo from '../img/NewLogo.png'
import Aos from "aos";
import "aos/dist/aos.css";

export default function TempHomePage() {

  Aos.init({
    duration: 2500,
    delay: 400,
  })

  return (
    <div>
      <TempNavBar/>
      <div className='flex justify-start items-center overflow-hidden -mt-1 '>
        <div className='flex-none z-0'>
          <img src={branchborder} alt=''/>
        </div>
        <div className='-scale-y-100 -rotate-180 flex-none'>
          <img src={branchborder} alt=''/>
        </div>
        <div className='flex-none z-0'>
          <img src={branchborder} alt=''/>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center lg:flex-row'>
        <div className='lg:pb-4 lg:pl-4 py-4'>
          <img src={largetxt} className='md:pl-4 md:pb-4 py-4 px-4'></img>
          <img src={bodytxt} className='md:pl-4 md:pb-4 pt-2 px-4'></img>
        </div>
        <div className='lg:pt-16 lg:pl-4 lg:pr-4 py-2 px-2'>
          <img data-aos='fade-left' src={NewLogo}></img>
        </div>
      </div>
      <div className='flex items-center justify-center px-8 space-x-4'>
          <button className='bg-blue py-2 px-4 rounded-full text-white font-primary'>Get Started</button>
        <button className='bg-light-purple py-2 px-4 rounded-full text-black font-primary'>Learn More</button>
      </div>
      <div className='bg-blue flex-col mt-8 flex justify-center'>
        <h1 className='font-primary mx-8 mt-6 mb-10 text-white text-center text-4xl'>Build. Execute. Deliver.</h1>
        <h3 className='font-primary text-base mx-8 text-white text-center'>
          <p className='mb-4'>
            Pursuing software engineering as a career is challenging and requires finding experience and projects to work on for your resume.
          </p>
          <p className='mb-4'>
            We aim to help solve that problem by providing a platform where you can learn and grow your abilities as a developer. 
          </p>
        </h3>
      </div>
    </div>

  )
}