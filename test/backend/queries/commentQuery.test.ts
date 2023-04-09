import { getAllComments } from "../../../src/backend/queries/commentQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { ListCommentModelsQueryVariables } from "../../../src/API";
Amplify.configure(awsconfig)

describe('Query Tests', () => {

  test('List Post by user', async () => {
    const fil: ListCommentModelsQueryVariables = {
      filter: {
        userID: {
          eq: 'f4f4a813-3b83-4e3a-99f8-39f5927d52e8'
        },
      },
      limit: 30,
    }
    const result = await getAllComments(fil)
    const flatResult = JSON.stringify(result)
    console.log(result.data.listCommentModels.items.filter(x => x._deleted !== true))
    expect(flatResult).toContain(`items`)
  })

})