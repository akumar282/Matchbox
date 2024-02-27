import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { getPostsModel, listPostsModels } from '@graphql/queries'
import {
  GetPostsModelQuery,
  ListPostsModelsQuery,
  ListPostsModelsQueryVariables,
  GetPostsModelQueryVariables
} from '@api'

export async function getPost(post: { input: GetPostsModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetPostsModelQuery>>({
    query: getPostsModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listPosts(post: { input: ListPostsModelsQueryVariables}){
  return await API.graphql<GraphQLQuery<ListPostsModelsQuery>>({
    query: listPostsModels,
    variables: post,
    authMode: 'API_KEY'
  })
}