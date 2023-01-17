import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateUsersPayload } from '../../../src/graphql/types'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')
const testnum = Math.floor(Math.random() * 10000)

const testload: CreateUsersPayload = {
  input: {
    user_name: `example_user${testnum}`,
    email: `exampleemail${testnum}@gmail.com`,
    password: 'testpassword'
  }
}

describe('Mutation Tests', () => {

  test('Create user', async () => {
    const result = await createUser(testload)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`example_user${testnum}`)
  })
})