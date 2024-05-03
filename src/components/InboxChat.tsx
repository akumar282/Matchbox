import React, {useContext, useEffect, useRef, useState} from 'react'
import InboxChatMessages from './InboxChatMessages'
import {API} from 'aws-amplify'
import {GraphQLQuery} from '@aws-amplify/api'
import {
  GetConversationModelQuery,
  MessageModel,
  ModelMessageModelConnection,
} from '../API'
import {getMessagesQuery} from '../customQueries/queries'
import {AuthContext} from './AuthWrapper'
import {createMessageSubscription} from '../backend/subscriptions/subscriptions'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {createMessage} from '../backend/mutations/messageMutations'

export interface InboxChatProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>
  currentChatId: React.Dispatch<React.SetStateAction<string | null>>
  chatId: string | null
  screenState: string
}

export default function InboxChat(props: InboxChatProps) {

  const [allMessages, setAllMessages] = useState<(MessageModel | null)[]>([])
  const userInfo = useContext(AuthContext)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  function handleBack() {
    props.setScreen('inbox')
  }

  useEffect(() => {
    const getMessagesForConversation = async () => {
      if(props.chatId) {
        const { data } = await API.graphql<GraphQLQuery<GetConversationModelQuery>>({
          query: getMessagesQuery,
          variables: {id: props.chatId},
          authMode: 'API_KEY'
        })
        if (data && data.getConversationModel) {
          const { items } = data.getConversationModel.messages as ModelMessageModelConnection
          setAllMessages(items)
        }
      }
    }
    getMessagesForConversation().catch()
  }, [props.chatId, props.screenState])

  useEffect(() => {
    if(props.chatId) {
      const subscription = createMessageSubscription((value) => {
        const updatedMessages = value.data.onCreateMessageModel ? [...allMessages, value.data.onCreateMessageModel] : allMessages
        setAllMessages(updatedMessages)
      },
      {
        filter: {
          conversationID: {
            eq: props.chatId
          }
        }
      })
      return () => subscription.unsubscribe()
    }
  }, [props.chatId, allMessages])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [allMessages, props.screenState])

  const validationSchema = yup.object({
    message: yup
      .string()
      .min(3, 'Message should be a minimum of 1 character')
      .required('Message is required')
  })

  const formik = useFormik({
    initialValues: {
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createMessage({
        input: {
          conversationID: props.chatId !== null ? props.chatId : 'noConversationId',
          from: userInfo !== undefined ? userInfo.id : 'noUserId',
          message_date: new Date().toISOString(),
          message: values.message
        }
      })
      values.message = ''
    },
  })

  
  return (
    <main className='relative flex flex-col w-full h-full p-4'>
      <div className='flex justify-between items-center gap-1 border-b-2'>
        <div className='flex justify-start items-center gap-1'>
        </div>
        <button className='text-black rounded p-2'
          onClick={() => handleBack()}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3' />
          </svg>
        </button>
      </div>
      {!props.chatId ?
        <div className='flex flex-col items-center flex-grow overflow-y-auto overflow-hidden'>
          <h3 className='pt-32'>
            Select a Conversation
          </h3>
        </div>
        :
        <div ref={chatContainerRef} className='flex flex-col flex-grow font-primary overflow-y-auto overflow-auto text-wrap'>
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

      <form onSubmit={formik.handleSubmit}>
        <div className='flex justify-center items-center gap-2 pt-2'>
          <input
            type='text'
            placeholder='Type a message...'
            value={formik.values.message}
            onChange={formik.handleChange}
            id='message'
            className='border-2 border-gray-100 rounded-lg w-full p-2'
          />
          <button className='bg-blue-600 text-white rounded p-2' onClick={() => formik.handleSubmit} type='submit'>
            Send
          </button>
        </div>
      </form>
    </main>
  )
}
