import { API } from 'aws-amplify'
import { GraphQLSubscription } from '@aws-amplify/api'
import * as subscriptions from '../../graphql/subscriptions'
import {
  OnCreateMessageModelSubscription,
  OnCreateMessageModelSubscriptionVariables,
  OnCreateNewsletterEmailModelSubscription, OnCreateNewsletterEmailModelSubscriptionVariables
} from '@api'

export const createSub = API.graphql<GraphQLSubscription<OnCreateNewsletterEmailModelSubscription>>({
  query: subscriptions.onCreateNewsletterEmailModel
}).subscribe({
  next: ({ provider, value }) => console.log({ provider, value }),
  error: (error) => console.warn(error)
})

export function createSubNewsletter(callback, variables?: OnCreateNewsletterEmailModelSubscriptionVariables) {
  return API.graphql<GraphQLSubscription<OnCreateNewsletterEmailModelSubscription>>({
    query: subscriptions.onCreateNewsletterEmailModel,
    variables
  }).subscribe({
    next: ({value }) => callback(value),
    error: (error) => console.warn(error)
  })
}

export function createMessageSubscription(callback, variables: OnCreateMessageModelSubscriptionVariables) {
  return API.graphql<GraphQLSubscription<OnCreateMessageModelSubscription>>({
    query: subscriptions.onCreateMessageModel,
    variables
  }).subscribe({
    next: ({value }) => callback(value),
    error: (error) => console.warn(error)
  })
}