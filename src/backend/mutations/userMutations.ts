import { API } from 'aws-amplify'
import { CreateUsersPayload, DeleteUserModelPayload, UpdateUsersModelPayload } from "../../graphql/types"
import { createUsersModel, deleteUsersModel, updateUsersModel } from "../../graphql/mutations"

export async function createUser(user: CreateUsersPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createUsersModel,
      variables: user
    }
  )
}

export async function updateUser(user: UpdateUsersModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updateUsersModel,
      variables: user
    }
  )
}

export async function deleteUser(user: DeleteUserModelPayload ) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deleteUsersModel,
      variables: user
    }
  )
}