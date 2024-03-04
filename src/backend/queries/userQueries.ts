import { API } from 'aws-amplify'
import { getUsersModel, listUsersModels } from '@graphql/queries'
import {
  GetUsersModelQuery,
  ListUsersModelsQuery,
  ListUsersModelsQueryVariables,
  GetUsersModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function getUser(user:  GetUsersModelQueryVariables){
  return await API.graphql<GraphQLQuery<GetUsersModelQuery>>({
    query: getUsersModel,
    variables: user,
    authMode: 'API_KEY'
  })
}

export async function listUsers(user: { input: ListUsersModelsQueryVariables}){
  return await API.graphql<GraphQLQuery<ListUsersModelsQuery>>({
    query: listUsersModels,
    variables: user,
    authMode: 'API_KEY'
  })
}