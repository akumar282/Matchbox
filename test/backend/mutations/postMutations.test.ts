import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { CreatePostsModelInput } from '../../../src/API'
import { createPost, deletePost, updatePost } from '../../../src/backend/mutations/postMutations'
import awsconfig from '../../../src/aws-exports'
import { CreatePostsModelPayload, UpdatePostsModelPayload } from '../../../src/backend/types'
import { LanguageTag, DevelopmentTag, InterestTag, SizeTag} from '../../../src/API'
Amplify.configure(awsconfig)

const testnum = Math.floor(Math.random() * 10000)
const test_id = '6795d81a-425f-460d-9c21-b733adbf62ae' + testnum

let dateTime = new Date
const testload: CreatePostsModelPayload = {
  input: {
    id: `${test_id}`,
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


describe.skip('Mutation Tests', () => {

  test('Create post', async () => {
    const result = await createPost(testload)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })

  test('Update post', async () => {
    const result = await updatePost(
      {
        input: {
          id: `${test_id}`,
          description: 'a project'
        }
      }
    )
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })

  test('Delete post', async () => {
    const result = await deletePost({input: {id: `${test_id}`, _version: 2}})
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })


})