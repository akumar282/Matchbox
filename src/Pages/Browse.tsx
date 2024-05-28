import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import {AuthContext} from '../components/AuthWrapper'
import {listPosts, searchPosts} from '../backend/queries/postQueries'
import {useNavigate, useParams} from 'react-router-dom'
import {cloudComputing, frameworks, machineLearning} from '../functions/queryVars'
import BrowseComponent from '../components/BrowseComponent'
import {PostsModel, SearchablePostsModelSortableFields, SearchableSortDirection} from '../API'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mapQueryVars(params: string) {
  switch (params) {
    case 'frameworks': {
      return frameworks
    }
    case 'ai_mach': {
      return machineLearning
    }
    case 'cloud_computing': {
      return cloudComputing
    }
    default:
      return {}
  }
}
export default function Browse() {

  const { params } = useParams()
  const navigate = useNavigate()
  const [projects, setProjects] = useState<React.ReactNode[]>([])
  const userInfo = useContext(AuthContext)

  useEffect(() => {

    const getHomePageData = async () => {


      if (params) {

        const queryVars = mapQueryVars(params)

        if (userInfo && userInfo.id) {
          if(params === 'trending') {
            const { data } = await searchPosts({
              sort: [{field: SearchablePostsModelSortableFields.likes, direction: SearchableSortDirection.desc} ],
              filter: {
                userID: {
                  ne: userInfo.id
                }
              }
            })
            if (data && data.searchPostsModels && data.searchPostsModels.items) {
              data.searchPostsModels.items.forEach((x, index) => {
                const mapToCard = (
                  <BrowseComponent key={index} data={x as PostsModel}/>
                )
                setProjects((prevProjects) => [mapToCard, ...prevProjects])
              })
            }
          } else {
            const { data } = await listPosts(
              {
                filter: {
                  and: [
                    {
                      userID: {
                        ne: userInfo.id
                      }
                    },
                    queryVars
                  ]
                }
              }
            )
            if (data && data.listPostsModels && data.listPostsModels.items) {
              data.listPostsModels.items.forEach((x, index) => {
                const mapToCard = (
                  <BrowseComponent key={index} data={x as PostsModel}/>
                )
                setProjects((prevProjects) => [mapToCard, ...prevProjects])
              })
            }
          }
        }
      } else {
        navigate('/404')
      }
    }

    getHomePageData().catch()

  }, [])

  return (
    <div className='flex flex-col h-screen'>
      <NavBar/>
      <div className='bg-primary-purple'>
        <div className='max-w-[1070px] min-h-[70px] mx-auto pt-2 pb-3'>
          <h1 className='text-2xl font-primary ml-4 mt-3'>Browse Projects</h1>
        </div>
      </div>
      <div className='bg-gray-200 flex flex-grow overflow-hidden'>
        <div className='pt-3 pb-8 max-w-[1070px] flex items-center flex-col mx-auto h-full'>
          <div className='overflow-auto w-full h-full hide-scrollbar'>
            {projects.reverse()}
          </div>
        </div>
      </div>
    </div>
  )
}