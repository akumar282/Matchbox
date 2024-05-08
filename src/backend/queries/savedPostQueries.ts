import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { getSavedPostModel } from '@graphql/queries'
import {
  GetSavedPostModelQuery,
  ListSavedPostModelsQuery,
  ListSavedPostModelsQueryVariables,
  GetSavedPostModelQueryVariables
} from '@api'
import {listSavedPostModelsCustom} from '../../customQueries/queries'

export async function getSavedPost(post: GetSavedPostModelQueryVariables){
  return await API.graphql<GraphQLQuery<GetSavedPostModelQuery>>({
    query: getSavedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listSavedPosts(post: ListSavedPostModelsQueryVariables){
  return await API.graphql<GraphQLQuery<ListSavedPostModelsQuery>>({
    query: listSavedPostModelsCustom,
    variables: post,
    authMode: 'API_KEY'
  })
}