import { updateSubscription } from '../../../src/backend/subscriptions/subscriptions'
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { OnUpdateConversationModelSubscriptionVariables } from "../../../src/API";
Amplify.configure(awsconfig)

jest.setTimeout(20000)

describe.skip('Query Tests', () => {

  test('Subscribe Conversation by user', async () => {
    const variables: OnUpdateConversationModelSubscriptionVariables = {
      filter: {
        id: {
          eq: 'bc0707c2-62de-4462-83e1-d5e09ef1356e'
        }
      }
    }
    const result = await updateSubscription(variables)
    console.log(result)
    expect(result).toBeDefined()
  })
})