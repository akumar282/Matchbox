import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { getLikedPostModel, listLikedPostModels } from '@graphql/queries'
import {
  GetLikedPostModelQuery,
  ListLikedPostModelsQuery,
  ListLikedPostModelsQueryVariables,
  GetLikedPostModelQueryVariables
} from '@api'

export async function getLikedPost(post: GetLikedPostModelQueryVariables){
  return await API.graphql<GraphQLQuery<GetLikedPostModelQuery>>({
    query: getLikedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listLikedPosts(post: ListLikedPostModelsQueryVariables){
  return await API.graphql<GraphQLQuery<ListLikedPostModelsQuery>>({
    query: listLikedPostModels,
    variables: post,
    authMode: 'API_KEY'
  })
}