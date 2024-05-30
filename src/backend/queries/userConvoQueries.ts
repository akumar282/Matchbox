import { API } from 'aws-amplify'
import { getUsersConvo, listUsersConvos } from '@graphql/queries'
import {
  GetUsersConvoQuery,
  ListUsersConvosQuery,
  ListUsersConvosQueryVariables,
  GetUsersConvoQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function getUserConvo(user:  GetUsersConvoQueryVariables){
  return await API.graphql<GraphQLQuery<GetUsersConvoQuery>>({
    query: getUsersConvo,
    variables: user,
    authMode: 'API_KEY'
  })
}

export async function listUserConvos(user: ListUsersConvosQueryVariables){
  return await API.graphql<GraphQLQuery<ListUsersConvosQuery>>({
    query: listUsersConvos,
    variables: user,
    authMode: 'API_KEY'
  })
}