import React from 'react'
import NavBar from '../components/NavBar'
import DiscoverComponent from '../components/DiscoverComponent'
import {
  CloudProviderTag,
  DevelopmentTag,
  DifficultyTag,
  FrameworkTag,
  InterestTag,
  LanguageTag,
  PostsModel,
  SizeTag
} from '@api'
export default function DiscoverPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='flex flex-col flex-grow justify-between bg-primary-purple'>
        <div className='mx-auto'>
          <DiscoverComponent data={ExamplePost} />
        </div>
        <div className='bg-white grow-0 flex pt-3 static bottom-0 mt-4 justify-center w-full'>
          <div className='flex font-primary space-x-3 text-lg flex-row'>
            <button
              className='py-1 px-6 mb-3 bg-gray-300 hover:bg-gray-200 rounded-full'
            >Back
            </button>
            <button
              className='py-1 px-6 mb-3 bg-blue-700 hover:bg-blue-400 rounded-full text-white'
            >Next
            </button>
          </div>
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
  long_description: `Matchbox is a web cloud application that allows users to specify their background, experience, 
  and interests. The application connects the user with projects submitted by other developers that align with their 
  values and background through our filtering algorithm. Matchbox empowers developers with the ability to instantly 
  discover projects that they are excited to contribute to.`,
  project_link: 'https://github.com/akumar282/Matchbox',
  image_link: 'image_key',
  post_date: '2023-12-02T03:04:07-08:00',
  userID: '293asd3232d324',
  creator_name: 'Lightning McQueen',
  lang_tag: ['TYPESCRIPT' as LanguageTag],
  framework_tag: ['FLASK', 'EXPRESS', 'ANGULAR_JS',  ] as FrameworkTag[],
  dev_type_tag: ['COMPUTING' as DevelopmentTag],
  cloud_provider_tag: ['AMAZON_WEB_SERVICES' as CloudProviderTag],
  interest_tag: ['LIFESTYLE' as InterestTag],
  difficulty_tag: ['GOOD_FIRST_PROJECT' as DifficultyTag],
  size_tag: ['SMALL' as SizeTag],
  project_chat:'3423423'
}