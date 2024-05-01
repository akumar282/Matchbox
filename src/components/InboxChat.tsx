import React, {useContext, useEffect, useState} from 'react'
import InboxChatMessages from './InboxChatMessages'
import {API} from 'aws-amplify'
import {GraphQLQuery} from '@aws-amplify/api'
import {GetConversationModelQuery, MessageModel, ModelMessageModelConnection} from '../API'
import {getMessagesQuery} from '../customQueries/queries'
import {AuthContext} from './AuthWrapper'


export interface InboxChatProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>
  currentChatId: React.Dispatch<React.SetStateAction<string | null>>
  chatId: string | null
  screenState: string
}

export default function InboxChat(props: InboxChatProps) {

  const [allMessages, setAllMessages] = useState<(MessageModel | null)[]>([])
  const userInfo = useContext(AuthContext)
  function handleBack() {
    console.log('back')
    props.setScreen('inbox')
  }

  useEffect(() => {

    const getMessagesForConversation = async () => {
      console.log('Chat ID in useEffect:', props.chatId)
      if(props.chatId) {
        const { data } = await API.graphql<GraphQLQuery<GetConversationModelQuery>>({
          query: getMessagesQuery,
          variables: {id: props.chatId},
          authMode: 'API_KEY'
        })
        if (data && data.getConversationModel) {
          const { items } = data.getConversationModel.messages as ModelMessageModelConnection
          console.log(items)
          setAllMessages(items)
        }
      }
    }
    getMessagesForConversation().catch()

  }, [props.chatId, props.screenState])
  
  return (
    <main className='relative flex flex-col w-full h-full p-4'>
      <div className='flex justify-between items-center gap-1 border-b-2'>
        <div className='flex justify-start items-center gap-1'>
        </div>
        <button className='text-black rounded p-2'
          onClick={() => handleBack()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>

        </button>
      </div>
      {!props.chatId ?
        <div className="flex flex-col items-center flex-grow overflow-y-auto overflow-hidden">
          <h3 className='pt-32'>
            Select a Conversation
          </h3>
        </div>
        :
        <div className="flex flex-col flex-grow overflow-y-auto overflow-hidden">
          {props.chatId}
          {allMessages
            .sort((a, b) => {
              if (a === null) return 1
              if (b === null) return -1
              if (a.createdAt < b.createdAt) return -1
              if (a.createdAt > b.createdAt) return 1
              return 0
            })
            .map((message) => {
              if (message === null) return null
              return (
                <InboxChatMessages
                  key={message.id}
                  name={message.from}
                  message={message.message}
                  senderId={message.from}
                  loggedInUserId={userInfo!.id}
                />
              )
            })
          }
        </div>
      }

      <div className="flex justify-center items-center gap-2 pt-2">
        <input type="text" placeholder="Type a message..." className='border-2 border-gray-100 rounded-lg w-full p-2' />
        <button className='bg-primary-purple text-white rounded p-2'>
          Send
        </button>
      </div>
    </main>
  )
}
