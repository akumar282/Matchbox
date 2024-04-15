import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {AuthContext} from '../components/AuthWrapper'
import {getPost} from '../backend/queries/postQueries'
import {PostsModel} from '../API'
import NavBar from '../components/NavBar'
import IssuesTable from '../components/IssuesTable'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProjectJoined(props) {

  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userInfo = useContext(AuthContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectData, setProjectData] = React.useState<PostsModel>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [testvar, setTestVar] = React.useState<Response>()

  useEffect(() => {
    const getProjectData = async () => {
      if (id) {
        const { data } = await getPost({id: id})
        setProjectData(data?.getPostsModel as PostsModel)
      }
      const test = await fetch('https://api.github.com/users/mohazahid/followers')
      const json = await test.json()
      setTestVar(json)
    }

    getProjectData().catch()
  }, [])

  return (
    <div className='flex flex-col'>
      <NavBar/>
      <div className='flex justify-center bg-primary-purple h-screen  w-full'>
        <div className='max-w-[1070px] flex-grow pt-8 justify-center'>
          <IssuesTable/>
        </div>
      </div>
    </div>
  )
}