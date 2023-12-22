import React from 'react'


export default function InboxChatMessages() {

  function ChatMessage(props: {name: string, message: string, myName: string}) {
    if (props.name === props.myName) {
      return (
        <div className='flex flex-col gap-1'>
          <div className='flex justify-end'>
            <h1 className='bg-primary-purple text-white rounded p-2'>
              {props.message}
            </h1>
          </div>
        </div>
      )
    } else {
      return (
        <div className='flex flex-col gap-1'>
          <div className='flex justify-start'>
            <h1 className='lg:bg-gray-100 md:bg-gray-100 bg-blue-500 lg:text-black md:text-black text-white rounded p-2'>
              {props.message}
            </h1>
          </div>
        </div>
      )
    }
  }

  const myName = 'Name'
  return (
    <div className='flex flex-col gap-4 p-4'>

    </div>
  )
}

