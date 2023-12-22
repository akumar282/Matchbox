import React from 'react'
import InboxMessage from './InboxMessage'
export default function InboxHolder(props: {setScreen: React.Dispatch<React.SetStateAction<string>>}) {

  // TODO: This should be its own component
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
            <InboxMessage setScreen={props.setScreen}/>
            <InboxMessage setScreen={props.setScreen}/>
          </div>
        </div>
      </div>
    </main> 
  )
}
