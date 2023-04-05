import { getPostById, getPostsByUser } from "../../../src/backend/queries/postQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { ListPostsModelsQueryVariables, ModelIDInput } from "../../../src/API";
Amplify.configure(awsconfig)


describe('Query Tests', () => {

  test.skip('Get Post', async () => {
    const result = await getPostById('fd1d934e-fc16-475a-be95-548e4aa670cd')
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })

  test('List Post by user', async () => {
    const fil: ListPostsModelsQueryVariables = {
      filter: {
        userID: {
          eq: 'eb91bda2-7560-44c6-a89d-b2ada79bc7cf'
        }
      },
      limit: 30
    }
    const result = await getPostsByUser(fil)
    const flatResult = JSON.stringify(result)
    console.log(result.data.listPostsModels)
    console.log(result.data.listPostsModels.items.filter(x => x._deleted !== true))
    console.log(result.data.listPostsModels.items.size)
    expect(flatResult).toContain(`items`)
  })

})