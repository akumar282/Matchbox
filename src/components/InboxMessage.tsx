import React, {useEffect, useRef, useState} from 'react'
import {UsersConvo} from '../API'
import {API} from 'aws-amplify'
import {GraphQLQuery} from '@aws-amplify/api'
import {listUserConvoCustom} from '../customQueries/queries'
import {ListUsersConvosQueryCustom} from '../backend/types'

interface InboxMessageProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>
  currentChatId: React.Dispatch<React.SetStateAction<string | null>>
  isSelected: boolean
  onSelectChat: (id: string | null) => void
  chatData: UsersConvo
}

export default function InboxMessage(props: InboxMessageProps) {
  const convoRef = useRef<HTMLButtonElement>(null)
  const [altTitle, setAltTitle] = useState<string | null>( null)

  function handleClickToChat() {
    props.setScreen('chat')
    props.currentChatId(props.chatData.conversationModel.id)
    props.onSelectChat(props.chatData.conversationModel.id)
  }

  useEffect(() => {
    const useTitle = async () => {
      let determineTitle = ''
      const { data } = await API.graphql<GraphQLQuery<ListUsersConvosQueryCustom>>({
        query: listUserConvoCustom,
        variables: {
          filter: {
            conversationModelID: {
              eq: props.chatData.conversationModel.id
            }
          }},
        authMode: 'API_KEY'
      })
      if(data && data.listUsersConvos && data.listUsersConvos.items) {
        data.listUsersConvos.items.forEach((x) => {
          determineTitle += x?.usersModel.user_name
        })
      }
      setAltTitle(determineTitle)
    }

    if(props.chatData.conversationModel.title === null) {
      useTitle().catch()
    }
  }, [])


  return (
    <button
      ref={convoRef}
      onClick={handleClickToChat}
      className={`w-full h-max flex items-center gap-4 py-1 hover:bg-[#ececec] rounded-lg ${props.isSelected ? 'bg-[#ececec]' : ''}`}
    >
      <div className='pl-2 flex flex-row items-center space-x-2'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
          className='w-[3rem]'>
          <path strokeLinecap='round' strokeLinejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'/>
        </svg>
        <div className='flex flex-col gap-2 text-start overflow-hidden w-full'>
          <h1 className='truncate overflow-hidden text-ellipsis w-full'>
            {props.chatData.conversationModel.title === null ? altTitle : props.chatData.conversationModel.title}
          </h1>
        </div>
      </div>
    </button>
  )
}