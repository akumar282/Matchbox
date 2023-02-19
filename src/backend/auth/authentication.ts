import { Auth } from 'aws-amplify'



export async function newUserSignUp(username: string, password: string, email: string, userId: string): string {
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