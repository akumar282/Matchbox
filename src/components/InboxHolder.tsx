import React, {useCallback, useState} from 'react'
import {UsersConvo} from '../API'
import InboxMessage from './InboxMessage'

interface InboxHolderProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>,
  currentChatId: React.Dispatch<React.SetStateAction<string | null>>
  allChatsData: UsersConvo[]
}

export default function InboxHolder(props: InboxHolderProps) {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  const handleChatSelection = useCallback((id: string | null) => {
    if (selectedChatId !== id) {
      setSelectedChatId(id)
      props.currentChatId(id)
    }
  }, [selectedChatId])

  return (
    <main className='w-full h-full flex flex-col overflow-hidden'>
      <div className='px-4 pt-4 flex flex-col gap-4'>
        <h1 className='font-bold text-xl'>
          Recent Chats
        </h1>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          type='text'
          name='search'
          id='search'
          className='border-2 border-gray-100 rounded-lg w-full p-2'
          placeholder='Search Messages'
        />
      </div>
      <div className='flex-grow w-full p-4 flex flex-col gap-2 overflow-hidden'>
        <h1>
          Conversations
        </h1>
        <div className='overflow-y-auto overflow-x-hidden h-full'>
          <div className='grid grid-cols-1 divide-y w-full'>
            {props.allChatsData.map((x) =>
              <InboxMessage
                currentChatId={props.currentChatId}
                setScreen={props.setScreen}
                key={x.conversationModel.id}
                chatData={x}
                isSelected={selectedChatId === x.conversationModel.id}
                onSelectChat={handleChatSelection}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
