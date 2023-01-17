import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateUsersPayload } from '../../../src/graphql/types'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')

const bigload: CreateUsersPayload = {
  input: {
    user_name: 'haylau',
    email: 'haydenemail@gmail',
    password: 'peepeepoopoo2'
  }
}

describe('Mutation Tests', () => {
  test('Create user', async () => {
    const result = await createUser(bigload)
    console.log(result)
    expect(createUser).toBeCalled()
  })
})