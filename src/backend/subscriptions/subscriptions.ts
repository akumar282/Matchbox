import { API } from 'aws-amplify'
import { GraphQLSubscription } from '@aws-amplify/api'
import * as subscriptions from '../../graphql/subscriptions'
import {
  OnCreateNewsletterEmailModelSubscription
} from '@api'

export const createSub = API.graphql<GraphQLSubscription<OnCreateNewsletterEmailModelSubscription>>({
  query: subscriptions.onCreateNewsletterEmailModel
}).subscribe({
  next: ({ provider, value }) => console.log({ provider, value }),
  error: (error) => console.warn(error)
})

export function createSub2(callback) {
  return API.graphql<GraphQLSubscription<OnCreateNewsletterEmailModelSubscription>>({
    query: subscriptions.onCreateNewsletterEmailModel
  }).subscribe({
    next: ({value }) => callback(value),
    error: (error) => console.warn(error)
  })
}