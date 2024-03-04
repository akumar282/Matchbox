/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import DiscoverComponent from '../components/DiscoverComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import fallback from './fallback/fallback.json'
import {PostsModel} from '../API'
import LoadingScreen from '../components/LoadingScreen'
import { AuthContext } from '../components/AuthWrapper'

// TODO: Add data and image fetching

export default function DiscoverPage() {

  const [projectIndex, setProjectIndex] = useState<number>(0)
  const [projects, setProjects] = useState<React.ReactNode[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [my_swiper, set_my_swiper] = useState({})
  const userInfo = useContext(AuthContext)

  useEffect(() => {
    const getProjects = async () => {
      const sessionData = sessionStorage.getItem('projectsData')
      if (sessionData) {
        const projectsData = JSON.parse(sessionData)
        const updatedProjects = projectsData.map((x) => <DiscoverComponent key={x.id} data={x} />)
        setProjects(updatedProjects)
        setLoading(false)
      } else {
        try {
          const dynamoUserId = userInfo?.id
          const responseJson = await (await fetch(`https://3q03neb3ig.execute-api.us-west-2.amazonaws.com/prod/matches/${dynamoUserId}`)).json()
          const mappedItems = (responseJson.data.items as PostsModel[]).map(x => <DiscoverComponent key={x.id} data={x} />)
          setProjects(mappedItems)
          setLoading(false)
          sessionStorage.setItem('projectsData', JSON.stringify(responseJson.data.items))
        } catch (e) {
          console.log(e + ' Falling back to existing json')
          const ExampleData = fallback.data.items as unknown as PostsModel[]
          const updatedProjects = ExampleData.map((x) => <DiscoverComponent key={x.id} data={x} />)
          setProjects(updatedProjects)
          setLoading(false)
        }
      }
    }
    getProjects().catch(console.error)
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div className='flex flex-col flex-grow justify-between bg-primary-purple'>
          <div className='flex-grow flex  justify-center overflow-visible'>
            <div className='max-w-screen-2xl w-full z-10 overflow-visible'>
              <div className='flex items-center justify-center relative h-8'>
                <div className='swiper-pagination'></div>
              </div>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
                loop={true}
                autoHeight={true}
                pagination={{
                  el: '.swiper-pagination',
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
                {/* come back to figure out a fixed item */}
                <button
                  className='absolute z-50 right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 shadow-md hidden lg:flex'
                  onClick={() => my_swiper.slideNext()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                  </svg>
                </button>
                <button
                  className='absolute z-50 left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 shadow-md hidden lg:flex'
                  onClick={() => my_swiper.slidePrev()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                  </svg>
                </button>
              </Swiper>
            </div>
          </div>
          <div className='h-12'>
            <div className='fixed bg-white grow-0 flex pt-3 bottom-0 mt-4 justify-center w-full z-50'>
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
    </div>
  )
}
