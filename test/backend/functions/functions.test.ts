import {describe, expect, test} from '@jest/globals'
import {doesDmExist} from '@utils/helpers'
import {Amplify} from 'aws-amplify'
import awsconfig from '@aws-exports'
Amplify.configure(awsconfig)

describe('Mutation Tests', () => {

  test('Update user', async () => {
    const result = await doesDmExist('e3b7bc79-a71c-439c-b362-4ab9208fc7dc', '9ddf6cc3-7a05-4bae-a2a7-8b8689d9441a')
    expect(result).toEqual(true)
  })
})