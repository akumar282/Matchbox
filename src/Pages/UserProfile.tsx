import React, {useContext, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import ProfileHeader from '../components/ProfileHeader'
import {getUser} from '../backend/queries/userQueries'
import {AuthContext} from '../components/AuthWrapper'
import {GetUsersModelQuery, ModelPostsModelConnection, SearchableAggregateScalarResult, UsersModel} from '../API'
import {getImage} from '../backend/storage/s3'
import {aggregatePosts} from '../backend/queries/postQueries'
import {API} from 'aws-amplify'
import {GraphQLQuery} from '@aws-amplify/api'
import {paginatedPostsQuery} from '../customQueries/queries'
import ProjectView from '../components/ProjectView'
import {useNavigate, useParams} from 'react-router-dom'

export default function UserProfile() {

  const userInfo = useContext(AuthContext)
  const [userData, setUserData] = React.useState<UsersModel>()
  const [profilePic, setProfilePic] = React.useState<string>()
  const [postsNum, setPostsNum] = React.useState<number>()
  const [userProjects, setUserProjects] = useState<React.ReactNode[]>([])
  const [editable, setEditable] = useState<boolean>(false)


  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    let currentId
    if (location.pathname.includes('/view/profile/')) {
      currentId = id
    } else {
      currentId = userInfo!.id
    }


    const getData = async () => {
      const { data } = await getUser({id: currentId})
      setUserData(data?.getUsersModel as UsersModel)
      if (data && data.getUsersModel) {
        data.getUsersModel.profile_image ? setProfilePic(await getImage(data.getUsersModel.profile_image)) : setProfilePic(await getImage())
        setEditable(userInfo!.id === data.getUsersModel.id)
      }
    }

    const aggregateData = async  () => {
      const { data } = await aggregatePosts({id: currentId})
      if (data && data.searchPostsModels) {
        const { value } = data?.searchPostsModels?.aggregateItems[0]?.result as SearchableAggregateScalarResult
        setPostsNum(value)
      }
    }

    const getUsersPosts = async () => {
      const { data } = await API.graphql<GraphQLQuery<GetUsersModelQuery>>({
        query: paginatedPostsQuery,
        variables: {id: currentId},
        authMode: 'API_KEY'
      })
      if (data && data.getUsersModel) {
        const { items } = data.getUsersModel.user_posts as ModelPostsModelConnection
        const newProjects: React.ReactNode[] = []
        for (const item of items) {
          if(item) {
            const imageUrl = await getImage(item.image_link ?? undefined)
            const mapToCard = (
              <ProjectView key={item.id} id={item.id} title={item.post_title} image={imageUrl} github={item.project_link!}/>
            )
            newProjects.push(mapToCard)
          }
        }
        setUserProjects(newProjects)
      }
    }

    getData().catch()
    aggregateData().catch()
    getUsersPosts().catch()


  }, [id, location.pathname])

  return (
    <div className='bg-primary-purple flex flex-col min-h-screen relative overflow-hidden'>
      <NavBar/>
      <div className='max-w-[1070px] mx-auto w-[97%] flex-grow flex flex-col rounded-lg mt-4 mb-10'>
        <h1></h1>
        {userData ? (
          <ProfileHeader data={userData} picture={profilePic!} postsNum={postsNum ?? 0} projects={userProjects}
            editable={editable}/>
        ) : (
          <div/>
        )}
        {/*<ProfileProjects />*/}
      </div>
      <div className='bg-secondary-blue flex items-center text-white justify-center relative px-5 py-4'>
        <h1 className='text-base font-primary text-center text-white z-10'>Copyright © 2024 GitMatch</h1>
        <button
          className='absolute right-4 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none focus:ring-2 focus:ring-white'
          onClick={() => navigate('/help')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
          </svg>
        </button>
      </div>
    </div>

  )
}