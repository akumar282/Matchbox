import { API, graphqlOperation } from 'aws-amplify'
import { createUsersModel, deleteUsersModel, updateUsersModel } from '@graphql/mutations'
import { 
  CreateUsersModelInput, 
  CreateUsersModelMutation, 
  DeleteUsersModelInput, 
  DeleteUsersModelMutation, 
  UpdateUsersModelInput, 
  UpdateUsersModelMutation
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function createUser(user: { input: CreateUsersModelInput}){
  return await API.graphql<GraphQLResult<CreateUsersModelMutation>>(graphqlOperation({
    query: createUsersModel,
    variables: user,
    authMode: 'API_KEY'
  }))
}

export async function deleteUser(user: { input: DeleteUsersModelInput}) {
  return await API.graphql<GraphQLResult<DeleteUsersModelMutation>>(graphqlOperation({
    query: deleteUsersModel,
    variables: user,
    authMode: 'API_KEY'
  }))
}

export async function updateUser(user: { input: UpdateUsersModelInput }) {
  return await API.graphql<GraphQLResult<UpdateUsersModelMutation>>(graphqlOperation({
    query: updateUsersModel,
    variables: user,
    authMode: 'API_KEY'
  }))
}