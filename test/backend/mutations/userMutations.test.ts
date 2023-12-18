import { Amplify } from 'aws-amplify'
import awsconfig from '@aws-exports'
import { createUser, updateUser } from '@backend/mutations/userMutations'
import { CreateUsersModelInput, DevelopmentTag, UpdateUsersModelInput } from '@api'

Amplify.configure(awsconfig)





describe('Mutation Tests', () => {

  test.skip('Create user', async () => {
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
  
  test('Update user', async () => {
    const input: UpdateUsersModelInput = {
      id: 'af721c38-5aa2-447d-b722-f9f92666c6b4',
      dev_type_tag: [DevelopmentTag.BACKEND]
    }
    const result = await updateUser({input})
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('BACKEND')
  })
})