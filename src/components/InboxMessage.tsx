
import React from 'react'

interface InboxMessageProps {
    setScreen: React.Dispatch<React.SetStateAction<string>>
}
export default function InboxMessage(props: InboxMessageProps) {
  function handleBack() {
    console.log('clicked')
    props.setScreen('chat')
  }
  return ( 
    <button className='w-full h-max flex gap-4 py-1 hover:bg-[#ececec]'
      onClick={() => handleBack()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div className='flex flex-col gap-2 text-start overflow-hidden w-full'>
        <h1 className='truncate w-full'>
            Name
        </h1>
        <h2 className='text-gray-400 text-sm truncate w-full'>
            Message
        </h2>
      </div>
    </button> 
  )
}