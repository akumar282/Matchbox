/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import DiscoverComponent from '../components/DiscoverComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

// import { Carousel } from '@material-tailwind/react'
import { Carousel} from '@material-tailwind/react'
import { ThemeProvider } from '@material-tailwind/react'
import {
  CloudProviderTag,
  DevelopmentTag,
  DifficultyTag,
  FrameworkTag,
  InterestTag,
  LanguageTag,
  PostsModel,
  SizeTag,
} from '@api'


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

const ExamplePost2 : PostsModel = {
  __typename: 'PostsModel',
  createdAt: '3123',
  updatedAt: '234234',
  id: '293asd3232d32',
  post_title: 'Matchbox2',
  description: 'Project discovery platform',
  long_description: `Matchbox is a web cloud application that allows users to specify their background, experience, 
  and interests. The application connects the user with projects submitted by other developers that align with their 
  values and background through our filtering algorithm. Matchbox empowers developers with the ability to instantly 
  discover projects that they are excited to contribute to.
  Matchbox is a web cloud application that allows users to specify their background, experience, 
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

const ExampleData : PostsModel[] = [
  ExamplePost,
  ExamplePost2
]
export default function DiscoverPage() {
  const [projectIndex, setProjectIndex] = useState<number>(0)
  const [projects, setProjects] = useState<React.ReactNode[]>([])
  const [my_swiper, set_my_swiper] = useState({})

  useEffect(() => {
    const updatedProjects = ExampleData.map((x) => <DiscoverComponent key={x.id} data={x} />)
    setProjects(updatedProjects)
  }, [])
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='flex flex-col flex-grow justify-between bg-primary-purple'>
        <div className='flex-grow flex  justify-center overflow-visible'>
          <div className='max-w-screen-2xl w-full z-10 overflow-visible'>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation ={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev'
              }}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              onSlideChange={(swiper) => {
                setProjectIndex(swiper.activeIndex)
              }}
              onInit={(ev) => {
                set_my_swiper(ev)
              }}
              className='relative z-10'
            >
              {projects.map((x, index) => (
                <SwiperSlide className='z-1' key={index}>{x}</SwiperSlide>
              ))}
              <button className='absolute z-50 right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 shadow-md hidden lg:flex'
                onClick={() => my_swiper.slideNext()}
              > 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              <button className='absolute z-50 left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 shadow-md hidden lg:flex'
                onClick={() => my_swiper.slidePrev()}
              > 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </Swiper>
          </div>
        </div>
        
        <div className='bg-white grow-0 flex pt-3 static bottom-0 mt-4 justify-center w-full'>
          <div className='flex font-primary space-x-3 text-lg flex-row'>
            <button
              className='py-1 px-6 mb-3 bg-gray-300 hover:bg-gray-200 rounded-full'
              onClick={() => my_swiper.slidePrev()}
            >
              Back
            </button>
            <button
              className='py-1 px-6 mb-3 bg-blue-700 hover:bg-blue-400 rounded-full text-white'
              onClick={() => my_swiper.slideNext()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars