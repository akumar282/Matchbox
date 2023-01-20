import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { CreatePostsModelInput } from '../../../src/API'
import { createPost } from '../../../src/backend/mutations/postMutations'
import awsconfig from '../../../src/aws-exports'
import { CreatePostsPayload } from '../../../src/backend/types'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')
const testnum = Math.floor(Math.random() * 10000)

const query = `query GetData($id: ID!) {
  getData(id: $id) {
    id
  }
}`

const variables = { id: "your_entry_id" }

const testload: CreatePostsPayload = {
  input: {
    post_title: ``,
    userID: ``,
    description: ``
  }
}

describe('Mutation Tests', () => {

  // test('Create user', async () => {
  //   // const item = await API.get("items", "/items/123");
  //   const result = await createPost(testload)
  //   const flatResult = JSON.stringify(result)
  //   expect(flatResult).toContain(`example_user${testnum}`)
  // })
})