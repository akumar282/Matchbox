import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import DiscoverComponent from '../components/DiscoverComponent'
import { PostsModel } from '../API'
import {useNavigate, useParams} from 'react-router-dom'
import {getPost} from '../backend/queries/postQueries'

export default function SingleView() {
  const [project, setProjectData] = useState<React.ReactElement>()

  const { id } = useParams()

  const navigate = useNavigate()
  useEffect(() => {

    const getPageData =  async () => {
      if (id) {
        const { data } = await getPost({id: id})
        if (data) {
          console.log(data)
          const project = (
            <DiscoverComponent data={data.getPostsModel as PostsModel}/>
          )
          setProjectData(project)
        }
      } else {
        navigate('/404')
      }
    }

    getPageData().catch(x => console.log(x))

  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar/>
      <div className='flex flex-col flex-grow justify-between bg-primary-purple'>
        <div className='flex-grow flex  justify-center overflow-visible'>
          <div className='max-w-screen-2xl w-full z-10 overflow-visible'>
            {project}
          </div>
        </div>
      </div>
    </div>
  )
}