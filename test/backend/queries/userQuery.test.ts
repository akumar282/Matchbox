import { getUserById } from "../../../src/backend/queries/userQueries";
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)


describe.skip('Query Tests', () => {

  test('Get Post', async () => {
    const result = await getUserById('f4f4a813-3b83-4e3a-99f8-39f5927d52e8')
    console.log(result)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`id`)
  })

})