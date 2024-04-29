import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { createNewsletterEmailModel } from '@graphql/mutations'
import { CreateNewsletterEmailModelInput, CreateNewsletterEmailModelMutation } from '@api'

export async function createNewsletterEmail(post: { input: CreateNewsletterEmailModelInput }) {
  return await API.graphql<GraphQLQuery<CreateNewsletterEmailModelMutation>>(
    {
      authMode: 'API_KEY',
      query: createNewsletterEmailModel,
      variables: post
    }
  )
}