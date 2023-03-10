import { getPostById, getPostsByUser } from "../../../src/backend/queries/postQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { ModelIDInput } from "../../../src/API";
Amplify.configure(awsconfig)


describe('Query Tests', () => {

  test.skip('Get Post', async () => {
    const result = await getPostById('fd1d934e-fc16-475a-be95-548e4aa670cd')
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })

  test('List Post by user', async () => {
    const result = await getPostsByUser({userID: '1' as ModelIDInput})
    const flatResult = JSON.stringify(result)
    console.log(result.data.listPostsModels.items)
    expect(flatResult).toContain(`items`)
  })

})