import { API } from 'aws-amplify'
import { getConversationModel, listConversationModels } from '@graphql/queries'
import {
  GetConversationModelQuery,
  ListConversationModelsQuery,
  ListConversationModelsQueryVariables,
  GetConversationModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getConversation(conversation: { input: GetConversationModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetConversationModelQuery>>({
    query: getConversationModel,
    variables: conversation,
    authMode: 'API_KEY'
  })
}

export async function listConversation(conversation: { input: ListConversationModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListConversationModelsQuery>>({
    query: listConversationModels,
    variables: conversation,
    authMode: 'API_KEY'
  })
}