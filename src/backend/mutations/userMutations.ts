import { API } from 'aws-amplify'
import { createUsersModel, deleteUsersModel, updateUsersModel } from '@graphql/mutations'
import { 
  CreateUsersModelInput, 
  CreateUsersModelMutation, 
  DeleteUsersModelInput, 
  DeleteUsersModelMutation, 
  UpdateUsersModelInput, 
  UpdateUsersModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createUser(user: { input: CreateUsersModelInput}){
  return await API.graphql<GraphQLQuery<CreateUsersModelMutation>>({
    query: createUsersModel,
    variables: user,
    authMode: 'API_KEY'
  })
}

export async function deleteUser(user: { input: DeleteUsersModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteUsersModelMutation>>({
    query: deleteUsersModel,
    variables: user,
    authMode: 'API_KEY'
  })
}

export async function updateUser(user: { input: UpdateUsersModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateUsersModelMutation>>({
    query: updateUsersModel,
    variables: user,
    authMode: 'API_KEY'
  })
}