import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser, deleteUser, updateUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateUsersPayload, DeleteUserModelPayload, UpdateUsersModelPayload } from '../../../src/graphql/types'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')
const testnum = Math.floor(Math.random() * 10000)

const test_id = '6795d81a-425f-460d-9c21-b733adbf62ad'

describe('Mutation Tests', () => {

  test('Create user', async () => {

    const testload: CreateUsersPayload = {
      input: {
        user_name: `example_user${testnum}`,
        email: `exampleemail${testnum}@gmail.com`,
        password: 'testpassword'
      }
    }

    const result = await createUser(testload)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`example_user${testnum}`)
  })

  test('Update user', async () => {
    const testload: UpdateUsersModelPayload = {
      input: {
        id: `${test_id}`,
        dahublink: 'https://github.com/akumar282'
      }
    }

    const result = await updateUser(testload)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('https://github.com/akumar282')
  })

  test.skip('Delete User', async () => {
    const testload: DeleteUserModelPayload = {
      input: {
        id: `${test_id}`,
        _version: 1
      }
    }
    const result = await deleteUser(testload)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('fuck you bitch')
  })
})