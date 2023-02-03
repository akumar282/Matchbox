import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { CreateNewsletterEmailModelInput } from '../../../src/API'
import { createNewsletterEmail } from '../../../src/backend/mutations/newsletterMutations'
import { CreateNewsletterEmailModelPayload } from '../../../src/backend/types'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)

const testload: CreateNewsletterEmailModelPayload = {
  input: {
    email: "unhinged@matchbox.com"
  }
}

describe('Mutation Tests', () => {

  test('Create NewsletterEmail', async () => {
    const result = await createNewsletterEmail(testload)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`unhinged@matchbox.com`)
  })

})