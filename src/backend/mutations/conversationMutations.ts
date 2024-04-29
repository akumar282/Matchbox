import { API } from 'aws-amplify'
import { createConversationModel, deleteConversationModel, updateConversationModel } from '@graphql/mutations'
import {
  CreateConversationModelInput,
  CreateConversationModelMutation,
  DeleteConversationModelInput,
  DeleteConversationModelMutation,
  UpdateConversationModelInput,
  UpdateConversationModelMutation
} from '@api'
import {GraphQLQuery} from '@aws-amplify/api'

export async function createConversation(conversation: { input: CreateConversationModelInput}){
  return await API.graphql<GraphQLQuery<CreateConversationModelMutation>>({
    query: createConversationModel,
    variables: conversation,
    authMode: 'API_KEY'
  })
}

export async function deleteConversation(conversation: { input: DeleteConversationModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteConversationModelMutation>>({
    query: deleteConversationModel,
    variables: conversation,
    authMode: 'API_KEY'
  })
}

export async function updateConversation(conversation: { input: UpdateConversationModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateConversationModelMutation>>({
    query: updateConversationModel,
    variables: conversation,
    authMode: 'API_KEY'
  })
}