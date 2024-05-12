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
import {useParams} from 'react-router-dom'

export default function UserProfile() {

  const userInfo = useContext(AuthContext)
  const [userData, setUserData] = React.useState<UsersModel>()
  const [profilePic, setProfilePic] = React.useState<string>()
  const [postsNum, setPostsNum] = React.useState<number>()
  const [userProjects, setUserProjects] = useState<React.ReactNode[]>([])
  const [editable, setEditable] = useState<boolean>(false)


  const { id } = useParams()

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
    <div className='min-h-screen bg-primary-purple flex flex-col relative overflow-hidden'>
      <NavBar />
      <div className='max-w-[1070px] mx-auto w-[97%] h-full flex flex-col rounded-lg  mt-4'>
        <h1></h1>
        {userData ? (
          <ProfileHeader data={userData} picture={profilePic!} postsNum={postsNum ?? 0} projects={userProjects} editable={editable} />
        ) : (
          <div/>
        )}
        {/*<ProfileProjects />*/}
      </div>
    </div>
  )
}