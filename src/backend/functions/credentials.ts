import { newUserSignUp } from '@backend/auth'
import { createUser } from '@backend/mutations/userMutations'
import { v4 as uuidv4 } from 'uuid'
import { Amplify } from 'aws-amplify'
import awsconfig from '@aws-exports'
Amplify.configure(awsconfig)


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
            user_creation_date: new Date().toISOString(),
            saved_posts: [],
            lang_tag: [],
            dev_type_tag: [],
            interest_tag: [],
            size_tag: [],
            framework_tag: [],
            difficulty_tag: [],
            new_user: true,
          }
        }
      )
    }

    return cognitoResult
  } catch (error) {
    console.error(error)
    return 'Sign up failed'
  }
}