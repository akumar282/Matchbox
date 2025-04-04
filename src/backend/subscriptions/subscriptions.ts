import { API } from 'aws-amplify'
import { GraphQLSubscription } from '@aws-amplify/api'
import * as subscriptions from '../../graphql/subscriptions'
import {
  OnCreateCommentModelSubscription,
  OnCreateCommentModelSubscriptionVariables, OnCreateContributorNotesModelSubscription,
  OnCreateContributorNotesModelSubscriptionVariables,
  OnCreateMessageModelSubscription,
  OnCreateMessageModelSubscriptionVariables,
  OnCreateNewsletterEmailModelSubscription,
  OnCreateNewsletterEmailModelSubscriptionVariables
} from '@api'

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

export function createCommentSubscription(callback, variables: OnCreateCommentModelSubscriptionVariables) {
  return API.graphql<GraphQLSubscription<OnCreateCommentModelSubscription>>({
    query: subscriptions.onCreateCommentModel,
    variables
  }).subscribe({
    next: ({value }) => callback(value),
    error: (error) => console.warn(error)
  })
}

export function createNotesSubscription(callback, variables: OnCreateContributorNotesModelSubscriptionVariables) {
  return API.graphql<GraphQLSubscription<OnCreateContributorNotesModelSubscription>>({
    query: subscriptions.onCreateContributorNotesModel,
    variables
  }).subscribe({
    next: ({value }) => callback(value),
    error: (error) => console.warn(error)
  })
}