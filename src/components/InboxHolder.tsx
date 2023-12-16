import React from 'react'

export default function InboxHolder(props: {setScreen: React.Dispatch<React.SetStateAction<string>>}) {
  function InboxMessage() {
    function handleBack() {
      console.log('back')
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
              Nametfasdfsfsd
          </h1>
          <h2 className='text-gray-400 text-sm truncate w-full'>
              Message
          </h2>
        </div>
      </button> 
    )
  }
  return ( 
    <main className='w-full h-full font-primary flex flex-col'>
      <div className='px-4 pt-4 flex flex-col gap-4 relative'>
        <h1 className='font-bold text-xl'>
          Recent Chats
        </h1>
        <label htmlFor="search" className="sr-only">
            Search
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="border-2 border-gray-100 w-full p-2"
          placeholder="Search Messages"
        />
      </div>
      <div className='flex-grow w-full p-4 flex flex-col gap-2 overflow-auto'>
        <h1>
            Conversations
        </h1>
        <div className='overflow-auto'>
          <div className='grid grid-cols-1 divide-y w-full'>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
            <InboxMessage/>
          </div>
        </div>
      </div>
    </main> 
  )
}
