import { Amplify, API } from 'aws-amplify'
import { CreateUsersPayload } from "../types"
import { createUsersModel } from "../../graphql/mutations"

export async function createUser(user: CreateUsersPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createUsersModel,
      variables: user
    }
  )
}