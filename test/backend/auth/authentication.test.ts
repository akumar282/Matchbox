import { newUserSignUp } from '../../../src/backend/auth'
import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)




describe.skip('Authentication methods test', () => {
  test('Sign Up user test', async () => {
    const userPackage = {
      username: 'actuallychowmein',
      password: 'testtest',
      email: 'test@appmatchbox.com',
      userId: 'bx7g93n432bcws2'
    }
    const result = await newUserSignUp(
      userPackage.email, 
      userPackage.password, 
      userPackage.email, 
      userPackage.userId
      )
    expect(result).toEqual('Success')
  })
})