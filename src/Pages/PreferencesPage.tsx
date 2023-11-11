import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'

export default function PreferencesPage() {

  return (
    <div>
      <LandingPageNavBar/>
      <div className='flex flex-row mt-6'>
        <div className='flex flex-col items-start mx-4 pl-2'>
          <h1 className='font-primary text-3xl font-semibold'>Project Preferences</h1>
          <h2 className='font-primary text-medium pt-1'>We&apos;ll use this to match you with projects of your liking</h2>
        </div>
        <div>
        </div>
      </div>

    </div>
    
  )
}