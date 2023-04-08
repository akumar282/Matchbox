import { Amplify } from 'aws-amplify'
import { createComment } from '../../../src/backend/mutations/commentMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateCommentModelPayload, DeleteCommentModelPayload, UpdateCommentModelPayload } from '../../../src/backend/types'
Amplify.configure(awsconfig)



describe('Mutation Tests', () => {

  test('Create post', async () => {
    let datetime = new Date
    const comment: CreateCommentModelPayload = {
      input: {
        comment: "Cool Project",
        postID: '3c2ab02f-e3b2-4747-80ed-76b68bfa8007',
        user_name: "haylau",
        userID: 'f4f4a813-3b83-4e3a-99f8-39f5927d52e8',
        comment_date: datetime.toISOString()
      }
    }
    const result = await createComment(comment)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`haylau`)
  })
})