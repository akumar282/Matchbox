import React from 'react'
import NavBar from '../components/NavBar'

export default function Settings() {

  function accountInformation() {
    return (
      <div className='flex flex-col items-start pl-4 pt-4'>
        <h1 className='font-primary text-xl'>User Profile</h1>
        <h3 className='font-primary text-sm'>Your current saved information</h3>
        <div className='flex flex-row flex-wrap items-start mt-3'>
          <div className='flex grow-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='mr-2'
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
          <div className='flex flex-col grow-0 items-start lg:justify-center lg:h-full'>
            <h1 className='font-primary text-base'>Profile Picture</h1>
            <h3 className='font-primary text-sm'>File Types: JPEG, PNG under 25 MB</h3>
          </div>
          <div className='flex flex-col items-start grow-0 lg:justify-center lg:pl-6 pr-2 pt-4 lg:h-full'>
            <button className='bg-indigo-500 font-primary rounded-md px-2 py-2 text-sm hover:bg-indigo-200'>
              Upload New Picture
            </button>
          </div>
        </div>
        <div className='flex flex-col space-y-2 font-primary pt-6 w-full'>
          <h1>Account Information</h1>
          <div className='flex flex-row flex-wrap lg:space-x-3  text-sm grow'>
            <div className='flex flex-col pr-1 pb-1 lg:grow'>
              <label>First Name</label>
              <input className='rounded-md' name={'First Name'} type={'text'} id={'first_name'} placeholder={'User'}/>
            </div>
            <div className='flex flex-col pb-1 lg:grow'>
              <label>Last Name</label>
              <input className='rounded-md' name={'Last Name'} type={'text'} id={'last_name'} placeholder={'Name'} />
            </div>
          </div>
          <div className='flex flex-col w-full space-x-3 font-primary text-sm'>
            <div className=' flex flex-col'>
              <label>Username</label>
              <input className='rounded-md lg:w-full w-[229px]' name={'Username'} type={'text'} id={'user_name'} placeholder={'@gitmatch.io'} />
            </div>
          </div>
          <div className='pt-4 w-full'>
            <div className='flex flex-col lg:items-center lg:justify-center  w-full'>
              <h1 className='pb-4'>Manage Password</h1>
              <div className='flex flex-col items-center w-5/6'>
                <div className='flex flex-col text-sm pr-1 pb-1 w-full'>
                  <label>First Name</label>
                  <input className='rounded-md lg:w-full w-[250px]' name={'First Name'} type={'text'} id={'first_name'} placeholder={'User'}/>
                </div>
                <div className='flex flex-col text-sm pb-1 w-full'>
                  <label>Last Name</label>
                  <input className='rounded-md lg:w-full w-[250px]' name={'Last Name'} type={'text'} id={'last_name'} placeholder={'Name'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar/>
      <div className='bg-gray-300 flex-grow'> {/* background div*/}
        <div className='flex flex-row'> {/* split between settings pane and display */}
          <div className=' hidden bg-gray-200 min-w-[280px] lg:flex flex-col min-h-screen'> {/* settings pane items stacked */}
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
                  <button>Personal Information</button>
                  <button>Notifications</button>
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
                  <button>Project Preferences</button>
                </section>
              </div>
            </div>
          </div>
          <div className='flex grow justify-center'>
            {accountInformation()}
          </div>
        </div>
      </div>
    </div>
  )
}