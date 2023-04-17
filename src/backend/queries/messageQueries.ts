import { API } from 'aws-amplify'
import { ListMessageModelsQueryVariables } from '../../API'
import { listMessageModels, getMessageModel } from '../../graphql/queries'


export async function getAllMessages(userID: ListMessageModelsQueryVariables) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: listMessageModels,
      variables: userID
    }
  )
}

export async function getMessageById(id: string) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: getMessageModel,
      variables: { id }
    }
  )
}