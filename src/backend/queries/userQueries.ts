import { API } from 'aws-amplify'
import { getUsersModel, listUsersModels } from '@graphql/queries'
import {
  GetUsersModelQuery,
  ListUsersModelsQuery,
  ListUsersModelsQueryVariables,
  GetUsersModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getUser(user: { input: GetUsersModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetUsersModelQuery>>({
    query: getUsersModel,
    variables: user,
    authMode: 'API_KEY'
  })
}

export async function listUsers(user: { input: ListUsersModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListUsersModelsQuery>>({
    query: listUsersModels,
    variables: user,
    authMode: 'API_KEY'
  })
}