import { Amplify, API } from 'aws-amplify'
import { CreateUsersModelInput } from "../../API"
import { createUsersModel } from "../../graphql/mutations"

export async function createUser(user: any) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createUsersModel,
      variables: user
    }
  )
}