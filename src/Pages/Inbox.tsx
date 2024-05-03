import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import InboxChat from '../components/InboxChat'
import InboxHolder from '../components/InboxHolder'
import {API} from 'aws-amplify'
import {GraphQLQuery} from '@aws-amplify/api'
import {
  GetUsersModelQuery,
  ModelUsersConvoConnection, UsersConvo
} from '../API'
import {getUsersConversations} from '../customQueries/queries'
import {AuthContext} from '../components/AuthWrapper'

export default function Inbox() {
  const [screen, setScreen] = useState('inbox')
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)
  const [allChats, setAllChats] = useState<(UsersConvo | null)[]>([])
  const userInfo = useContext(AuthContext)

  useEffect(() => {
    const getUsersPosts = async () => {
      if(userInfo && userInfo.id) {
        const { data } = await API.graphql<GraphQLQuery<GetUsersModelQuery>>({
          query: getUsersConversations,
          variables: {id: userInfo.id},
          authMode: 'API_KEY'
        })
        if (data && data.getUsersModel) {
          const { items } = data.getUsersModel.conversations as ModelUsersConvoConnection
          setAllChats(items)
        }
      }
    }
    getUsersPosts().catch()
  }, [userInfo])


  // const inboxChatProps: InboxChatProps = {
  //   chatId: currentChatId,
  //   screenState: screen,
  //   setScreen: setScreen,
  //   currentChatId: setCurrentChatId
  // }


  return (
    <div className='h-screen bg-primary-purple flex flex-col relative overflow-hidden'>
      <NavBar />
      <div className='relative w-full h-full hidden lg:flex md:flex'>
        <div className='bg-white hidden lg:flex md:flex lg:max-w-[1300px] w-[90%] h-[90%] rounded-lg font-primary shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex w-[30%] font-primary bg-[#F9F8FC] rounded-l-lg'>
            <InboxHolder
              setScreen={setScreen}
              key={'holder-large'}
              currentChatId={setCurrentChatId}
              allChatsData={allChats as UsersConvo[]}
            />
          </div>
          <div className='w-[70%] hidden lg:flex md:flex font-primary rounded-r-lg'>
            <InboxChat chatId={currentChatId} setScreen={setScreen} currentChatId={setCurrentChatId} screenState={screen}
            />
          </div>
        </div>
      </div>
      <div className='bg-[#f3f3f3] lg:hidden md:hidden flex justify-center items-center w-full h-full overflow-hidden'>
        {screen === 'inbox' ?
          <InboxHolder
            key={'Holder'}
            allChatsData={allChats as UsersConvo[]}
            setScreen={setScreen}
            currentChatId={setCurrentChatId}
          /> :
          <InboxChat chatId={currentChatId} setScreen={setScreen} currentChatId={setCurrentChatId} screenState={screen}
          />
        }
      </div>
    </div>
  )
}