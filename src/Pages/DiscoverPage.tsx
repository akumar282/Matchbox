import React from 'react'
import NavBar from '../components/NavBar'
import DiscoverComponent from '../components/DiscoverComponent'
import {LanguageTag, PostsModel} from '@api'
export default function DiscoverPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='flex flex-grow bg-gray-300'>
        <div className='lg:max-w-[1070px] w-screen min-h-[200px] mx-auto'>
          <DiscoverComponent />
        </div>
      </div>

    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExamplePost : PostsModel = {
  __typename: 'PostsModel',
  createdAt: '3123',
  updatedAt: '234234',
  id: '293asd3232d32',
  post_title: 'Matchbox',
  description: 'Project discovery platform',
  long_description: 'Project discovery platform',
  project_link: 'https://github.com/akumar282/Matchbox',
  image_link: 'image_key',
  post_date: '2023-12-02T03:04:07-08:00',
  userID: '293asd3232d324',
  creator_name: 'Lightning McQueen',
  lang_tag: ['TYPESCRIPT' as LanguageTag],
  project_chat:'3423423'
}