import React from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageNavBar from '../components/LandingPageNavBar'
import GitBranches from '../components/Branches'
import google from '../img/google.svg'
import orline from '../img/orline.png'
import SingleInputs from '../components/Inputs'
import OAuthButtons from '../components/OAuthButtons'
import {Auth} from 'aws-amplify'
import ErrorAlert, {errorStyle, errorXStyle} from '../components/alerts/errorAlert'
import * as yup from 'yup'
import { useFormik } from 'formik'
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth'

export default function LoginPage() {
  
  const [showAlert, setShowAlert] = React.useState(false)
  const navigate = useNavigate()
  const closeAlert = () => {
    setShowAlert(false)
  }
  const validationSchema = yup.object({
    username: yup
      .string()
      .required('username is required'),
    password: yup
      .string()
      .required('Password is required'),
  })
  const formik = useFormik({
    initialValues: {
      username:'',
      password:''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await Auth.signIn(values.username, values.password)
        navigate('/home')
      } catch (error) {
        console.log('error signing in', error)
        setShowAlert(true)
      }
    },
  })
  return (
    <div className='flex flex-col'>
      <LandingPageNavBar/>
      <GitBranches/>

      <div className='flex flex-col items-center justify-center lg:flex-col'>

        <div className='pt-10 flex flex-col items-center justify-center'>
          {showAlert &&
            <ErrorAlert show={showAlert} closeAlert={closeAlert} title='Error' message='Login Unsuccessful'
              closeStyle={errorXStyle} colorStyle={errorStyle}/>
          }
          <h1 className='text-center font-secondary text-4xl font-light'>Welcome Back!</h1>
          <h2 className='text-center text-lg text-medium font-primary pt-4'>Login to your account</h2>
          <OAuthButtons label='Login with Google' onClick={ () => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})} src={google}/>
        </div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col items-center justify-center lg:flex-col'>
          <div className='py-6 flex items-center'>
            <img className='w-20 sm:w-20 md:w-32 lg:w-40' src={orline} alt='or line'/>
            <h1 className='px-4 font-primary text-lg'>or</h1>
            <img className='w-20 sm:w-20 md:w-32 lg:w-40' src={orline} alt='or line'/>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <SingleInputs
                placeholder='Enter Username'
                name='username'
                type='text'
                id='username'
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && formik.touched.username ? (
                <div className='text-red-500 text-xs'>{formik.errors.username}</div>) :
                <div className='text-xs'> &nbsp;</div>}
            </div>
            <div>
              <SingleInputs
                placeholder='Enter Password'
                name='password'
                type='password'
                id='password'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className='text-red-500 text-xs'>{formik.errors.password}</div>) :
                <div className='text-xs'> &nbsp;</div>}
            </div>
          </div>
          <div className='pt-2 flex flex-col items-center'>
            <button
              className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-36 py-2'
              type='submit' onClick={() => formik.handleSubmit}>
              Log In
            </button>
            <h1 className='font-primary text-start pt-5'>Don&apos;t have an account? <button
              onClick={() => navigate('/signup')}
              className='underline text-secondary-blue hover:text-indigo-400'>Sign-Up</button></h1>
          </div>
        </form>
      </div>
    </div>
  )
}