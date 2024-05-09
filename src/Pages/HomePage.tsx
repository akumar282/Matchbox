import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import { TrendIcon, FlaskIcon, MLIcon, CloudIcon } from '../components/Vectors'
import CategoryButton from '../components/CategoryButton'
import { useNavigate } from 'react-router-dom'
import SeeAllComponent from '../components/SeeAll'
import Saved from '../img/Saved.svg'
import group from '../img/group.svg'
import {AuthContext} from '../components/AuthWrapper'
import {getImage} from '../backend/storage/s3'
import ProjectView from '../components/ProjectView'
import {listSavedPosts} from '../backend/queries/savedPostQueries'
import {ModelJoinedPostModelConnection, ModelSavedPostModelConnection} from '../API'
import {listJoinedPosts} from '../backend/queries/joinedPostQueries'

export default function HomePage() {

  const userInfo = useContext(AuthContext)

  const [joinedProjects, setJoinedProjects] = useState<React.ReactNode[]>([
    <SeeAllComponent key={'End'} linkTo={'saved'} image={group} bodyText={'Your joined projects will appear here so you can choose which to work on'}/>
  ])

  const [savedProjects, setSavedProjects] = useState<React.ReactNode[]>([
    <SeeAllComponent key={'End'} linkTo={'saved'} image={Saved} bodyText={'Your saved projects will appear here so you can choose which to work on'}/>
  ])
  const navigate = useNavigate()

  useEffect(() => {
    const getHomePageSavedData = async () => {
      if(userInfo && userInfo.id) {
        const { data } = await listSavedPosts({
          filter: {
            userID: {
              eq: userInfo.id
            }
          }
        })
        if (data && data.listSavedPostModels && data.listSavedPostModels.items) {
          const { items } = data.listSavedPostModels as ModelSavedPostModelConnection
          for (const item of items) {
            if (item && item.postInfo) {
              const imageUrl = await getImage(item.postInfo.image_link ? item.postInfo.image_link : 'NewLogo.png')
              const mapToCard = (
                <ProjectView
                  id={item.postInfo.id}
                  key={item.postInfo.id}
                  title={item.postInfo.post_title}
                  image={imageUrl}
                  github={item.postInfo.project_link ? item.postInfo.project_link : 'https://github.com'}
                />
              )
              setSavedProjects((prevProjects) => [mapToCard, ...prevProjects])
            }
          }
        }
      }
    }

    const getHomePageJoinedData = async () => {
      if(userInfo && userInfo.id) {
        const { data } = await listJoinedPosts({
          filter: {
            userID: {
              eq: userInfo.id
            }
          }
        })
        if (data && data.listJoinedPostModels && data.listJoinedPostModels.items) {
          const { items } = data.listJoinedPostModels as ModelJoinedPostModelConnection
          for (const item of items) {
            if (item && item.postInfo) {
              const imageUrl = await getImage(item.postInfo.image_link ? item.postInfo.image_link : 'NewLogo.png')
              const mapToCard = (
                <ProjectView
                  id={item.postInfo.id}
                  key={item.postInfo.id}
                  title={item.postInfo.post_title}
                  image={imageUrl}
                  github={item.postInfo.project_link ? item.postInfo.project_link : 'https://github.com'}
                />
              )
              setJoinedProjects((prevProjects) => [mapToCard, ...prevProjects])
            }
          }
        }
      }
    }

    getHomePageSavedData().catch()
    getHomePageJoinedData().catch()
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='bg-primary-purple flex justify-center'>
        <div className='my-3 items-start'>
          <h1 className='lg:text-3xl md:text-2xl font-secondary text-xl ml-4 mb-4 mt-2'>Welcome Back, {userInfo?.userName}!</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 auto-cols-max text-start'>
            <CategoryButton bordercolor='border-r-rose-400' titleLabel='Trending Projects' imageIcon={() => <TrendIcon className='h-8 w-8' viewBox='0 0 24 24' />} />
            <CategoryButton bordercolor='border-r-violet-400' titleLabel='Open Source Frameworks' onClick={() => navigate('/browse/frameworks')} imageIcon={() => <FlaskIcon className='h-8 w-8 text-black' viewBox='0 0 24 24' />} />
            <CategoryButton bordercolor='border-r-yellow-300' titleLabel='Machine Learning/AI&#8197;&#8197;&#8197;' onClick={() => navigate('/browse/ai_mach')} imageIcon={() => <MLIcon className='h-8 w-8' viewBox='0 0 24 24' />} />
            <CategoryButton bordercolor='border-r-green-300' titleLabel='Cloud Computing&#8197;' onClick={() => navigate('/browse/cloud_computing')} imageIcon={() => <CloudIcon className='h-8 w-8' viewBox='0 0 24 24' />} />
          </div>
        </div>
      </div>
      <div className='bg-gray-200 flex-grow'>
        <div className='max-w-[1070px] min-h-[200px] mx-auto pt-4'>
          <h1 className='text-2xl font-primary ml-3 mt-3'>Get Started</h1>
          <h3 className='text-sm font-primary ml-3 mt-1'>Post your own project and build with community!</h3>
          <div className='w-full h-full flex items-center my-2 '>
            <button onClick={() => navigate('/create-project')} className='border-4 shadow-lg border-dashed hover:bg-purple-300 border-purple-500 lg:h-44 h-28 rounded-[20px]  w-[97%] mx-auto flex flex-col items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none' viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-9 h-9 text-color-white'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <h1 className='text-lg mt-1 font-primary'>Create Project</h1>
            </button>
          </div>
        </div>
        <div className='items-start pt-3  max-w-[1070px] mx-auto'>
          <h1 className='text-2xl font-primary ml-3 mt-3'>Saved Projects</h1>
          <h3 className='text-sm font-primary ml-3 mt-1'>Projects that you want to look into:</h3>
          <div className='overflow-x-auto'>
            <div className='flex mt-2 pb-1 lg:grid lg:grid-cols-4 md:grid-cols-4'>
              {savedProjects}
            </div>
          </div>
        </div>
        <div className='items-start pt-3 pb-8 max-w-[1070px] mx-auto'>
          <h1 className='text-2xl font-primary ml-3 mt-3'>Joined Projects</h1>
          <h3 className='text-sm font-primary ml-3 mt-1'>Projects that you are currently contributing to:</h3>
          <div className='overflow-x-auto'>
            <div className='flex mt-2 lg:grid lg:grid-cols-4 md:grid-cols-4'>
              {/* Render Query Here */}
              {joinedProjects}
            </div>
          </div>
        </div>
        <h1></h1>
      </div>
      <div className='bg-secondary-blue flex flex-col static bottom-0 items-center justify-center'>
        <div>
          <h1 className='text-base font-primary text-center text-white py-4 px-5'>Copyright © 2023 GitMatch</h1>
        </div>
      </div>
    </div>
  )
}