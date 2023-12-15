import React, { useState } from 'react'
import NavBar from '../components/NavBar'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InboxChat from '../components/InboxChat'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InboxHolder from '../components/InboxHolder'

export default function Inbox() {
  const [screen, setScreen] = useState('inbox')
  return (
    <div className='h-screen bg-primary-purple flex flex-col relative'>
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
      <div className='bg-[#e2e2e2] lg:hidden md:hidden flex justify-center items-center gap-2 pt-2 w-full h-full'>
        {screen === 'inbox' ? <InboxHolder setScreen={setScreen}/> : <InboxChat setScreen={setScreen}/>}
      </div>
    </div>
  )
}