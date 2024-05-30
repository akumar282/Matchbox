import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import {AuthContext} from '../components/AuthWrapper'
import {getImage} from '../backend/storage/s3'
import github from '../img/github.svg'
import {ProjectViewProps} from '../functions/sharedProps'
import {useNavigate} from 'react-router-dom'
import {listSavedPosts} from '../backend/queries/savedPostQueries'
import {SavedPostModel} from '../API'


function SavedProjectView(props: ProjectViewProps) {

  const navigate = useNavigate()

  return (
    <div>
      <button
        className=' flex flex-col items-start hover:bg-purple-300 rounded-lg mr-2 ml-2 mt-3 min-h-[170px] bg-white'
        onClick={() => navigate(`/project/${props.id}`)}
      >
        <div className='max-h-[130px] overflow-hidden'>
          <a href='#'>
            <img className='w-full h-full rounded-t-lg object-cover' src={props.image} alt='Project Thumbnail'/>
          </a>
        </div>
        <div className='p-2 flex flex-row w-full justify-between'>
          <h5 className='text-xl font-primary font-light leading-tight'>
            {props.title}
          </h5>
          <button className=''>
            <a href={props.github}>
              <img src={github} alt='GitHub Link' className='w-6 h-6' />
            </a>
          </button>
        </div>
      </button>
    </div>
  )
}
export default function SavedPosts() {

  const userInfo = useContext(AuthContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedProjects, setSavedProjects] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const getHomePageData = async () => {
      if(userInfo && userInfo.id) {
        const { data } = await listSavedPosts({
          filter: {
            userID: {
              eq: userInfo.id
            }
          }
        })
        if (data && data.listSavedPostModels && data.listSavedPostModels.items) {
          const itemsToGrab = data.listSavedPostModels.items as SavedPostModel[]
          for (const item of itemsToGrab) {
            if (item && item.postInfo) {
              const imageUrl = await getImage(item.postInfo.image_link ? item.postInfo.image_link : 'NewLogo.png')
              const mapToCard = (
                <SavedProjectView
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
    getHomePageData().catch()
  }, [])


  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div className='bg-primary-purple'>
        <div className='max-w-[1070px] min-h-[70px] mx-auto pt-2 pb-3'>
          <h1 className='text-2xl font-primary ml-4 mt-3'>Saved Projects</h1>
          <h3 className='text-sm font-primary ml-4 mt-1'>Projects that you want to look into:</h3>
        </div>
      </div>
      <div className='bg-gray-200 flex flex-grow'>
        <div className=' pt-3 pb-8 max-w-[1070px] mx-auto'>
          <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 place-items-center'>
            {/* Render Query Here */}
            {savedProjects}
          </div>
        </div>
      </div>
    </div>
  )
}