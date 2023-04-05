import { Auth } from 'aws-amplify'

export interface CustomAttribute {
  name: string
  value: string
}

export async function newUserSignUp(username: string, password: string, email: string, userId: string): Promise<string> {
  try {
    const newUser = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        'custom:userId': userId
      },
      autoSignIn: {
        enabled: true
      }
    })
    console.log(`User ${userId} successfully created! Message: ${newUser}`)
    return 'Success'
  } catch (error) {
    console.error('Sign up failed!', error)
    return 'Failed'
  }
}

export async function getCurrentUserAttributes(): Promise<CustomAttribute[]> {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const customAttributes: CustomAttribute[] = Object.entries(user.attributes)
      .filter(([key, value]) => key.startsWith('custom:'))
      .map(([key, value]) => ({
        name: key.substring('custom:'.length),
        value: value as string
      }))
    console.log(customAttributes)
    return customAttributes
  } catch (error) {
    console.log('Error getting user attributes: ', error)
    return []
  }
}