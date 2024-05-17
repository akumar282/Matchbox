import React, {useContext, useState} from 'react'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {AuthContext} from './AuthWrapper'
import {Auth} from 'aws-amplify'
import ErrorAlert, {errorStyle, errorXStyle, successStyle, successXStyle} from './alerts/errorAlert'

interface UsernameProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setUsernameErr: React.Dispatch<React.SetStateAction<boolean>>
  setUsernameGood: React.Dispatch<React.SetStateAction<boolean>>
}
export default function SetUsername(props: UsernameProps) {

  const userInfo = useContext(AuthContext)
  const [errorExists, setErrorExists] = useState<boolean>(false)
  const [successExists, setSuccessExists] = useState<boolean>(false)

  const closeErrorAlert = () => {
    setErrorExists(false)
    setSuccessExists(false)
    props.setUsernameErr(false)
  }

  const validationSchemaPassword = yup.object({
    old_password: yup
      .string()
      .min(2, 'Username should be a minimum of 2 characters')
  })

  const formik = useFormik({
    initialValues: {
      user_name: '',
    },
    validationSchema: validationSchemaPassword,
    onSubmit: async (values) => {
      if (userInfo && userInfo.id) {
        try {
          await Auth.signIn(values.user_name, '1')
        } catch (e) {
          const error = e.toString()
          if(error.includes('User does not exist')) {
            setSuccessExists(true)
            setErrorExists(false)
            props.setUsernameErr(true)
            props.setUsername(values.user_name)
            props.setUsernameGood(true)
          } else {
            setErrorExists(true)
            setSuccessExists(false)
            props.setUsernameErr(true)
          }
        }
      }
    },
  })
  return (
    <div className='bg-gray-200 rounded-lg w-11/12 mx-auto'>
      <div className='flex flex-col items-center'>
        <div className='mt-2'>
          {errorExists &&
            <ErrorAlert show={errorExists} closeAlert={closeErrorAlert} title='Error' message='Username is taken'
              closeStyle={errorXStyle} colorStyle={errorStyle}/>
          }
          {successExists &&
            <ErrorAlert show={successExists} closeAlert={closeErrorAlert} title='Success' message='Username is available'
              closeStyle={successXStyle} colorStyle={successStyle}/>
          }
        </div>

        <div className='w-5/6 flex items-start flex-col'>
          <div className='w-full pt-2 items-center'>
            <h1 className='font-secondary font-light text-xl text-center'>Set Username</h1>
          </div>
          <div className='flex text-sm w-full font-primary flex-col pb-2'>
            <form onSubmit={formik.handleSubmit}>
              <label>Username</label>
              <input
                className='rounded-md w-full'
                name={'user_name'}
                type='text'
                id={'user_name'}
                placeholder={'@user'}
                value={formik.values.user_name}
                onChange={formik.handleChange}
              />
              {formik.errors.user_name && formik.touched.user_name ?
                (<div className='text-red-500 text-xs'>{formik.errors.user_name}</div>)
                :
                (<div className='text-xs'> &nbsp;</div>)
              }
              <div className='flex justify-center'>
                <button type='submit' className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg py-2 px-3'>
                  Check Username
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}