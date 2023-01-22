import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { CreatePostsModelInput } from '../../../src/API'
import { createPost } from '../../../src/backend/mutations/postMutations'
import awsconfig from '../../../src/aws-exports'
import { CreatePostsPayload } from '../../../src/backend/types'
import { LanguageTag, DevelopmentTag, InterestTag, SizeTag} from '../../../src/API'
Amplify.configure(awsconfig)

let dateTime = new Date
const testload: CreatePostsPayload = {
  input: {
    post_title: `Matchbox`,
    description: `A very cool project`,
    project_link: `https://github.com/testuser/testproj.git`,
    image_link: `https://image.link/image.pn`,
    post_date: dateTime.toISOString(),
    userID: `1`,
    lang_tag:  [LanguageTag.C_PLUS_PLUS],
    dev_type_tag:  [DevelopmentTag.BACKEND],
    interest_tag:  [InterestTag.COMMUNICATION, InterestTag.CONNECTING, InterestTag.ENTERTAINMENT],
    size_tag: [SizeTag.LESS_FIVE],
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