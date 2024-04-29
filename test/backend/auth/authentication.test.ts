import { newUserSignUp } from '@backend/auth'
import { Amplify } from 'aws-amplify'
import awsconfig from '@aws-exports'
import {describe ,test, expect} from '@jest/globals'
Amplify.configure(awsconfig)




describe('Authentication methods test', () => {
  test('Sign Up user test', async () => {
    const userPackage = {
      username: 'actuallychowmein',
      password: 'T8#testtest',
      email: 'actuallychowmein@gmail.com',
      userId: 'bx7g93n432bcws2'
    }
    const result = await newUserSignUp(
      userPackage.username,
      userPackage.password,
      userPackage.email,
      userPackage.userId
    )
    expect(result).toEqual('Success')
  })

})