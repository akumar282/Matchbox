import { API } from 'aws-amplify'
import { createMessageModel, deleteMessageModel, updateMessageModel } from "../../graphql/mutations"
import { CreateMessageModelPayload, DeleteMessageModelPayload, UpdateMessageModelPayload } from "../types"

export async function createMessage(message: CreateMessageModelPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createMessageModel,
      variables: message
    }
  )
}

export async function deleteMessage(message: DeleteMessageModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deleteMessageModel,
      variables: message
    }
  )
}

export async function updateMessage(message: UpdateMessageModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updateMessageModel,
      variables: message
    }
  )
}