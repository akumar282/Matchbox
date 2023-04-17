import { getAllConversations, getConversationById } from "../../../src/backend/queries/conversationQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { ListConversationModelsQueryVariables } from "../../../src/API";
Amplify.configure(awsconfig)

describe.skip('Query Tests', () => {

  test('List Conversation by user', async () => {
    const fil: ListConversationModelsQueryVariables = {
      filter: {
        user_one: {
          eq: 'f4f4a813-3b83-4e3a-99f8-39f5927d52e8'
        },
      },
      limit: 30,
    }
    const result = await getAllConversations(fil)
    const flatResult = JSON.stringify(result)
    console.log(result.data.listConversationModels.items.filter(x => x._deleted !== true))
    expect(flatResult).toContain(`items`)
  })

  test('Get Conversation by ID', async () => {
    const result = await getConversationById('bc0707c2-62de-4462-83e1-d5e09ef1356e')
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`data`)
  })
})