import {newUserSignUp} from '@backend/auth'
import {createUser} from '@backend/mutations/userMutations'
import {v4 as uuidv4} from 'uuid'
import {NotificationType} from '@api'

export async function standardSignUp(username: string, email: string, password: string): Promise<string> {
  const uuidGen = uuidv4()
  try {
    const cognitoResult = await newUserSignUp(username, password, email, uuidGen)
    if (cognitoResult ===  'Success') {
      await createUser(
        {
          input:{
            id: uuidGen,
            user_name: username,
            email: email,
            password: 'password',
            profile_image: 'defaultimg4.JPG',
            user_creation_date: new Date().toISOString(),
            lang_tag: [],
            dev_type_tag: [],
            interest_tag: [],
            size_tag: [],
            framework_tag: [],
            difficulty_tag: [],
            cloud_provider_tag: [],
            liked_posts: [],
            saved_posts: [],
            experience_level: [],
            new_user: true,
            notification_type: NotificationType.EMAIL_AND_NEWSLETTER
          }
        }
      )
    }

    return cognitoResult
  } catch (error) {
    console.error(error)
    return 'Failed'
  }
}