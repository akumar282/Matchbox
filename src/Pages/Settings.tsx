import React, {useContext, useState} from 'react'
import NavBar from '../components/NavBar'
import PreferencesComponent, { PreferencesProps } from '../components/PreferencesComponent'
import {CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag} from '../API'
import {updateUser} from '../backend/mutations/userMutations'
import {AuthContext} from '../components/AuthWrapper'

export default function Settings() {

  const userInfo = useContext(AuthContext)

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
  console.log(tags)

  const useOnSubmitTags = async () => {
    if (userInfo && userInfo.id) {
      const updateUserFn = await updateUser({
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
      console.log(updateUserFn)
    }
  }

  function PreferencesModule(props: PreferencesProps) {

    const shouldRenderButton = Object.values(tags).some(tagArray => tagArray.length > 0)

    return (
      <>
        {PreferencesComponent(props)}
        <div className="flex justify-center mt-8">
          {shouldRenderButton &&
            <button
              className="font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-24 py-2"
              onClick={() => useOnSubmitTags()}>
              Submit
            </button>
          }
        </div>
      </>
    )
  }

  const [isChecked, setIsChecked] = React.useState(0)
  const [pageIndex, setPageIndex] = useState<number>(0)
  const components = [accountInformation(), notificationInformation(), PreferencesModule({setTags})]

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
  

  function accountInformation() {
    return (
      <div className='flex flex-col items-center pt-6'>
        <h1 className='font-primary text-3xl font-semibold'>User Profile</h1>
        <h3 className='font-primary text-sm'>Your current saved information</h3>
        <div className='flex flex-col font-primary mt-6 lg:w-full w-[97%] bg-white rounded-lg shadow-xl'>
          <div className='py-4 lg:w-full space-y-4 w-full'>
            <div className='flex flex-col items-center w-5/6 mx-auto'>
              <div className='flex flex-row flex-wrap items-center mt-3'>
                <div className=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    className='mx-auto'
                    viewBox='0 0 25 25'
                    strokeWidth={1}
                    stroke='currentColor'
                    height={85}
                    width={85}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d={`M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963
                0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z`} />
                  </svg>
                </div>
                <div className='flex flex-col items-start lg:justify-center lg:h-full'>
                  <h1 className='font-primary text-base'>Profile Picture</h1>
                  <h3 className='font-primary text-sm'>File Types: JPEG, PNG under 25 MB</h3>
                </div>
                <div className='flex flex-col lg:items-start lg:justify-center lg:mt-0 mt-4 mx-auto lg:h-full'>
                  <button className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white text-sm mb-3 py-2 px-4 mt-4'>
                    Upload New Picture
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center w-5/6 mx-auto'>
              <h1 className='pb-4 mt-3'>Account Information</h1>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>First Name</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'First Name'}
                  type='text'
                  id={'first-name'}
                  placeholder={'User'}
                />
              </div>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>Last Name</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Last Name'}
                  type='text'
                  id={'last-name'}
                  placeholder={'Name'}
                />
              </div>
              <div className='flex text-sm flex-col pb-1 w-full'>
                <label>Username</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Username'}
                  type='text'
                  id={'user_name'}
                  placeholder={'@gitmatch.io'}
                />
              </div>
            </div>
            <div className='flex flex-col items-center w-5/6 mx-auto'>
              <h1 className='pb-4 mt-3'>Manage Password</h1>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>Old Password</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Old Password'}
                  type='password'
                  id={'old_password'}
                  placeholder={'********'}
                />
              </div>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>New Password</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'New Password'}
                  type='password'
                  id={'new_password'}
                  placeholder={'********'}
                />
              </div>
              <div className='flex text-sm flex-col pb-1 w-full'>
                <label>Confirm Password</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Confirm Password'}
                  type='password'
                  id={'confirm_password'}
                  placeholder={'********'}
                />
              </div>
              <button className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white mb-3 py-2 px-4 mt-4'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function notificationInformation() {
    return (
      <div className='flex flex-col items-center lg:w-3/12 pt-6'>
        <div className='flex flex-col items-center'>
          <h1 className="font-primary text-3xl font-semibold">Notifications</h1>
          <h3 className="font-primary text-sm text-center">Your current notification settings</h3>
        </div>
        <div className="flex flex-col font-primary mt-6 lg:w-full w-[96%] bg-white rounded-lg shadow-xl">
          <div className="py-4 lg:w-full w-full">
            <div className='flex flex-col items-center space-y-3 w-5/6  mx-auto'>
              <h1 className='pb-4 mt-3 text-center'>Set Notification Preferences</h1>
              <div className='w-full'>
                <input type='radio' onChange={()=>console.log()} checked={isChecked === 0} onClick={() => handleCheck(0)}></input>
                <label className='pl-2 font-primary text-sm' >Allow email notifications and newsletter</label>
              </div>
              <div className='w-full'>
                <input type='radio' onChange={()=>console.log()} checked={isChecked === 1} onClick={() => handleCheck(1)}></input>
                <label className='pl-2 font-primary text-sm' >Allow email notifications only</label>
              </div>
              <div className='w-full'>
                <input type='radio' onChange={()=>console.log()} checked={isChecked === 2} onClick={() => handleCheck(2)}></input>
                <label className='pl-2 font-primary text-sm' >No notifications (Except MFA)</label>
              </div>
              <button className='bg-blue-700 hover:bg-blue-400 rounded-lg text-white mb-3 py-2 px-4 mt-4'>Submit</button>
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
                    onClick={() => setPageIndex(1)}>Notifications</button>
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
                    className={` ${pageIndex === 2 ? ' border-b-4 border-primary-purple' : ''}`}
                    onClick={() => setPageIndex(2)}>Project Preferences
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