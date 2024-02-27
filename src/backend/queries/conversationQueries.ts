import { API } from 'aws-amplify'
import { getConversationModel, listConversationModels } from '@graphql/queries'
import {
  GetConversationModelQuery,
  ListConversationModelsQuery,
  ListConversationModelsQueryVariables,
  GetConversationModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function getConversation(conversation: { input: GetConversationModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetConversationModelQuery>>({
    query: getConversationModel,
    variables: conversation,
    authMode: 'API_KEY'
  })
}

export async function listConversation(conversation: { input: ListConversationModelsQueryVariables}){
  return await API.graphql<GraphQLQuery<ListConversationModelsQuery>>({
    query: listConversationModels,
    variables: conversation,
    authMode: 'API_KEY'
  })
}