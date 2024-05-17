import React, {createContext, useEffect} from 'react'
import {Auth} from 'aws-amplify'
import {useNavigate} from 'react-router-dom'
import { CognitoUserSession} from 'amazon-cognito-identity-js'
import {getCurrentUserAttributes} from '../backend/auth'
import {userContextType} from '../backend/types'
import {getImage} from '../backend/storage/s3'
import {getUser} from '../backend/queries/userQueries'
import LoadingScreen from './LoadingScreen'

interface Props {
  children: React.ReactNode
}

export const AuthContext = createContext<userContextType | undefined>(undefined)

export default function AuthWrapper({ children }: Props){
  const [isLoggedIn, setLoggedIn] = React.useState(false)
  const [authToken, setAuthToken] = React.useState<CognitoUserSession>()
  const [userInfo, setUserInfo] = React.useState<userContextType>()
  const [isLoading, setIsLoading] = React.useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        setLoggedIn(await Auth.currentAuthenticatedUser())
        setAuthToken(await Auth.currentSession())
        const [attribute] = await getCurrentUserAttributes('id')
        const info: userContextType = {
          id: attribute.value,
          authToken: authToken
        }

        const { data } = await getUser({id: info.id})
        if (data && data.getUsersModel && data.getUsersModel.profile_image && data.getUsersModel.user_name) {
          info.profile_image = await getImage(data.getUsersModel.profile_image)
          info.userName = data.getUsersModel.user_name
          info.new_user = data.getUsersModel.new_user
        } else {
          info.profile_image = await getImage()
          info.userName = 'nosession'
        }

        localStorage.setItem('profile_image', info.profile_image)

        setUserInfo(info)
        setIsLoading(false)
        if(info.new_user === true) {
          navigate('/setup')
        }
      } catch (error) {
        setIsLoading(false)
        navigate('/login')
      }
    }

    getData().catch(console.error)
  }, [navigate])

  if (isLoading) {
    return <LoadingScreen/>
  }

  return isLoggedIn ? (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  ) : null
}