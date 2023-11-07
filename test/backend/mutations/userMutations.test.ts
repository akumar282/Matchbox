import { Amplify } from 'aws-amplify'
import awsconfig from '@aws-exports'
import { createUser } from '@backend/mutations/userMutations'
import { CreateUsersModelInput } from '@api'

Amplify.configure(awsconfig)





describe('Mutation Tests', () => {

  test('Create user', async () => {
    const input: CreateUsersModelInput = {
      user_name: 'example_user',
      password: 'password',
      first_name: 'Example',
      last_name: 'User',
      email: 'example@user.com'
    }
    const result = await createUser({input})
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('example_user')
  })
})