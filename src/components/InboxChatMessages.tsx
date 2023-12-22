import React from 'react'

type Message = {
    from: string;
    message: string;
    message_date?: string;
  }
  interface InboxChatProps {
    messages: Message[]
  }
export default function InboxChatMessages(props: InboxChatProps) {

  
  function ChatMessage(props: {from: string, message: string}) {
    //swap this out with the user's username
    const myName = 'John Doe'
    if (props.from === myName) {
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

  return (
    <div className='flex flex-col gap-4 p-4'>
      {props.messages.map((message, index) => (
        <ChatMessage key={index} from={message.from} message={message.message}/>
      ))}
    </div>
  )
}

