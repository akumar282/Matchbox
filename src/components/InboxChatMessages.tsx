import React from 'react'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const messages = [
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
  {
    name: 'Name',
    message: 'Message'
  },
  {
    name: 'Them',
    message: 'Message'
  },
]

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
            <h1 className='bg-gray-100 rounded p-2'>
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
      {messages.map((message, index) => (
        <ChatMessage key={index} name={message.name} message={message.message} myName={myName}/>
      ))}
    </div>
  )
}

