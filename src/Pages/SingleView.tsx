import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import DiscoverComponent from '../components/DiscoverComponent'
import { PostsModel } from '../API'
import {useNavigate, useParams} from 'react-router-dom'
import {getPost} from '../backend/queries/postQueries'
import {AuthContext} from '../components/AuthWrapper'

export default function SingleView() {
  const [project, setProjectData] = useState<React.ReactElement>()

  const { id } = useParams()

  const navigate = useNavigate()
  const userInfo = useContext(AuthContext)
  useEffect(() => {

    const getPageData =  async () => {
      if (id && userInfo && userInfo.id) {
        const { data } = await getPost({id: id})
        if (data) {
          const project = (
            <DiscoverComponent data={data.getPostsModel as PostsModel} editable={userInfo.id === data.getPostsModel?.userID}/>
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
        <div className='flex-grow flex justify-center overflow-visible'>
          <div className='max-w-screen-2xl w-full z-10 overflow-visible'>
            {project}
          </div>
        </div>
      </div>
    </div>
  )
}