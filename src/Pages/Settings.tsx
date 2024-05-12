import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import PreferencesComponent, { PreferencesProps } from '../components/PreferencesComponent'
import {
  CloudProviderTag,
  DevelopmentTag,
  DifficultyTag,
  FrameworkTag,
  InterestTag,
  LanguageTag,
  NotificationType,
  SizeTag,
  UsersModel
} from '../API'
import {updateUser} from '../backend/mutations/userMutations'
import {AuthContext} from '../components/AuthWrapper'
import {getUser} from '../backend/queries/userQueries'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {imageOrDefault} from '../functions/helpers'
import {uploadImage} from '../backend/storage/s3'
import { Auth } from 'aws-amplify'
import ErrorAlert, {errorStyle, errorXStyle, successStyle, successXStyle} from '../components/alerts/errorAlert'

export default function Settings() {

  const userInfo = useContext(AuthContext)
  const [isChecked, setIsChecked] = React.useState(0)
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [passwordSuccess, setPasswordSuccess] = useState<boolean>(false)
  const [userUpdateError, setUserUpdateError] = useState<boolean>(false)
  const [userUpdateSuccess, setUserUpdateSuccess] = useState<boolean>(false)
  const [userData, setUserData] = useState<UsersModel>()
  const [file, setFile] = useState<File | null>(null)

  const closeErrorAlert = () => {
    setPasswordError(false)
    setUserUpdateError(false)
  }

  const closeSuccessAlert = () => {
    setPasswordSuccess(false)
    setUserUpdateSuccess(false)
  }

  const [tags, setTags] = React.useState<{
    LanguageTags: LanguageTag[],
    FrameworkTags: FrameworkTag[],
    DevelopmentTags: DevelopmentTag[],
    InterestTags: InterestTag[],
    CloudProviderTags: CloudProviderTag[],
    DifficultyTags: DifficultyTag[],
    SizeTags: SizeTag[],
  }>({
    LanguageTags: [],
    FrameworkTags: [],
    DevelopmentTags: [],
    InterestTags: [],
    CloudProviderTags: [],
    DifficultyTags: [],
    SizeTags: [],
  })

  const notificationToNum = [...Object.values(NotificationType)]

  useEffect(() => {
    const getSettingsData = async () => {
      if (userInfo && userInfo.id) {
        const {data} = await getUser({id: userInfo.id})
        if(data && data.getUsersModel && data.getUsersModel.notification_type) {
          const currentNotifcationType = notificationToNum.indexOf(data.getUsersModel.notification_type)
          setIsChecked(currentNotifcationType)
          setUserData(data.getUsersModel as UsersModel)
        }
      }
    }

    getSettingsData().catch()
  }, [])

  useEffect(() => {
    if (userData) {
      formik.setValues({
        first_name: userData.first_name ? userData.first_name : '',
        last_name: userData.last_name ? userData.last_name : '',
        email: userData.email,
      }, false)
    }
  }, [userData])


  const useOnSubmitTags = async () => {
    if (userInfo && userInfo.id) {
      await updateUser({
        input: {
          id: userInfo.id,
          lang_tag: tags.LanguageTags,
          dev_type_tag: tags.DevelopmentTags,
          interest_tag: tags.InterestTags,
          size_tag: tags.SizeTags,
          framework_tag: tags.FrameworkTags,
          difficulty_tag: tags.DifficultyTags,
          cloud_provider_tag: tags.CloudProviderTags,
        }
      })
    }
  }

  const useOnSubmitNotification = async () => {
    if (userInfo && userInfo.id) {
      await updateUser({
        input: {
          id: userInfo.id,
          notification_type: notificationToNum[isChecked]
        }
      })
    }
  }

  const validationSchema = yup.object({
    first_name: yup
      .string()
      .min(1, 'Name should be a minimum of 1 character'),
    last_name: yup
      .string()
      .min(1, 'Message should be a minimum of 1 character'),
    email: yup
      .string()
      .min(1, 'Email should be a minimum of 1 character')
  })

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        if (!userInfo || !userInfo.id || !userData || !user) {
          throw new Error('User authentication or data is missing.')
        }

        const input = {
          id: userInfo.id,
          first_name: values.first_name,
          last_name: values.last_name,
        }

        if (file) {
          const imageLink = await uploadImage(file)
          input['profile_image'] = imageLink
        }

        if (values.email !== userData.email) {
          const result = await Auth.updateUserAttributes(user, {
            email: values.email
          })
          if (result !== 'SUCCESS') {
            throw new Error('Failed to update email.')
          }
          input['email'] = values.email
        }

        await updateUser({ input })
        setUserUpdateSuccess(true)
      } catch (e) {
        console.error('Update failed:', e)
        setUserUpdateError(true)
      }
    },
  })

  const validationSchemaPassword = yup.object({
    old_password: yup
      .string()
      .min(8, 'Password should be a minimum of 8 characters'),
    new_password: yup
      .string()
      .min(8, 'Password should be a minimum of 8 characters'),
    confirm_password: yup
      .string()
      .min(8, 'Password should be a minimum of 8 characters')
  })

  const formikPassword = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
    validationSchema: validationSchemaPassword,
    onSubmit: async (values) => {
      if (userInfo && userInfo.id) {
        try {
          if(values.new_password === values.confirm_password) {
            const user = await Auth.currentAuthenticatedUser()
            const data = await Auth.changePassword(user, values.old_password, values.confirm_password)
            if(data === 'SUCCESS') {
              setPasswordSuccess(true)
            }
          }
        } catch (e) {
          setPasswordError(true)
        }
      }
    },
  })

  function PreferencesModule(props: PreferencesProps) {

    const shouldRenderButton = Object.values(tags).some(tagArray => tagArray.length > 0)

    return (
      <>
        {PreferencesComponent(props)}
        <div className='flex justify-center mt-8'>
          {shouldRenderButton &&
            <button
              className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-24 py-2'
              onClick={() => useOnSubmitTags()}>
              Submit
            </button>
          }
        </div>
      </>
    )
  }



  function handleCheck (option: number){
    setIsChecked(option)
  }

  const goToNextIndex = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % components.length)
  }

  const goToPreviousIndex = () => {
    setPageIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    )
  }

  const components = [accountInformation(), passwordInformation(), notificationInformation(), PreferencesModule({setTags})]


  function accountInformation() {
    return (
      <div className='flex flex-col items-center pt-6'>
        {userUpdateError &&
          <ErrorAlert show={userUpdateError} closeAlert={closeErrorAlert} title='Error' message='Information Change Unsuccessful'
            closeStyle={errorXStyle} colorStyle={errorStyle}/>
        }
        {userUpdateSuccess &&
          <ErrorAlert show={userUpdateSuccess} closeAlert={closeSuccessAlert} title='Success' message='Information Change Successful'
            closeStyle={successXStyle} colorStyle={successStyle}/>
        }
        <h1 className='font-primary text-3xl font-semibold'>User Profile</h1>
        <h3 className='font-primary text-sm'>Your current saved information</h3>
        <div className='flex flex-col font-primary mt-6 lg:w-full w-[97%] bg-white rounded-lg shadow-xl mx-auto'>
          <div className='py-4 lg:w-full space-y-4 w-full'>
            <div className='flex flex-col items-center w-5/6 mx-auto'>
              <div className='flex flex-row flex-wrap items-center mt-3'>
                <div className='flex flex-row items-center'>
                  <div className='mr-2'>
                    {!file ?
                      imageOrDefault(localStorage.getItem('profile_image')!, 'w-20 h-20')
                      :
                      <div className='w-20 h-20 rounded-full overflow-hidden'>
                        <img
                          className='object-cover w-full h-full'
                          src={file ? URL.createObjectURL(file) : 'https://default-image.jpg'}
                          alt='Profile Image Upload'
                        />
                      </div>
                    }
                  </div>
                  <div className='flex flex-col items-start lg:justify-center lg:h-full'>
                    <h1 className='font-primary text-base'>Profile Picture</h1>
                    <h3 className='font-primary text-sm'>File Types: JPEG, PNG under 25 MB</h3>
                  </div>
                </div>
                <div className='flex flex-col lg:items-start lg:justify-center lg:mt-0 mt-4 mx-auto lg:h-full'>
                  <div className='flex items-center'>
                    <input
                      type='file'
                      id='file'
                      className='hidden'
                      onChange={(e) => {
                        e.target.files ? setFile(e.target.files[0]) : console.log('null')
                      }}
                    />
                    <label
                      htmlFor='file'
                      className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white text-sm mb-3 py-2 px-4 mt-4 cursor-pointer'>
                      Upload New Picture
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-col items-center w-5/6 mx-auto'>
                <h1 className='pb-4 mt-3'>Account Information</h1>
                <div className='flex text-sm flex-col pb-2 w-full'>
                  <label>First Name</label>
                  <input
                    className='rounded-md lg:w-full'
                    name={'first_name'}
                    type='text'
                    id={'first_name'}
                    placeholder={userData?.first_name ? userData?.first_name : 'First Name'}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.first_name && formik.touched.first_name ? 
                    (<div className='text-red-500 text-xs'>{formik.errors.first_name}</div>) 
                    :
                    (<div className='text-xs'> &nbsp;</div>)
                  }
                </div>
                <div className='flex text-sm flex-col pb-2 w-full'>
                  <label>Last Name</label>
                  <input
                    className='rounded-md lg:w-full'
                    name={'last_name'}
                    type='text'
                    id={'last_name'}
                    placeholder={userData?.last_name ? userData?.last_name : 'Last Name'}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.last_name && formik.touched.last_name ?
                    (<div className='text-red-500 text-xs'>{formik.errors.last_name}</div>)
                    :
                    (<div className='text-xs'> &nbsp;</div>)
                  }
                </div>
                <div className='flex text-sm flex-col pb-1 w-full'>
                  <label>Email</label>
                  <input
                    className='rounded-md lg:w-full'
                    name={'email'}
                    type='text'
                    id={'email'}
                    placeholder={userData?.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email ?
                    (<div className='text-red-500 text-xs'>{formik.errors.email}</div>)
                    :
                    (<div className='text-xs'> &nbsp;</div>)
                  }
                </div>
              </div>
              <div className='flex flex-col items-center w-5/6 mx-auto'>
                <button
                  onClick={() => formik.handleSubmit}
                  className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white mb-3 py-2 px-4 mt-4'>Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  function passwordInformation() {
    return (
      <div className='flex flex-col w-full items-center pt-6'>
        {passwordError &&
          <ErrorAlert show={passwordError} closeAlert={closeErrorAlert} title='Error' message='Password Change Unsuccessful'
            closeStyle={errorXStyle} colorStyle={errorStyle}/>
        }
        {passwordSuccess &&
          <ErrorAlert show={passwordSuccess} closeAlert={closeSuccessAlert} title='Success' message='Password Change Successful'
            closeStyle={successXStyle} colorStyle={successStyle}/>
        }
        <h1 className='font-primary text-3xl font-semibold'>User Profile</h1>
        <h3 className='font-primary text-sm'>Your current saved information</h3>
        <div className='flex flex-col font-primary mt-6 lg:w-3/6 w-[97%] bg-white rounded-lg shadow-xl'>
          <div className='py-4 lg:w-full space-y-4 w-full'>
            <form onSubmit={formikPassword.handleSubmit}>
              <div className='flex flex-col items-center w-5/6 mx-auto'>
                <h1 className='pb-4 mt-3'>Manage Password</h1>
                <div className='w-full'>
                  <div className='flex text-sm flex-col pb-2 w-full'>
                    <label>Old Password</label>
                    <input
                      className='rounded-md lg:w-full'
                      name={'old_password'}
                      type='password'
                      id={'old_password'}
                      placeholder={'********'}
                      value={formikPassword.values.old_password}
                      onChange={formikPassword.handleChange}
                    />
                    {formikPassword.errors.old_password && formikPassword.touched.old_password ?
                      (<div className='text-red-500 text-xs'>{formikPassword.errors.old_password}</div>)
                      :
                      (<div className='text-xs'> &nbsp;</div>)
                    }
                  </div>
                  <div className='flex text-sm flex-col pb-2 w-full'>
                    <label>New Password</label>
                    <input
                      className='rounded-md lg:w-full'
                      name={'new_password'}
                      type='password'
                      id={'new_password'}
                      placeholder={'********'}
                      value={formikPassword.values.new_password}
                      onChange={formikPassword.handleChange}
                    />
                    {formikPassword.errors.new_password && formikPassword.touched.new_password ?
                      (<div className='text-red-500 text-xs'>{formikPassword.errors.new_password}</div>)
                      :
                      (<div className='text-xs'> &nbsp;</div>)
                    }
                  </div>
                  <div className='flex text-sm flex-col pb-1 w-full'>
                    <label>Confirm Password</label>
                    <input
                      className='rounded-md lg:w-full'
                      name={'confirm_password'}
                      type='password'
                      id={'confirm_password'}
                      placeholder={'********'}
                      value={formikPassword.values.confirm_password}
                      onChange={formikPassword.handleChange}
                    />
                    {formikPassword.errors.confirm_password && formikPassword.touched.confirm_password ?
                      (<div className='text-red-500 text-xs'>{formikPassword.errors.confirm_password}</div>)
                      :
                      (<div className='text-xs'> &nbsp;</div>)
                    }
                  </div>
                </div>
                <button
                  type='submit'
                  onSubmit={() => formikPassword.handleSubmit}
                  className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white mb-3 py-2 px-4 mt-4'>Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  function notificationInformation() {
    return (
      <div className='flex flex-col items-center w-full pt-6'>
        <div className='flex flex-col items-center'>
          <h1 className='font-primary text-3xl font-semibold'>Notifications</h1>
          <h3 className='font-primary text-sm text-center'>Your current notification settings</h3>
        </div>
        <div className='flex flex-col font-primary mt-6 lg:w-3/6 w-[97%] bg-white rounded-lg shadow-xl'>
          <div className='py-4 lg:w-full w-full'>
            <div className='flex flex-col items-center space-y-3 w-5/6  mx-auto'>
              <h1 className='pb-4 mt-3 text-center'>Set Notification Preferences</h1>
              <div className='w-full'>
                <input type='radio' onChange={() => console.log()} checked={isChecked === 0}
                  onClick={() => handleCheck(0)}></input>
                <label className='pl-2 font-primary text-sm'>Allow email notifications and newsletter</label>
              </div>
              <div className='w-full'>
                <input type='radio' onChange={() => console.log()} checked={isChecked === 1}
                  onClick={() => handleCheck(1)}></input>
                <label className='pl-2 font-primary text-sm'>Allow email notifications only</label>
              </div>
              <div className='w-full'>
                <input type='radio' onChange={() => console.log()} checked={isChecked === 2}
                  onClick={() => handleCheck(2)}></input>
                <label className='pl-2 font-primary text-sm'>No notifications (Except MFA)</label>
              </div>
              <button
                className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white mb-3 py-2 px-4 mt-4'
                onClick={() => useOnSubmitNotification()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <div className='flex flex-col h-screen'>
      <NavBar/>
      <div className='flex flex-row flex-grow bg-gray-300'> {/* background div*/}
        <div className='flex flex-grow flex-row'> {/* split between settings pane and display */}
          <div className=' hidden bg-gray-200 min-w-[280px] lg:flex flex-col'> {/* settings pane items stacked */}
            <div
              className='flex flex-row min-w-[100px] justify-between mx-auto mt-4'> {/*first settings block image and buttons side by side*/}
              <div className='mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none' viewBox='0 0 24 24'
                  strokeWidth={1.5} stroke='currentColor'
                  className='w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d={`M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 
                    17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z`}/>
                </svg>
              </div>
              <div>
                <section className='font-primary text-sm space-y-3 flex flex-col items-start'>
                  <h1 className='font-semibold mb-1'>Profile</h1>
                  <button
                    className={` ${pageIndex === 0 ? ' border-b-4 border-primary-purple' : ''}`}
                    onClick={() => setPageIndex(0)}>Personal Information
                  </button>
                  <button
                    className={` ${pageIndex === 1 ? ' border-b-4 border-primary-purple' : ''}`}
                    onClick={() => setPageIndex(1)}>Password
                  </button>
                  <button
                    className={` ${pageIndex === 2 ? ' border-b-4 border-primary-purple' : ''}`}
                    onClick={() => setPageIndex(2)}>Notifications
                  </button>
                </section>
              </div>
            </div>
            <div
              className='flex flex-row min-w-[100px] justify-between mx-auto mt-5'> {/*first settings block image and buttons side by side*/}
              <div className='mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none' viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d={`M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 
                    0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 
                    0m-9.75 0h9.75`} />
                </svg>
              </div>
              <div>
                <section className='font-primary text-sm space-y-3 mr-2 flex flex-col items-start'>
                  <h1 className='font-semibold mb-1'>Preferences</h1>
                  <button
                    className={` ${pageIndex === 3 ? ' border-b-4 border-primary-purple' : ''}`}
                    onClick={() => setPageIndex(3)}>Project Preferences
                  </button>
                </section>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between grow items-center'>
            {components[pageIndex]}
            <div className='bg-white grow-0 flex pt-3 static bottom-0 mt-4 justify-center w-full'>
              <div className='flex font-primary space-x-3 text-lg flex-row'>
                <button
                  className='py-1 px-6 mb-3 bg-gray-300 hover:bg-gray-200 rounded-full'
                  onClick={goToPreviousIndex}>Back
                </button>
                <button
                  className='py-1 px-6 mb-3 bg-blue-700 hover:bg-blue-400 rounded-full text-white'
                  onClick={goToNextIndex}>Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}