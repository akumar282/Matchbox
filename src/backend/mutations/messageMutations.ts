import { API } from 'aws-amplify'
import { createMessageModel, deleteMessageModel, updateMessageModel } from '@graphql/mutations'
import {
  CreateMessageModelInput,
  CreateMessageModelMutation,
  DeleteMessageModelInput,
  DeleteMessageModelMutation,
  UpdateMessageModelInput,
  UpdateMessageModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createMessage(message: { input: CreateMessageModelInput}){
  return await API.graphql<GraphQLQuery<CreateMessageModelMutation>>({
    query: createMessageModel,
    variables: message,
    authMode: 'API_KEY'
  })
}

export async function deleteMessage(message: { input: DeleteMessageModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteMessageModelMutation>>({
    query: deleteMessageModel,
    variables: message,
    authMode: 'API_KEY'
  })
}

export async function updateMessage(message: { input: UpdateMessageModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateMessageModelMutation>>({
    query: updateMessageModel,
    variables: message,
    authMode: 'API_KEY'
  })
}