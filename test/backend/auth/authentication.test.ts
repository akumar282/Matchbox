import { newUserSignUp } from '../../../src/backend/auth'
import { Amplify } from 'aws-amplify'
import { Auth } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)




describe('Authentication methods test', () => {
  test.skip('Sign Up user test', async () => {
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

  test.skip('change user test', async () => {
    await Auth.forgotPassword('akumar28@uw.edu').then((data) => console.log(data)).catch((err) => console.log(err));
  })

  test.skip('change user test', async () => {
    await Auth.forgotPasswordSubmit('akumar28@uw.edu', '082617', '87654321').then((data) => console.log(data)).catch((err) => console.log(err));
  })
})