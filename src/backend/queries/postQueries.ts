import { API } from 'aws-amplify'
import { getPostsModel, listPostsModels } from '@graphql/queries'
import {
  GetPostsModelQuery,
  ListPostsModelsQuery,
  ListPostsModelsQueryVariables,
  GetPostsModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getPost(post: { input: GetPostsModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetPostsModelQuery>>({
    query: getPostsModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listPosts(post: { input: ListPostsModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListPostsModelsQuery>>({
    query: listPostsModels,
    variables: post,
    authMode: 'API_KEY'
  })
}