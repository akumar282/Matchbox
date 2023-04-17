import { getAllMessages, getMessageById } from "../../../src/backend/queries/messageQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { ListMessageModelsQueryVariables } from "../../../src/API";
Amplify.configure(awsconfig)

describe.skip('Query Tests', () => {

  test('List Message by user', async () => {
    const fil: ListMessageModelsQueryVariables = {
      filter: {
        from: {
          eq: 'f4f4a813-3b83-4e3a-99f8-39f5927d52e8'
        },
      },
      limit: 30,
    }
    const result = await getAllMessages(fil)
    const flatResult = JSON.stringify(result)
    console.log(result.data.listMessageModels.items.filter(x => x._deleted !== true))
    expect(flatResult).toContain(`items`)
  })

  test('Get Message by ID', async () => {
    const result = await getMessageById('9ad64c6f-0ea1-4dcc-9fed-9a89a1ca6bd4')
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`data`)
  })
})