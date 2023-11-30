import React from 'react'
import NavBar from '../components/NavBar'

export default function Settings() {


  return (
    <div>
      <NavBar/>
      <div className='bg-gray-300'> {/* background div*/}
        <div className='flex flex-row'> {/* split between settings pane and display */}
          <div className='bg-gray-200 min-w-[280px] flex flex-col'> {/* settings pane items stacked */}
            <div
              className='flex flex-row min-w-[100px] justify-between mx-auto mt-4'> {/*first settings block image and buttons side by side*/}
              <div className='mr-4'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'/>
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
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75' />
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
        </div>
      </div>
    </div>
  )
}