import React from 'react'
import InboxChatMessages from './InboxChatMessages'

export default function InboxChat(props: {setScreen: React.Dispatch<React.SetStateAction<string>>}) {
  function handleBack() {
    console.log('back')
    props.setScreen('inbox')
  }
  
  return (
    <main className='flex flex-col w-full h-full p-4'>
      <div className='flex justify-start items-center gap-1 border-b-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h1>
            Name
        </h1>
        <button className='bg-primary-purple text-white rounded p-2'
          onClick={() => handleBack()}
        >
          Back
        </button>
      </div>
      <div className='flex flex-col overflow-y-auto flex-grow'>
        <InboxChatMessages />
      </div>
      <div className='flex justify-center items-center gap-2 pt-2'>
        <input type="text" placeholder='Type a message...' className='border-2 border-gray-100 w-full p-2' />
        <button className='bg-primary-purple text-white rounded p-2'>
          Send
        </button>
      </div>
    </main>
  )
}
