import { API } from 'aws-amplify'
import { ListPostsModelsQueryVariables, ModelIDInput, ModelPostsModelFilterInput } from '../../API'
import { getPostsModel, listPostsModels } from '../../graphql/queries'


export async function getPostById(id: string){
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: getPostsModel,
      variables: {id}
    }
  )
}

export async function getPostsByUser(userID: ListPostsModelsQueryVariables) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: listPostsModels,
      variables: userID 
    }
  )
}