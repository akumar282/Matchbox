import LandingPageNavBar from '../components/LandingPageNavBar'
import { useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import GitBranches from '../components/Branches'
import bodytxt from '../img/bodytxt.png'
import largetxt from '../img/largetxt.png'
import NewLogo from '../img/NewLogo.png'
import linkedin from '../img/linkedin.svg'
import instagram from '../img/instagram.svg'
import discord from '../img/discord.svg'
import tiktok from '../img/tiktok.svg'
import * as yup from 'yup'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { createNewsletterEmail } from '../backend/mutations/newsletterMutations'
import { CreateNewsletterEmailModelInput } from '../API'
import { FormikValues, useFormik } from 'formik'
import CollapseAll from '../components/FAQ'
import ButtonMailto from '../components/ButtonMailto'
import ErrorAlert, {successStyle, successXStyle} from '../components/alerts/errorAlert'

export default function LandingPage(): React.JSX.Element {
  
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  const handleScrollHome = (_id: string) => {
    const element = document.getElementById(_id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  Aos.init({
    duration: 2500,
    delay: 400,
  })
  
  async function sendToDatabase(values: FormikValues) {
    const payload = {
      input: {
        email: values.email,
      },
    } as { input: CreateNewsletterEmailModelInput }
    
    await createNewsletterEmail(payload).catch((error) =>
      console.log(error)
    )
  }
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendToDatabase(values)
      formik.resetForm()
      setSuccess(true)
    },
  })

  const closeSuccessAlert = () => {
    setSuccess(false)
  }


  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 w-[97%] mx-auto mt-4'>
        {success &&
          <ErrorAlert
            show={success}
            closeAlert={closeSuccessAlert}
            title='Success'
            message='Email Submitted!'
            closeStyle={successXStyle} colorStyle={successStyle}
          />
        }
      </div>

      <LandingPageNavBar/>
      <GitBranches/>
      <div id='home' className='flex flex-col items-center justify-center lg:flex-row'>
        <div className='lg:pb-4 lg:pl-4 py-4'>
          <img data-aos='fade-down' src={largetxt} className='md:pl-4 md:pb-4 py-4 px-4'></img>
          <img data-aos='fade-right' src={bodytxt} className='md:pl-4 md:pb-4 pt-3 px-4'></img>
        </div>
        <div className='lg:pt-16 lg:pl-4 lg:pr-4 py-2 px-2'>
          <img data-aos='fade-left' src={NewLogo}></img>
        </div>
      </div>
      <div className='flex items-center justify-center px-8 space-x-4'>
        <button className='bg-secondary-blue py-2 px-4 rounded-full text-white font-primary hover:bg-indigo-400'
          onClick={() => {
            navigate('/signup')
          }}>Get Started
        </button>
        <button className='bg-light-purple py-2 px-4 rounded-full text-black font-primary hover:bg-indigo-400'
          onClick={() => {
            handleScrollHome('about')
          }}>Learn More
        </button>
      </div>
      <div id='about'
        className='bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-lime-400 via-blue-200 to-purple-700 mt-8 pb-14 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-primary mx-8 mt-8 mb-10 text-white text-4xl'>Build. Execute. Deliver.</h1>
          <h3 className='font-primary text-lg mx-8 text-white w-7/12'>
            <p className='mb-4'>
              Pursuing software engineering as a career is challenging and requires finding experience and projects to
              work on for your resume.
            </p>
            <p className='mb-4'>
              We aim to help solve that problem by providing a platform where you can learn and grow your abilities as a
              developer.
            </p>
          </h3>
          <h1 className='font-primary mx-8 mt-16 mb-8 text-white text-4xl'>
            How It Works.
          </h1>
        </div>
        <div className='flex flex-col sm:flex-row items-start justify-center lg:space-x-10'> {/* <-- This div */}
          <div className='mb-8 sm:mb-0 sm:mx-4 flex-col justify-center'> {/* Add sm: classes for small screens */}
            <span
              className='mx-24 inline-flex items-center justify-center rounded-full bg-primary-purple w-16 h-16 text-center font-semibold text-2xl text-secondary-blue border-2 border-white'>
              1
            </span>
            <h3 className='text-center text-white font-primary text-xl pt-3'>Join</h3>
            <h3 className='text-center text-white font-primary text-base break-words w-64 mt-3'>Create your account and
              fill out your project preferences</h3>
          </div>
          <div className='mb-8 sm:mb-0 sm:mx-4 flex-col justify-center'> {/* Add sm: classes for small screens */}
            <span
              className='mx-24 inline-flex items-center justify-center rounded-full bg-primary-purple w-16 h-16 text-center font-semibold text-2xl text-secondary-blue border-2 border-white'>
              2
            </span>
            <h3 className='text-center text-white font-primary text-xl pt-3'>Get Matched</h3>
            <h3 className='text-center text-white font-primary text-base w-64 mt-3'>Our Algorithm matches you with
              software projects that you want to work on based on your interests</h3>
          </div>
          <div className='mb-8 sm:mb-0 sm:mx-4 flex-col justify-center'> {/* Add sm: classes for small screens */}
            <span
              className='mx-24 inline-flex items-center justify-center rounded-full bg-primary-purple w-16 h-16 text-center font-semibold text-2xl text-secondary-blue border-2 border-white'>
              3
            </span>
            <h3 className='text-center text-white font-primary text-xl pt-3'>Start Developing</h3>
            <h3 className='text-center text-white font-primary text-base w-64 mt-3'>Join any projects you&apos;ve
              matched with and start contributing</h3>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div id='faq' className='bg-[#254d32] flex flex-col items-center text-start py-12'>
        <h1 className='font-primary mx-8 mb-8 text-white text-4xl'>
          Any Questions?.
        </h1>
        <CollapseAll/>
      </div>
      <div id='register' className='bg-[#5fc17e] text-black to-sky-600 flex flex-col items-center text-center'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-primary mx-8 mt-8 mb-4 text-black text-4xl text-center'>We&apos;re Here!.</h1>
          <h3 className='font-primary text-lg pt-2 text-center w-8/12'>We&apos;re just launched this platform and are
            continuing to build to bring you projects that you are passionate about</h3>
          <h3 className='font-primary text-lg pt-10 text-center w-8/12'>Follow us on social media and join our community
            to stay updated and be notified of new project, resources, and features!</h3>
        </div>
        <div className='flex mt-10 flex-row justify-center gap-12'>
          <div>
            <input className='font-primary lg:w-[36rem] md:[25rem] w-[65vw] h-8 focus:outline-0  text-start'
              name='email'
              type='email'
              id='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder='Enter your email!'
            />
          </div>
          <button type='submit' onClick={() => formik.handleSubmit()}
            className='font-primary bg-secondary-blue hover:bg-indigo-400 text-white rounded-r-full -ml-12 px-4'>Register
          </button>
        </div>
        <div className='flex mt-10 mb-10 flex-row items-center lg:space-x-7'>
          <a href='https://discord.gg/kTCrcaDzpN'
            className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12'
              src={linkedin}/>linkedin</a>
          <a href='https://discord.gg/kTCrcaDzpN'
            className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12'
              src={discord}/>discord</a>
          <a href='https://instagram.com/gitmatch.io?igshid=NGVhN2U2NjQ0Yg=='
            className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12'
              src={instagram}/>instagram</a>
          <a href='https://www.tiktok.com/@gitmatch?lang=en'
            className='font-primary text-md text-center flex-col justify-center'><img className='mx-7 w-12 h-12'
              src={tiktok}/>tiktok</a>
        </div>
        <div className='items-center pt-4 pb-10'>
          <button onClick={() => navigate('/signup')}
            className='text-white text-2xl bg-[#8000FF] hover:bg-fuchsia-300 font-primary rounded-lg py-3 px-4 hover:text-white'>
            Get Started
          </button>
        </div>
        <div className='flex-row mb-4'>
          <h1 className='font-primary text-center'>Further Questions? <ButtonMailto label='Contact Us!'
            mailto='mailto:info@gitmatch.io'/>
          </h1>
        </div>
        <GitBranches/>
      </div>
      <div className='bg-secondary-blue flex items-center text-white justify-center relative px-5 py-4'>
        <h1 className='text-base font-primary text-center text-white z-10'>Copyright © 2024 GitMatch</h1>
        <button
          className='absolute right-4 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none focus:ring-2 focus:ring-white'
          onClick={() => navigate('/help')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}