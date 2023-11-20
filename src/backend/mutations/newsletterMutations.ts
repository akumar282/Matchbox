import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { createNewsletterEmailModel } from '@graphql/mutations'
import { CreateNewsletterEmailModelInput, CreateNewsletterEmailModelMutation } from '@api'

export async function createNewsletterEmail(post: { input: CreateNewsletterEmailModelInput }) {
  return await API.graphql<GraphQLResult<CreateNewsletterEmailModelMutation>>(
    {
      authMode: 'API_KEY',
      query: createNewsletterEmailModel,
      variables: post
    }
  )
}