import { Amplify } from 'aws-amplify'
import { createConversation, updateConversation } from '../../../src/backend/mutations/conversationMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateConversationModelPayload, DeleteConversationModelPayload, UpdateConversationModelPayload } from '../../../src/backend/types'
Amplify.configure(awsconfig)

describe.skip('Mutation Tests', () => {

  test('Create conversation', async () => {
    const conversation: CreateConversationModelPayload = {
      input: {
        user_one: 'f4f4a813-3b83-4e3a-99f8-39f5927d52e8',
        user_two: 'c6802cf8-b297-42b9-8017-cda3e3fb9f22',
        messages: []
      }
    }
    const result = await createConversation(conversation)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('data')
  })

  test.skip('Update conversation', async () => {
    const conversation: UpdateConversationModelPayload = {
      input: {
        id: 'bc0707c2-62de-4462-83e1-d5e09ef1356e',
        messages: ['2', '3'],
      }
    }
    const result = await updateConversation(conversation)
    console.log(result)
    console.log(result.data.updateConversationModel.messages)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('data')
  })
})