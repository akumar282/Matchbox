import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { CreatePostsModelInput } from '../../../src/API'
import { createPost } from '../../../src/backend/mutations/postMutations'
import awsconfig from '../../../src/aws-exports'
import { CreatePostsPayload } from '../../../src/backend/types'
import { LanguageEnum as Lang, DevelopmentTag as Dev, InterestTag as Int, SizeTag as Size} from '../../../src/API'
Amplify.configure(awsconfig)


// jest.mock('../../../src/API')
const testnum = Math.floor(Math.random() * 10000)

const query = `query GetData($id: ID!) {
  getData(id: $id) {
    id
  }
}`

const variables = { id: "your_entry_id" }

let dateTime = new Date
const testload: CreatePostsPayload = {
  input: {
    post_title: `Matchbox`,
    description: `A very cool project`,
    project_link: `https://github.com/testuser/testproj.git`,
    image_link: `https://image.link/image.pn`,
    post_date: dateTime.toISOString(),
    userID: `1`,
    lang_tag:  [Lang.C_PLUS_PLUS],
    dev_type_tag:  [Dev.BACKEND],
    interest_tag:  [Int.COMMUNICATE, Int.CONNECT, Int.ENTERTAIN],
    size_tag: [Size.LESS_FIVE],
    _version:  0
  }
}

describe('Mutation Tests', () => {

  test('Create post', async () => {
    const result = await createPost(testload)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })

})