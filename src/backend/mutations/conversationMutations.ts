import { API } from 'aws-amplify'
import { createConversationModel, deleteConversationModel, updateConversationModel } from "../../graphql/mutations"
import { CreateConversationModelPayload, DeleteConversationModelPayload, UpdateConversationModelPayload } from "../types"

export async function createConversation(conversation: CreateConversationModelPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createConversationModel,
      variables: conversation
    }
  )
}

export async function deleteConversation(conversation: DeleteConversationModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deleteConversationModel,
      variables: conversation
    }
  )
}

export async function updateConversation(conversation: UpdateConversationModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updateConversationModel,
      variables: conversation
    }
  )
}