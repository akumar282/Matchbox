import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import InboxChat from '../components/InboxChat'
import InboxHolder from '../components/InboxHolder'

export default function Inbox() {
  const [screen, setScreen] = useState('inbox')
  return (
    <div className='h-screen bg-primary-purple flex flex-col relative overflow-hidden'>
      <NavBar />
      <div className='relative w-full h-full hidden lg:flex md:flex'>
        <div className='bg-white hidden lg:flex md:flex lg:max-w-[1300px] w-[90%] h-[90%] rounded-lg font-primary shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex w-[30%] font-primary bg-[#F9F8FC] rounded-l-lg'>
            <InboxHolder setScreen={setScreen}/>
          </div>
          <div className='w-[70%] hidden lg:flex md:flex font-primary rounded-r-lg'>
            <InboxChat setScreen={setScreen}/>
          </div>
        </div>
      </div>
      <div className='bg-[#f3f3f3] lg:hidden md:hidden flex justify-center items-center w-full h-full overflow-hidden'>
        {screen === 'inbox' ? <InboxHolder setScreen={setScreen}/> : <InboxChat setScreen={setScreen}/>}
      </div>
    </div>
  )
}