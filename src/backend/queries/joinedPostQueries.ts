import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { getJoinedPostModel } from '@graphql/queries'
import {
  GetJoinedPostModelQuery,
  ListJoinedPostModelsQuery,
  ListJoinedPostModelsQueryVariables,
  GetJoinedPostModelQueryVariables
} from '@api'
import {listJoinedPostModelsCustom} from '../../customQueries/queries'

export async function getJoinedPost(post: GetJoinedPostModelQueryVariables){
  return await API.graphql<GraphQLQuery<GetJoinedPostModelQuery>>({
    query: getJoinedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listJoinedPosts(post: ListJoinedPostModelsQueryVariables){
  return await API.graphql<GraphQLQuery<ListJoinedPostModelsQuery>>({
    query: listJoinedPostModelsCustom,
    variables: post,
    authMode: 'API_KEY'
  })
}