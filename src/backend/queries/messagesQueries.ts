import { API } from 'aws-amplify'
import { getMessageModel, listMessageModels } from '@graphql/queries'
import {
  GetMessageModelQuery,
  ListMessageModelsQuery,
  ListMessageModelsQueryVariables,
  GetMessageModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function getMessage(message: { input: GetMessageModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetMessageModelQuery>>({
    query: getMessageModel,
    variables: message,
    authMode: 'API_KEY'
  })
}

export async function listMessage(message: { input: ListMessageModelsQueryVariables}){
  return await API.graphql<GraphQLQuery<ListMessageModelsQuery>>({
    query: listMessageModels,
    variables: message,
    authMode: 'API_KEY'
  })
}