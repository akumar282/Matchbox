import { API } from 'aws-amplify'
import { getMessageModel, listMessageModels } from '@graphql/queries'
import {
  GetMessageModelQuery,
  ListMessageModelsQuery,
  ListMessageModelsQueryVariables,
  GetMessageModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getMessage(message: { input: GetMessageModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetMessageModelQuery>>({
    query: getMessageModel,
    variables: message,
    authMode: 'API_KEY'
  })
}

export async function listMessage(message: { input: ListMessageModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListMessageModelsQuery>>({
    query: listMessageModels,
    variables: message,
    authMode: 'API_KEY'
  })
}