import { getUserById } from "../../../src/backend/queries/userQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)


describe('Query Tests', () => {

  test('Get Post', async () => {
    const result = await getUserById('c6802cf8-b297-42b9-8017-cda3e3fb9f22')
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`id`)
  })

})