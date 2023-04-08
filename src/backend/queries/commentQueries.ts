import { API } from 'aws-amplify'
import { ListCommentModelsQueryVariables } from '../../API'
import { getCommentModel, listCommentModels } from '../../graphql/queries'


export async function getAllComments(userID: ListCommentModelsQueryVariables) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: listCommentModels,
      variables: userID
    }
  )
}