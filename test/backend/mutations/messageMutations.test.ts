import { Amplify } from 'aws-amplify'
import { createMessage } from '../../../src/backend/mutations/messageMutations'
import awsconfig from '../../../src/aws-exports'
import { CreateMessageModelPayload } from '../../../src/backend/types'
Amplify.configure(awsconfig)

describe('Mutation Tests', () => {

  test('Create Message', async () => {
    const Message: CreateMessageModelPayload = {
      input: {
        message: 'hello world',
        to: 'f4f4a813-3b83-4e3a-99f8-39f5927d52e8',
        from: '3274133e-30cd-44e0-8854-cbe96ec2475e',
        message_date: new Date().toISOString(),
        conversationID: 'bc0707c2-62de-4462-83e1-d5e09ef1356e'
      }
    }
    const result = await createMessage(Message)
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain('data')
  })
})