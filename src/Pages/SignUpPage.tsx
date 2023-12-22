import React from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageNavBar from '../components/LandingPageNavBar'
import GitBranches from '../components/Branches'
import google from '../img/google.svg'
import github from '../img/github.svg'
import orline from '../img/orline.png'
import SingleInputs from '../components/Inputs'
import OAuthButtons from '../components/OAuthButtons'
import { standardSignUp } from '../backend/functions/credentials'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { Amplify } from 'aws-amplify'
import ErrorAlert, { warnStyle, warnXStyle} from '../components/alerts/errorAlert'
import MFAModal from '../components/MFAModal'
Amplify.configure(awsconfig)


export default function SignUpPage() {

  const [isChecked, setIsChecked] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked) // Toggle the checked state
  }

  const closeAlert = () => {
    setShowAlert(false)
  }

  const navigate = useNavigate()
  
  const validationSchema = yup.object({
    user_name: yup
      .string()
      .min(3, 'Username should be of minimum 3 characters')
      .max(20, 'Username should be of maximum 20 characters')
      .required('Username is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      user_name: '',
      email:'',
      password:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(!isChecked){
        setShowAlert(true)
      } else {
        setShowAlert(false)
        standardSignUp(values.user_name, values.email, values.password)
        setShowModal(true)
      }
      
    },
  })

  return (
    <div>
      <LandingPageNavBar />
      <GitBranches/>
      <div className='flex flex-col items-center justify-center lg:flex-col'>
        <div className='pt-10 flex flex-col items-center justify-center'>
          {showAlert && <ErrorAlert show={showAlert} closeAlert={closeAlert} title='Warning' message='You must accept the Terms and Conditions.' closeStyle={warnXStyle} colorStyle={warnStyle} />}
          <MFAModal setFunction={setShowModal} openModal={showModal} user_name={formik.values.user_name}/>
          <h1 className='text-center font-secondary text-4xl font-light'>Get Started</h1>
          <h2 className='text-center text-lg text-medium font-primary pt-4'>Create an account</h2>
          <OAuthButtons onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})} label='Sign up with Google' src={google} />
          <OAuthButtons onClick={()=>console.log()} label='Sign up with GitHub' src={github} />
        </div>
        <div className='py-6 flex items-center'>
          <img className='w-20 sm:w-20 md:w-32 lg:w-40' src={orline} alt='or line' />
          <h1 className='px-4 font-primary text-lg'>or</h1>
          <img className='w-20 sm:w-20 md:w-32 lg:w-40' src={orline} alt='or line' />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col items-center'>
            <div> 
              <SingleInputs 
                name='user_name' 
                type='user_name' 
                id='user_name'  
                value={formik.values.user_name} 
                onChange={formik.handleChange} 
                placeholder='Username'/>
              {formik.errors.user_name && formik.touched.user_name ? ( <div className='text-red-500 text-xs'>{formik.errors.user_name}</div>) : <div className='text-xs'> &nbsp;</div>}
            </div>
            <div> 
              <SingleInputs 
                name='email' 
                type='email' 
                id='email' 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                placeholder='Email' />
              {formik.errors.email && formik.touched.email ? ( <div className='text-red-500 text-xs'>{formik.errors.email}</div>) : <div className='text-xs'> &nbsp;</div>}
            </div>
            <div> 
              <SingleInputs 
                name='password' 
                type='password' 
                id='password' 
                value={formik.values.password} 
                onChange={formik.handleChange} 
                placeholder='Password' />
              {formik.errors.password && formik.touched.password ? ( <div className='text-red-500 text-xs'>{formik.errors.password}</div>) : <div className='text-xs'> &nbsp;</div>}
            </div>
          </div>
          <div className='ml-4 py-4'>
            <input type='radio' onChange={()=>console.log()} checked={isChecked} onClick={handleCheck}></input>
            <label className='pl-2 font-primary text-sm' >I agree to the <a onClick={() => navigate('/tos')} className='underline text-secondary-blue hover:text-indigo-400 cursor-pointer'>Terms and Conditions</a> </label>
          </div>
          <div className='pt-5'>
            <button className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-36 py-2' type='submit' onClick={() => formik.handleSubmit}>
            Sign Up
            </button>
            <h1 className='font-primary text-center pt-5'>Already have an account? <button onClick={() => navigate('/login')} className='underline text-secondary-blue hover:text-indigo-400'>Login</button></h1>
          </div>
        </form>
      </div>
    </div>
  )
}