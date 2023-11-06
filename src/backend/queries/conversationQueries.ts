import { API } from 'aws-amplify'
import { ListConversationModelsQueryVariables } from '../../API'
import { listConversationModels, getConversationModel } from '../../graphql/queries'


export async function getAllConversations(userID: ListConversationModelsQueryVariables) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: listConversationModels,
      variables: userID
    }
  )
}

export async function getConversationById(id: string) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: getConversationModel,
      variables: { id }
    }
  )
}