import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')


const payload: CreateUsersModelInput = {
  user_name: 'akumar28',
  email: 'actuallychowmein@gmail',
  password: 'peepeepoopoo'
}

const bigload = {
  input: {
    user_name: 'akumar28',
    email: 'actuallychowmein@gmail',
    password: 'peepeepoopoo'
  }
}

describe('Mutation Tests', () => {
  test('Create user', async () => {
    const result = await createUser(bigload)
    console.log(result)
    expect(createUser).toBeCalled()
  })
})