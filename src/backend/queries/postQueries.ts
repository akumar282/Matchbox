import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import {getPostsModel, listPostsModels, searchPostsModels} from '@graphql/queries'
import {
  GetPostsModelQuery,
  ListPostsModelsQuery,
  ListPostsModelsQueryVariables,
  GetPostsModelQueryVariables,
  SearchPostsModelsQuery,
  SearchPostsModelsQueryVariables,
} from '@api'
import {getTotalPostsNumber} from '../../customQueries/queries'

export async function getPost(post: GetPostsModelQueryVariables){
  return await API.graphql<GraphQLQuery<GetPostsModelQuery>>({
    query: getPostsModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listPosts(post: ListPostsModelsQueryVariables){
  return await API.graphql<GraphQLQuery<ListPostsModelsQuery>>({
    query: listPostsModels,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function searchPosts(post: SearchPostsModelsQueryVariables){
  return await API.graphql<GraphQLQuery<SearchPostsModelsQuery>>({
    query: searchPostsModels,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function aggregatePosts(id: GetPostsModelQueryVariables){
  return await API.graphql<GraphQLQuery<SearchPostsModelsQuery>>({
    query: getTotalPostsNumber,
    variables: id,
    authMode: 'API_KEY'
  })
}