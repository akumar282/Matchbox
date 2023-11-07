import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser, deleteUser, updateUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateUsersPayload, DeleteUserModelPayload, UpdateUsersModelPayload } from '../../../src/backend/types'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')
const testnum = Math.floor(Math.random() * 10000)


describe.skip('Mutation Tests', () => {

  test('Create user', async () => {
    let datetime = new Date
    const testload: CreateUsersPayload = {
      input: {
        user_name: `example_user${testnum}`,
        email: `exampleemail${testnum}@gmail.com`,
        first_name: "props.firstName",
        last_name: "props.lastName",
        password: "props.password",
        profile_image: "test",
        user_creation_date: '2023-04-21T04:05:58.395Z' ,
        saved_posts: [],
        lang_tag: [],
        dev_type_tag: [],
        interest_tag: [],
        size_tag: [],
        framework_tag: [],
        new_user: true,
      }
    }

    const result = await createUser(testload)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`example_user${testnum}`)
  })
})