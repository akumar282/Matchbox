import { API } from 'aws-amplify'
import { createUsersConvo, deleteUsersConvo, updateUsersConvo } from '@graphql/mutations'
import {
  CreateUsersConvoInput,
  CreateUsersConvoMutation,
  DeleteUsersConvoInput,
  DeleteUsersConvoMutation,
  UpdateUsersConvoInput,
  UpdateUsersConvoMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createConvo(conversation: { input: CreateUsersConvoInput}){
  return await API.graphql<GraphQLQuery<CreateUsersConvoMutation>>({
    query: createUsersConvo,
    variables: conversation,
    authMode: 'API_KEY'
  })
}

export async function deleteConvo(conversation: { input: DeleteUsersConvoInput}) {
  return await API.graphql<GraphQLQuery<DeleteUsersConvoMutation>>({
    query: deleteUsersConvo,
    variables: conversation,
    authMode: 'API_KEY'
  })
}

export async function updateConvo(conversation: { input: UpdateUsersConvoInput }) {
  return await API.graphql<GraphQLQuery<UpdateUsersConvoMutation>>({
    query: updateUsersConvo,
    variables: conversation,
    authMode: 'API_KEY'
  })
}