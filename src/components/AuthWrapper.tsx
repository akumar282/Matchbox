import React, {useEffect} from 'react'
import {Auth} from 'aws-amplify'
import {useNavigate} from 'react-router-dom'
import { CognitoUserSession} from 'amazon-cognito-identity-js'
import {getCurrentUserAttributes} from '../backend/auth'

interface Props {
  children: React.ReactElement
}

interface userType {
  id: string,
  name?: string,
  userName: string
}

export default function AuthWrapper({ children }: Props){
  const [isLoggedIn, setLoggedIn] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authToken, setAuthToken] = React.useState<CognitoUserSession>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = React.useState<userType>()

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        const currUser = await Auth.currentAuthenticatedUser()
        setLoggedIn(true)
        const tokenInfo = await Auth.currentSession()
        setAuthToken(tokenInfo)
        const [attribute] = await getCurrentUserAttributes('id')
        const info: userType = {
          id: attribute.value,
          userName: currUser.userName,
        }
        setUserInfo(info)
      } catch (error) {
        // This will catch any error from Auth.currentAuthenticatedUser(), including not being authenticated
        console.error(error)
        navigate('/')
      }
    }

    getData().catch(console.error)
  }, [navigate])

  return isLoggedIn ? children : null
}