import React from 'react'


interface ChatMessageProps {
  name: string
  message: string
  senderId: string
  loggedInUserId: string
}

export default function InboxChatMessages(props: ChatMessageProps) {

  return (
    <div className='flex flex-col gap-4 pr-4 py-1'>
      {props.loggedInUserId === props.senderId ?
        <div className='flex flex-col gap-1'>
          <div className='flex justify-end'>
            <h1 className='bg-purple-600 text-white rounded-lg p-2'>
              {props.message}
            </h1>
          </div>
        </div>
        :
        <div className='flex flex-col gap-1'>
          <div className='flex justify-start'>
            <h1
              className='lg:bg-gray-100 md:bg-gray-100 bg-blue-500 lg:text-black md:text-black text-white rounded p-2'>
              {props.message}
            </h1>
          </div>
        </div>
      }
    </div>
  )
}

